"use client";
import React, { useEffect, useState } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "./ui/input";
import { PlaceholdersAndVanishInputDemoo } from "./sections/SearchDivPage";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fetchCities } from "@/actions/fetchAll";

// Static fetchCategories function
export async function fetchCategories() {
    return [
        { name: "Beauty Parlour" },
        { name: "Men’s Salon" },
        { name: "Massage" },
        { name: "Tattoo" },
        { name: "Spa" },
    ];
}

const CategoryDisplay = ({ categories, onSelect }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-6 w-full">
            <div className="flex flex-col gap-3 bg-white py-2 rounded-lg shadow-md w-full px-4">
                <div className="flex flex-row items-center justify-between mb-3">
                    <h1 className="text-xl font-medium text-gray-700">
                        Top Categories
                    </h1>
                    <IoMdArrowRoundForward className="text-xl text-gray-500" />
                </div>
                <div className="flex overflow-x-auto scrollbar-hide h-16 items-center px-2 gap-4">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center justify-center min-w-[100px] h-14 p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg cursor-pointer transition-all duration-200"
                            onClick={() => onSelect(category.name)}
                        >
                            <span className="text-center text-sm font-semibold text-white">
                                {category.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CityDisplay = ({ cities, onSelect }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-6 w-full">
            <div className="flex flex-col gap-3 bg-white py-2 rounded-lg shadow-md w-full px-3">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-xl font-medium text-gray-700">
                        Explore Top Cities
                    </h1>
                    <IoMdArrowRoundForward className="text-xl text-gray-500" />
                </div>
                <div className="flex overflow-x-auto mt-3 h-14 items-center pb-2 scrollbar-hide">
                    <div className="flex gap-3 px-2">
                        {cities.map((city, index) => (
                            <div
                                key={index}
                                className="flex h-10 min-w-[120px] items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-300 hover:bg-blue-100 hover:ring-blue-300 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer"
                                onClick={() => onSelect(city.name)}
                            >
                                <span className="text-sm font-normal text-gray-700">
                                    {city.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function SearchbarResult() {
    const [cities, setCities] = useState([]);
    const [categories, setCategories] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const getCitiesAndCategories = async () => {
            try {
                const fetchedCities = await fetchCities();
                setCities(fetchedCities);

                const fetchedCategories = await fetchCategories();
                setCategories(fetchedCategories);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getCitiesAndCategories();
    }, []);

    const handleCategorySelect = (categoryName) => {
        const currentUrl = window.location.pathname;
        const newUrl = `${currentUrl}?category=${categoryName}`;
        window.location.href = newUrl; // Force refresh with the updated URL
    };

    const handleCitySelect = (cityName) => {
        router.push(`/${cityName}`);
    };

    return (
        <div className="w-full h-full">
            <Drawer>
                <DrawerTrigger className="mt-2 w-full px-1">
                    <div className="w-full">
                        <Input
                            placeholder="Search for services"
                            className="bg-slate-400 shadow-md shadow-blue-200/30"
                            icon={<IoSearchOutline />}
                        />
                    </div>
                </DrawerTrigger>
                <DrawerContent className="flex flex-col items-center rounded-t-lg bg-white py-6 shadow-xl">
                    <div className="flex h-16 w-full items-center justify-between px-6 mb-4">
                        <DrawerTitle>
                            <span className="text-2xl font-semibold text-gray-800">
                                Discover Top Services
                            </span>
                        </DrawerTitle>
                        <DrawerClose>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-300 hover:bg-gray-200 transition-all duration-200">
                                <RxCross1 className="text-gray-800" />
                            </div>
                        </DrawerClose>
                    </div>
                    <PlaceholdersAndVanishInputDemoo />
                    <CategoryDisplay categories={categories} onSelect={handleCategorySelect} />
                    <CityDisplay cities={cities} onSelect={handleCitySelect} />
                </DrawerContent>
            </Drawer>
        </div>
    );
}
