"use client";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-input";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import useLocationStore from "@/store/useLocationStore";
import { grabShop } from "@/actions/Search";

export function PlaceholdersAndVanishInputDemoo() {
    const { nearestCity } = useLocationStore(); // Access nearestCity from Zustand store

    const cityName = nearestCity || "Your City"; // Fallback to "Your City" if no nearest city is found
    console.log("dsdscsdcsdcds", cityName);

    // Dynamic placeholders based on the nearest city
    const placeholders = useMemo(() => {
        return nearestCity
            ? [
                `Express Yourself with Stunning Tattoos in ${cityName}`,
                `Find Your Perfect Piercing Style in ${cityName}`,
                `Unleash Your Beauty at Our Parlour in ${cityName}`,
                `Elevate Your Look at Our Unisex Salon in ${cityName}`,
                `Relax and Rejuvenate with Our Massages in ${cityName}`,
                `Escape to Tranquility at Our Spa Centre in ${cityName}!`,
            ]
            : [
                "Express Yourself with Stunning Tattoos",
                "Find Your Perfect Piercing Style",
                "Unleash Your Beauty at Our Parlour",
                "Elevate Your Look at Our Unisex Salon",
                "Relax and Rejuvenate with Our Massages",
                "Escape to Tranquility at Our Spa Centre!",
            ];
    }, [nearestCity, cityName]);

    const categorizedPhrases = useMemo(
        () =>
            nearestCity
                ? {
                    "Tattoo": [
                        `Top-rated 3D tattoo artist in ${cityName}`,
                        `Lip piercing services at home in ${cityName}`,
                        `Best tattoo artist in ${cityName}`,
                        `Eyebrow piercing at home in ${cityName}`,
                        `Super realistic tattoo artist in ${cityName}`,
                    ],
                    "Massage": [
                        `Top-rated Swedish massage therapist in ${cityName}`,
                        `Couples massage session at home in ${cityName}`,
                        `Deep tissue massage services at home in ${cityName}`,
                        `Thai massage studio in ${cityName}`,
                        `Best massage therapist in ${cityName}`,
                    ],
                    "Beauty Parlour": [
                        `Top-rated beauty parlour nearby in ${cityName}`,
                        `Best LED and LASER therapy nearby in ${cityName}`,
                        `Microdermabrasion at home in ${cityName}`,
                    ],
                    "Men’s Salon": [
                        `Best UNISEX salon in ${cityName}`,
                        `Haircutting and coloring services in ${cityName}`,
                        `Beard trimming nearby in ${cityName}`,
                        `Best oxygen facial at home in ${cityName}`,
                        `Anti-aging facial treatments nearby in ${cityName}`,
                        `Moustache care services in ${cityName}`,
                        `Top-rated MENS salon nearby in ${cityName}`,
                        `Kids haircutting and grooming services in ${cityName}`,
                    ],
                }
                : {
                    "Tattoo": [
                        "Top-rated 3D tattoo artist",
                        "Lip piercing services at home",
                        "Best tattoo artist in the city",
                        "Eyebrow piercing at home",
                        "Super realistic tattoo artist",
                    ],
                    "Massage": [
                        "Top-rated Swedish massage therapist",
                        "Couples massage session at home",
                        "Deep tissue massage services at home",
                        "Thai massage studio in the city",
                        "Best massage therapist in the city",
                    ],
                    "Beauty Parlour": [
                        "Top-rated beauty parlour nearby",
                        "Best LED and LASER therapy nearby",
                        "Microdermabrasion at home",
                    ],
                    "Men’s Salon": [
                        "Best UNISEX salon in my city",
                        "Haircutting and coloring services NEAR ME",
                        "Beard trimming nearby",
                        "Best oxygen facial at home",
                        "Anti-aging facial treatments nearby",
                        "Moustache care services",
                        "Top-rated MENS salon nearby",
                        "Kids haircutting and grooming services",
                    ],
                },
        [nearestCity, cityName]
    );

    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const router = useRouter();
    const [debouncedQuery] = useDebounce(text, 700);

    useEffect(() => {
        if (!debouncedQuery) {
            // Clear suggestions when input is cleared
            setSuggestions([]);
            return;
        }

        const fetchSuggestions = async () => {
            try {
                const shopSuggestions = await grabShop(debouncedQuery);

                const allPhrases = Object.values(categorizedPhrases).flat();
                const filteredPhrases = allPhrases
                    .filter((phrase) =>
                        phrase.toLowerCase().includes(debouncedQuery.toLowerCase())
                    )
                    .slice(0, 10);

                setSuggestions([...filteredPhrases, ...shopSuggestions]);
            } catch (error) {
                console.error("Error fetching shop suggestions:", error);
            }
        };

        fetchSuggestions();
    }, [debouncedQuery, categorizedPhrases]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSuggestionClick = (phrase, isShop = false) => {
        const cityName = nearestCity || "Aligarh"; // Use selected city or default to Aligarh

        let url;
        if (isShop) {
            const { _id } = phrase;
            url = `/${cityName}/${_id}`;
        } else {
            let selectedCategory = null;
            for (const [category, phrases] of Object.entries(categorizedPhrases)) {
                if (phrases.includes(phrase)) {
                    selectedCategory = category;
                    break;
                }
            }
            url = selectedCategory
                ? `/${cityName}?search=${phrase}&category=${selectedCategory}`
                : `/${cityName}?search=${phrase}`;
        }

        // Close the drawer (adjust based on your implementation)
        const drawerElement = document.querySelector('.drawer');
        if (drawerElement) {
            drawerElement.classList.remove('open');
        }

        // Navigate to the new URL and force a full page reload
        window.location.href = url;
    };


    const onSubmit = (e) => {
        e.preventDefault();
        const cityName = nearestCity || "Aligarh"; // Use selected city or default to Aligarh
        if (!debouncedQuery) {
            router.push('/');
        } else {
            router.push(`/${cityName}?search=${debouncedQuery}`);
        }
    };


    const SuggestionList = ({ suggestions }) => (
        <motion.div
            className="mt-2 p-2 flex flex-col gap-2 border rounded shadow-lg bg-white max-h-[400px] overflow-y-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {suggestions.map((suggestion, index) => {
                let displayedAddress = "";

                if (suggestion.Address) {
                    const addressParts = suggestion.Address.split(",").map((part) =>
                        part.trim()
                    );

                    // Determine which parts to show based on the length of addressParts
                    if (addressParts.length >= 4) {
                        displayedAddress = addressParts.slice(-4, -2).join(", ");
                    } else if (addressParts.length >= 3) {
                        displayedAddress = addressParts.slice(-3, -1).join(", ");
                    } else if (addressParts.length === 2) {
                        displayedAddress = addressParts.join(", ");
                    } else if (addressParts.length === 1) {
                        displayedAddress = addressParts[0];
                    }
                }

                return (
                    <motion.div
                        key={index}
                        className={`px-2 py-2 cursor-pointer rounded-md flex flex-col items-start justify-between ${suggestion.Name ? "bg-blue-50" : "bg-green-50"
                            } hover:bg-opacity-80 transition-all duration-200`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSuggestionClick(suggestion, !!suggestion.Name)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                        {suggestion.Name ? (
                            <>
                                <div className="flex flex-row justify-between w-full">
                                    <span className="text-lg font-medium text-gray-700 truncate">
                                        {suggestion.Name}
                                    </span>
                                    <span className="text-xs font-normal text-gray-500">
                                        {suggestion.Category}
                                    </span>
                                </div>
                                <span className="text-sm text-gray-500">{displayedAddress}</span>
                            </>
                        ) : (
                            <span className="text-sm font-normal text-gray-700">
                                {suggestion}
                            </span>
                        )}
                    </motion.div>
                );
            })}
        </motion.div>
    );

    return (
        <div className="w-[95%]">
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
                value={text}
            />
            {suggestions.length > 0 && <SuggestionList suggestions={suggestions} />}
        </div>
    );
}
