"use client"

import React, { useState, useEffect } from 'react';
import { CiEdit } from 'react-icons/ci';
import { SlLocationPin } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Image from 'next/image';

export default function SelectSection({ onLocationUpdate }) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleLocationDetection = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://ipapi.co/json/`);
            const data = await response.json();
            const { latitude, longitude } = data;

            setLoading(false);
            console.log("Latitude:", latitude, "Longitude:", longitude);

            // Call the onLocationUpdate callback with the detected coordinates
            if (onLocationUpdate) {
                onLocationUpdate(latitude, longitude);
            }
        } catch (error) {
            setLoading(false);
            console.error("Error getting location:", error);
            alert("Failed to detect location. Please try again.");
        }
    };

    useEffect(() => {
        // Open the popover 10 seconds after the component mounts
        const timer = setTimeout(() => {
            setOpen(true);
        }, 10000);

        // Clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className='my-[2px] text-sm font-semibold text-gray-700 text-start flex flex-row gap-1 justify-center items-center'>
                    <SlLocationPin className='text-sm text-blue-500' />
                    <span className='text-sm text-gray-800 font-medium'>Search in your area</span>
                    <CiEdit className='text-lg text-orange-500 ml-2' />
                    <span className='text-sm text-blue-700 hover:underline cursor-pointer'>Change location</span>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 bg-slate-100 rounded-lg shadow-lg">
                <div className="text-center mb-4 flex flex-col justify-between items-center">
                    <Image src="/lottie/location.gif" width={100} height={100} alt='CherryGlitz' />
                    <h2 className="text-xl font-bold text-purple-700 mt-2">Find Your Location</h2>
                    <p className="text-sm text-gray-700 mt-1">Find the best services near you with CZ</p>
                </div>
                <Button
                    onClick={handleLocationDetection}
                    className="w-full py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
                >
                    {loading ? "Detecting your location..." : "Locate Me"}
                </Button>
            </PopoverContent>
        </Popover>
    );
}
