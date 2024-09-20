"use client";
import { useDebounce } from "use-debounce";
import { useEffect, useState, useRef } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { Input } from "../ui/input";
import { fetchCities } from "@/actions/fetchAll";
import { DrawerClose } from "@/components/ui/drawer";
import useLocationStore from "@/store/useLocationStore";

const AZURE_MAPS_API_KEY = process.env.NEXT_PUBLIC_AZURE_MAPS_API_KEY;
const CACHE_KEY = 'locationData';
const CACHE_EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour

export function LocationSearchComponent() {
    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query] = useDebounce(text, 500);
    const isFirstRender = useRef(true);
    const [cities, setCities] = useState([]);

    const setLocation = useLocationStore((state) => state.setLocation);
    const setNearestCity = useLocationStore((state) => state.setNearestCity);

    useEffect(() => {
        const fetchCitiesData = async () => {
            try {
                const response = await fetchCities();
                setCities(response);
                console.log("Cities:", response);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
        fetchCitiesData();
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const fetchData = async () => {
            if (!query) {
                setSuggestions([]);
                return;
            }

            try {
                const response = await fetch(
                    `https://atlas.microsoft.com/search/address/json?api-version=1.0&query=${query}&subscription-key=${AZURE_MAPS_API_KEY}&countrySet=IN`
                );
                const data = await response.json();
                const results = data.results.map(result => ({
                    name: result.address.freeformAddress,
                    latitude: result.position.lat,
                    longitude: result.position.lon
                }));
                setSuggestions(results.slice(0, 10));
            } catch (error) {
                console.error("Error fetching suggestions:", error);
            }
        };

        fetchData();
    }, [query]);

    const fetchLocationFromCache = () => {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
            const { locationName, timestamp } = JSON.parse(cachedData);
            const currentTime = new Date().getTime();
            if (currentTime - timestamp < CACHE_EXPIRATION_TIME) {
                setText(locationName);
                return true;
            }
        }
        return false;
    };

    const cacheLocationData = (locationName) => {
        const cacheData = {
            locationName,
            timestamp: new Date().getTime()
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in kilometers
    };

    const findNearestCity = (latitude, longitude) => {
        let nearestCity = null;
        let minDistance = Infinity;

        cities.forEach(city => {
            const distance = calculateDistance(latitude, longitude, city.latitude, city.longitude);
            if (distance < minDistance) {
                minDistance = distance;
                nearestCity = city;
            }
        });

        return nearestCity;
    };

    const handleSuggestionClick = (location) => {
        setText(location.name);
        cacheLocationData(location.name);

        const nearestCity = findNearestCity(location.latitude, location.longitude);
        if (nearestCity) {
            console.log(`Nearest City: ${nearestCity.name} (Latitude: ${nearestCity.latitude}, Longitude: ${nearestCity.longitude})`);
            setNearestCity(nearestCity.name);
        } else {
            console.log("No nearby city found.");
        }

        // Update Zustand store with the selected location and nearest city
        setLocation({
            name: location.name,
            latitude: location.latitude,
            longitude: location.longitude,
        });
    };

    const handleLocationDetection = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by this browser.");
            return;
        }

        setLoading(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    // Fetch the original location name using reverse geocoding
                    const response = await fetch(
                        `https://atlas.microsoft.com/search/address/reverse/json?api-version=1.0&query=${latitude},${longitude}&subscription-key=${AZURE_MAPS_API_KEY}`
                    );
                    const data = await response.json();

                    if (!data.addresses || data.addresses.length === 0) {
                        throw new Error("No address data found.");
                    }

                    const location = data.addresses[0]?.address;
                    const fullAddress = location.freeformAddress || `${latitude}, ${longitude}`;

                    setText(fullAddress); // Set the detected location name in the input
                    cacheLocationData(fullAddress);

                    // Calculate and log the nearest city
                    const nearestCity = findNearestCity(latitude, longitude);
                    if (nearestCity) {
                        console.log(`Nearest City: ${nearestCity.name} (Latitude: ${nearestCity.latitude}, Longitude: ${nearestCity.longitude})`);
                        setNearestCity(nearestCity.name);
                    } else {
                        console.log("No nearby city found.");
                    }

                    // Update Zustand store with the detected location and nearest city
                    setLocation({
                        name: fullAddress,
                        latitude,
                        longitude,
                    });

                    // Close the drawer after detecting the location
                    const drawerCloseButton = document.querySelector('[data-drawer-close]');
                    if (drawerCloseButton) {
                        drawerCloseButton.click();
                    } else {
                        console.warn("Drawer close element not found.");
                    }

                } catch (error) {
                    console.error("Error fetching location name:", error);
                    alert("Failed to fetch location name. Please try again.");
                } finally {
                    setLoading(false);
                }
            },
            (error) => {
                setLoading(false);
                console.error("Error getting location:", error);
                alert("Failed to detect location. Please try again.");
            }
        );
    };

    useEffect(() => {
        const isLocationCached = fetchLocationFromCache();
        if (!isLocationCached) {
            const timer = setTimeout(() => {
                setText('');
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, []);

    const SuggestionList = ({ suggestions }) => (
        <div className="mt-2 w-full p-2 border border-gray-300 rounded-lg shadow-lg bg-white">
            {suggestions.map((location, index) => (
                <DrawerClose key={index}>
                    <div
                        className="px-3 py-2 cursor-pointer hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white rounded-lg flex items-center justify-between transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-lg"
                        onClick={() => handleSuggestionClick(location)}
                    >
                        <div className="flex flex-row gap-3 mt-1 items-center w-full">
                            <FaLocationCrosshairs className="text-blue-400 hover:text-white transform transition-transform duration-300 ease-in-out hover:rotate-90" />
                            <span className="text-sm w-[90%] text-start font-semibold text-gray-800 hover:text-white">
                                {location.name}
                            </span>
                        </div>
                    </div>
                </DrawerClose>
            ))}
        </div>
    );

    return (
        <div className="w-96 mx-auto mt-4 p-4 border rounded-lg bg-gray-50 shadow-lg">
            <Input
                placeholder="Search for city or area"
                onChange={handleChange}
                value={text}
                className="mt-2 mb-4 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                onClick={handleLocationDetection}
                className="w-full py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
                {loading ? ".....loading" : "Detect My Location"}
            </button>
            {suggestions.length > 0 && <SuggestionList suggestions={suggestions} />}
        </div>
    );
}
