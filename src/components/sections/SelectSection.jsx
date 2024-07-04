"use client"
import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { SlLocationPin } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export default function SelectSection() {
    const [loading, setLoading] = useState(false);

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
                        // handle city and area selection
                    } else if (city) {
                        // handle city selection
                    } else {
                        alert("Location detection failed. Please try again.");
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

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className='my-[2px] text-sm font-semibold text-black/70 text-start flex flex-row gap-1 justify-center items-center'>
                    <SlLocationPin className='text-xs text-black' />
                    Search in placeeee
                    <CiEdit className='text-red-700 ml-2' />
                    <span className='text-blue-600'>change location</span>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
                <Button
                    onClick={handleLocationDetection}
                    className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {loading ? "Detecting location..." : "Detect My Location"}
                </Button>
            </PopoverContent>
        </Popover>
    );
}
