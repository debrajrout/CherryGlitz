"use client";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useEffect, useState, useRef } from "react";
import { PiFlowArrow } from "react-icons/pi";
import { Input } from "../ui/input";
import FetchCity from "@/actions/fetchCity";

export function LocationSearchComponent() {
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
                const response = await FetchCity();

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

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSuggestionClick = (location) => {
        const [area, city] = location.includes(", ")
            ? location.split(", ")
            : [null, location];

        router.push(
            area
                ? `/search?city=${city}&area=${area}`
                : `/search?city=${location}`
        );
    };

    const handleLocationDetection = () => {
        if (navigator.geolocation) {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    // Use your geocoding API here
                    const response = await fetch(
                        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=dc631bbd029a49eb90c4161daebffb62`
                    );
                    const data = await response.json();
                    const location = data.results[0].components;
                    const city = location.city || location.town || location.village;
                    const area = location.suburb || location.neighbourhood || location.locality;

                    setLoading(false);
                    console.log("City:", city, "Area:", area, "Location:", location);

                    if (city && area) {
                        router.push(`/search?city=${city}&area=${area}`);
                    } else if (city) {
                        router.push(`/search?city=${city}`);
                    }
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

    const SuggestionList = ({ suggestions }) => (
        <div className="mt-2 p-2 flex flex-col gap-1 border rounded shadow-lg bg-white">
            {suggestions.map((location, index) => (
                <div
                    key={index}
                    className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-md flex flex-row items-center justify-between"
                    onClick={() => handleSuggestionClick(location)}
                >
                    <span className="text-sm text-gray-700">{location}</span>
                    <PiFlowArrow className="mr-3 mt-1 text-2xl text-blue-500" />
                </div>
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
