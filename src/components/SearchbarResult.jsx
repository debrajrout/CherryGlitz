import React from "react";
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

const cities = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Surat",
    "Lucknow",
    "Jaipur",
    "Kanpur",
    "Indore",
    "Nagpur",
    "Bhopal",
    "Patna",
    "Vadodara",
];

const categories = [
    "Tattoo and Piercing",
    "Beauty Parlour",
    "Men’s Unisex Salon",
    "Massage Parlour",
    "Spa Centre",
    "Hair Salon",
    "Nail Salon",
    "Facial",
    "Waxing",
    "Hair Removal",
    "Makeup",
    "Skincare",
    "Body Treatments",
];

const splitArray = (arr, chunkSize) => {
    let results = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        results.push(arr.slice(i, i + chunkSize));
    }
    return results;
};

const CategoryDisplay = () => {
    const categoryRows = splitArray(categories, Math.ceil(categories.length / 2));
    return (
        <div className="flex flex-col items-center justify-center mt-6 w-full">
            <div className="flex flex-col gap-3 bg-white py-2 rounded-lg shadow-md w-full px-2">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-xl font-medium text-gray-700">
                        Top Categories
                    </h1>
                    <IoMdArrowRoundForward className="text-xl text-gray-500" />
                </div>
                {categoryRows.map((categoryRow, rowIndex) => (
                    <div key={rowIndex} className="flex overflow-x-auto   h-14 items-center px-2 scrollbar-hide">
                        <div className="flex gap-3">
                            {categoryRow.map((category, index) => (
                                <div
                                    key={index}
                                    className="flex h-10 min-w-[160px] items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-300 hover:bg-blue-100 hover:ring-blue-300 hover:scale-105 hover:shadow-md transition-all duration-200"
                                >
                                    <span className="text-sm font-normal text-gray-700">
                                        {category}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CityDisplay = () => {
    const cityRows = splitArray(cities, Math.ceil(cities.length / 2));
    return (
        <div className="flex flex-col items-center justify-center mt-6 w-full">
            <div className="flex flex-col gap-3 bg-white py-2 rounded-lg shadow-md w-full px-3">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-xl font-medium text-gray-700">
                        Explore Top Cities
                    </h1>
                    <IoMdArrowRoundForward className="text-xl text-gray-500" />
                </div>
                {cityRows.map((cityRow, rowIndex) => (
                    <div key={rowIndex} className="flex overflow-x-auto mt-3 h-14 items-center pb-2 scrollbar-hide">
                        <div className="flex gap-3 px-2">
                            {cityRow.map((city, index) => (
                                <div
                                    key={index}
                                    className="flex h-10 min-w-[120px] items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-300 hover:bg-blue-100 hover:ring-blue-300 hover:scale-105 hover:shadow-md transition-all duration-200"
                                >
                                    <span className="text-sm font-normal text-gray-700">
                                        {city}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function SearchbarResult() {
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
                    <CategoryDisplay />
                    <CityDisplay />
                </DrawerContent>
            </Drawer>
        </div>
    );
}
