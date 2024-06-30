"use client";
import React, { useState } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { RxCross1 } from "react-icons/rx";
import { Button } from "./ui/button";
import { LiaSearchLocationSolid } from "react-icons/lia";
import { LocationSearchComponent } from "./sections/citySearchInput";

export default function CitySearchBar() {
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleLocationSelect = (city, area) => {
        const location = area ? `${area}, ${city}` : city;
        setSelectedLocation(location);
    };

    return (
        <div className="mt-[65px] ">
            <Drawer>
                <DrawerTrigger className="flex   flex-col items-center justify-center">
                    <LiaSearchLocationSolid className="text-3xl text-blue-500" />
                    <span className="w-20 truncate text-xs font-semibold">
                        {selectedLocation ? selectedLocation : "City"}
                    </span>
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
                    <LocationSearchComponent onLocationSelect={handleLocationSelect} />
                </DrawerContent>
            </Drawer>
        </div>
    );
}
