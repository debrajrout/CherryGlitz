"use client";
import React, { useState, useEffect } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { RxCross1 } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { LocationSearchComponent } from "./sections/citySearchInput";
import { RxDoubleArrowRight } from "react-icons/rx";
import useLocationStore from "@/store/useLocationStore";
import { FaSearchLocation } from "react-icons/fa";

export default function CitySearchBar() {
    const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted
    const { selectedLocation } = useLocationStore((state) => ({
        selectedLocation: state.selectedLocation,
    }));

    useEffect(() => {
        setIsMounted(true); // Mark the component as mounted
    }, []);

    return (
        <div className="mt-[50px]">
            <Drawer>
                <DrawerTrigger className="w-full overflow-hidden bg-indigo-50 px-5 py-2 h-11 flex flex-row justify-between items-center ">
                    <div className="flex gap-2 overflow-hidden items-center text-gray-900">
                        <FaSearchLocation className="text-lg text-blue-800" />
                        <span className="text-sm w-[90%] truncate overflow-hidden font-semibold">
                            {isMounted ? selectedLocation.name || "Enter your location to grab discount" : "Enter your location to grab discount"}
                        </span>
                    </div>

                    <RxDoubleArrowRight className="w-10 text-lg text-blue-500" />
                </DrawerTrigger>
                <DrawerContent className="flex flex-col w-full items-center bg-gradient-to-b from-gray-200 to-gray-400 py-4 shadow-xl rounded-lg">
                    <div className="mb-4 flex h-16 w-full flex-row items-center justify-between px-3">
                        <span className="ml-1 text-2xl font-semibold text-gray-800">
                            Select your city
                        </span>
                        <DrawerClose>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-gray-800/50">
                                <RxCross1 className="h-4 w-4 text-gray-800" />
                            </div>
                        </DrawerClose>
                    </div>
                    {/* No need to pass onLocationSelect since it's handled within LocationSearchComponent */}
                    <LocationSearchComponent />
                </DrawerContent>
            </Drawer>
        </div>
    );
}
