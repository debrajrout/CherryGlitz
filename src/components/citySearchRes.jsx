"use client";
import React, { useState } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { RxCross1 } from "react-icons/rx";
import { LocationSearchComponent2 } from "./sections/citySearchInputSearch";


export default function CitySearchBarRes() {
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleLocationSelect = (city, area) => {
        const location = area ? `${area}, ${city}` : city;
        setSelectedLocation(location);
    };

    return (
        <div>
            <Drawer>
                <DrawerTrigger className="w-full">
                    <div
                        className="w-full px-2 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Enter Address Manually
                    </div>
                </DrawerTrigger>
                <DrawerContent className="flex flex-col items-center bg-gradient-to-b from-gray-200 to-gray-400 py-4 shadow-xl">
                    <div className="mb-4 flex h-16 w-full flex-row items-center justify-between px-3 ">
                        <span className="ml-1 text-2xl font-semibold text-gray-800">
                            Select your city
                        </span>
                        <DrawerClose>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-gray-800/50">
                                <RxCross1 className="h-4 w-4 text-gray-800" />
                            </div>
                        </DrawerClose>
                    </div>
                    <LocationSearchComponent2 onLocationSelect={handleLocationSelect} />
                </DrawerContent>
            </Drawer>
        </div>
    );
}
