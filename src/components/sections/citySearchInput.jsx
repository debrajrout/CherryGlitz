import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useEffect, useState, useRef } from "react";
import { PiFlowArrow } from "react-icons/pi";
import { Input } from "../ui/input";
import { fetchCitiesAndAreas } from "@/actions/fetchAll";
import { DrawerClose } from "@/components/ui/drawer";

const OPENCAGE_API_KEY = 'dc631bbd029a49eb90c4161daebffb62'; // Replace with your OpenCage API key
const CACHE_KEY = 'locationData';
const CACHE_EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour

export function LocationSearchComponent({ onLocationSelect }) {
    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query] = useDebounce(text, 500);
    const router = useRouter();
    const isFirstRender = useRef(true);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetchCitiesAndAreas();
                setCities(response);
                console.log("Cities:", response);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
        fetchCities();
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const fetchData = () => {
            if (!query) {
                setSuggestions([]);
                return;
            }

            const allLocations = cities.flatMap((city) =>
                [city.name, ...city.areas.map((area) => `${area}, ${city.name}`)]
            );

            const filteredSuggestions = allLocations
                .filter((location) =>
                    location.toLowerCase().includes(query.toLowerCase())
                )
                .slice(0, 10);

            setSuggestions(filteredSuggestions);
        };

        fetchData();
    }, [query, cities]);

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

    const handleSuggestionClick = (location) => {
        const [area, city] = location.includes(", ")
            ? location.split(", ")
            : [null, location];
        onLocationSelect(city, area);
    };

    const handleLocationDetection = () => {
        if (navigator.geolocation) {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    // Use your geocoding API here
                    const response = await fetch(
                        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`
                    );
                    const data = await response.json();
                    const location = data.results[0].components;
                    const city = location.city || location.town || location.village;
                    const area = location.suburb || location.neighbourhood || location.locality;

                    setLoading(false);
                    console.log("City:", city, "Area:", area, "Location:", location);

                    if (city && area) {
                        const locationName = `${area}, ${city}`;
                        setText(locationName);
                        cacheLocationData(locationName);
                        onLocationSelect(city, area);
                    } else if (city) {
                        const locationName = city;
                        setText(locationName);
                        cacheLocationData(locationName);
                        onLocationSelect(city, null);
                    }
                    // Close the drawer
                    document.querySelector('[data-drawer-overlay]').click();
                },
                (error) => {
                    setLoading(false);
                    console.error("Error getting location:", error);
                    alert("Failed to detect location. Please try again.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        const isLocationCached = fetchLocationFromCache();
        if (!isLocationCached) {
            const timer = setTimeout(() => {
                // Show popup only if no valid cache is found
                setText('');
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, []);

    const SuggestionList = ({ suggestions }) => (
        <div className="mt-2 p-2 flex flex-col gap-1 border rounded shadow-lg bg-white">
            {suggestions.map((location, index) => (
                <DrawerClose key={index}>
                    <div
                        className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-md flex flex-row items-center justify-between"
                        onClick={() => handleSuggestionClick(location)}
                    >
                        <span className="text-sm text-gray-700">{location}</span>
                        <PiFlowArrow className="mr-3 mt-1 text-2xl text-blue-500" />
                    </div>
                </DrawerClose>
            ))}
        </div>
    );

    return (
        <div className="w-[95%] mx-auto mt-4 p-4 border rounded-lg shadow-md bg-gray-50">
            <Input
                placeholder="Search for city or area"
                onChange={handleChange}
                value={text}
                className="mt-2 mb-4 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                onClick={handleLocationDetection}
                className="w-full py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                {loading ? ".....loading" : "Detect My Location"}
            </button>
            {suggestions.length > 0 && <SuggestionList suggestions={suggestions} />}
        </div>
    );
}
