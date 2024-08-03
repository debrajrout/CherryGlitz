"use client";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-input";
import { useEffect, useState, useRef, useMemo } from "react";

// Add import for the server function
import { grabShop } from "@/actions/Search";

export function PlaceholdersAndVanishInputDemoo() {
    const placeholders = [
        "Express Yourself with Stunning Tattoos",
        "Find Your Perfect Piercing Style",
        "Unleash Your Beauty at Our Parlour",
        "Elevate Your Look at Our Unisex Salon",
        "Relax and Rejuvenate with Our Massages",
        "Escape to Tranquility at Our Spa Centre!",
    ];
    const categorizedPhrases = useMemo(() => ({
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
            "Top-rated beauty parlour near by",
            "Best LED and LASER therapy near by",
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
        ]
    }), []);

    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const router = useRouter();
    const [query] = useDebounce(text, 500);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (!query) {
            setSuggestions([]);
            return;
        }

        // Fetch shop suggestions and combine with categorized phrases
        const fetchSuggestions = async () => {
            try {
                const shopSuggestions = await grabShop(query);

                // Filter categorized phrases
                const allPhrases = Object.values(categorizedPhrases).flat();
                const filteredPhrases = allPhrases
                    .filter((phrase) => phrase.toLowerCase().includes(query.toLowerCase()))
                    .slice(0, 10);

                // Combine both sets of suggestions
                setSuggestions([...filteredPhrases, ...shopSuggestions]);
            } catch (error) {
                console.error("Error fetching shop suggestions:", error);
            }
        };

        fetchSuggestions();
    }, [query, categorizedPhrases]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSuggestionClick = (phrase, isShop = false) => {
        if (isShop) {
            const { Name, Area, City } = phrase;
            router.push(`/search?search=${Name}&area=${Area}&city=${City}`);
        } else {
            router.push(`/search?search=${phrase}`);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!query) {
            router.push("/");
        } else {
            router.push(`/search?search=${query}`);
        }
    };

    const SuggestionList = ({ suggestions }) => (
        <div className="mt-2 p-2 flex flex-col gap-2 border rounded shadow-lg bg-white max-h-[400px] overflow-y-auto">
            {suggestions.map((suggestion, index) => (
                <div
                    key={index}
                    className={`px-2 py-2 cursor-pointer rounded-md flex flex-col items-start justify-between ${suggestion.Name ? "bg-blue-50" : "bg-green-50"
                        } hover:bg-opacity-80 transition-all duration-200`}
                    onClick={() => handleSuggestionClick(suggestion, !!suggestion.Name)}
                >
                    {suggestion.Name ? (
                        <>
                            <div className="flex flex-row justify-between w-full">
                                <span className="text-lg font-medium text-gray-700 truncate">{suggestion.Name}</span>
                                <span className="text-xs font-normal text-gray-500">{suggestion.Category}</span>
                            </div>
                            <span className="text-sm text-gray-500">{suggestion.Area}, {suggestion.City}</span>
                        </>
                    ) : (
                        <span className="text-sm font-normal text-gray-700">{suggestion}</span>
                    )}
                </div>
            ))}
        </div>
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
