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
import CitySearchBarRes from '../citySearchRes';

const OPENCAGE_API_KEY = 'dc631bbd029a49eb90c4161daebffb62'; // Replace with your OpenCage API key

const CACHE_KEY = 'locationData';
const CACHE_EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour

export default function SelectSection({ onLocationUpdate }) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [locationName, setLocationName] = useState('');

    const fetchLocationFromCache = () => {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
            const { locationName, timestamp } = JSON.parse(cachedData);
            const currentTime = new Date().getTime();
            if (currentTime - timestamp < CACHE_EXPIRATION_TIME) {
                setLocationName(locationName);
                return true;
            }
        }
        return false;
    };

    const cacheLocationData = (locationName) => {
        const cacheData = {
            locationName,
            timestamp: new Date().getTime()
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    };

    const handleLocationDetection = async () => {
        setLoading(true);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setLoading(false);
                    console.log("Latitude:", latitude, "Longitude:", longitude);

                    // Fetch location name using OpenCage API
                    try {
                        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`);
                        const data = await response.json();
                        const formattedAddress = data.results[0]?.formatted || 'Unknown location';

                        // Extract city and locality from the formatted address
                        const addressParts = formattedAddress.split(', ');
                        const locality = addressParts.slice(-3, -1).join(', '); // Assumes city and locality are the last two parts
                        setLocationName(locality);
                        console.log("Location:", locality);

                        // Cache the location data
                        cacheLocationData(locality);

                        // Call the onLocationUpdate callback with the detected coordinates
                        if (onLocationUpdate) {
                            onLocationUpdate(latitude, longitude);
                        }

                        // Close the popover after fetching location
                        setOpen(false);
                    } catch (error) {
                        setLoading(false);
                        console.error("Error fetching location name:", error);
                        alert("Failed to fetch location name. Please try again.");
                    }
                },
                (error) => {
                    setLoading(false);
                    console.error("Error getting location:", error);
                    alert("Failed to detect location. Please try again.");
                }
            );
        } else {
            setLoading(false);
            alert("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        // Check for cached location data
        const isLocationCached = fetchLocationFromCache();
        if (!isLocationCached) {
            // Open the popover 10 seconds after the component mounts if no cached data
            const timer = setTimeout(() => {
                setOpen(true);
            }, 10000);

            // Clear the timer if the component unmounts
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className='my-[2px] text-sm font-semibold text-gray-700 text-start flex flex-row gap-1 justify-center items-center'>
                    <SlLocationPin className='text-sm text-blue-500' />
                    <span className='text-xs text-gray-800 font-bold'>
                        {locationName ? `Results near ${locationName}` : 'Select Location for best results'}
                    </span>
                    <CiEdit className='text-lg text-orange-500 ml-2' />
                    <span className='text-sm text-blue-700 hover:underline cursor-pointer'>Change location</span>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
                <div className="text-center mb-6 flex flex-col justify-center items-center">
                    <Image src="/lottie/location.gif" width={120} height={120} alt='CherryGlitz' className="mb-4" />
                    {locationName ? (
                        <>
                            <h2 className="text-2xl font-bold text-teal-600 mb-2">You’re All Set</h2>
                            <p className="text-md font-semibold text-gray-500 mb-4">Enjoy our services near {locationName}</p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold text-purple-800 mb-2">Find Your Location</h2>
                            <p className="text-md text-gray-600 mb-4">Find the best services near you with CZ</p>
                        </>
                    )}
                </div>
                <div className="flex flex-col gap-4">
                    <Button
                        onClick={handleLocationDetection}
                        className="w-full py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
                    >
                        {loading ? "Detecting your location..." : "Locate Me"}
                    </Button>
                    <CitySearchBarRes />
                </div>
            </PopoverContent>
        </Popover>
    );
}
