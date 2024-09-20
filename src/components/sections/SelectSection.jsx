"use client";
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
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import useLocationStore from "@/store/useLocationStore";
import { fetchCities } from '@/actions/fetchAll';

const AZURE_MAPS_API_KEY = process.env.NEXT_PUBLIC_AZURE_MAPS_API_KEY;
const CACHE_KEY = 'locationData';
const CACHE_EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour

export default function SelectSection() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [locationName, setLocationName] = useState('');
    const { selectedLocation, setLocation, setNearestCity } = useLocationStore((state) => ({
        selectedLocation: state.selectedLocation,
        setLocation: state.setLocation,
        setNearestCity: state.setNearestCity,
    }));

    useEffect(() => {
        if (selectedLocation && selectedLocation.name) {
            setLocationName(selectedLocation.name);
        } else {
            const isLocationCached = fetchLocationFromCache();
            if (!isLocationCached) {
                const timer = setTimeout(() => {
                    setOpen(true);
                }, 10000);

                return () => clearTimeout(timer);
            }
        }
    }, [selectedLocation]);

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

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in kilometers
    };

    const findNearestCity = (latitude, longitude, cities) => {
        let nearestCity = null;
        let minDistance = Infinity;

        cities.forEach(city => {
            const distance = calculateDistance(latitude, longitude, city.latitude, city.longitude);
            if (distance < minDistance) {
                minDistance = distance;
                nearestCity = city;
            }
        });

        return nearestCity;
    };

    const handleLocationDetection = async () => {
        setLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log("Latitude:", latitude, "Longitude:", longitude);

                    try {
                        const response = await fetch(`https://atlas.microsoft.com/search/address/reverse/json?api-version=1.0&query=${latitude},${longitude}&subscription-key=${AZURE_MAPS_API_KEY}`);
                        const data = await response.json();
                        const address = data.addresses[0]?.address?.freeformAddress || 'Unknown location';

                        setLocationName(address);
                        console.log("Location:", address);

                        cacheLocationData(address);

                        // Update latitude and longitude directly in the store
                        setLocation({
                            name: address,
                            latitude,
                            longitude,
                        });

                        const cities = await fetchCities();
                        console.log("Fetched Cities:", cities); // Debugging line
                        const nearestCity = findNearestCity(latitude, longitude, cities);

                        if (nearestCity) {
                            console.log(`Nearest City: ${nearestCity.name} (Latitude: ${nearestCity.latitude}, Longitude: ${nearestCity.longitude})`);
                            setNearestCity(nearestCity.name);

                            const currentUrl = new URL(window.location.href);
                            const params = new URLSearchParams(currentUrl.search);

                            // Only keep the 'category' parameter
                            const categoryParam = params.get('category');
                            const searchParam = params.get('search');
                            const newParams = new URLSearchParams();
                            if (categoryParam) {
                                newParams.set('category', categoryParam, 'search', searchParam);
                            }
                            if (searchParam) {
                                newParams.set('search', searchParam);
                            }

                            const newUrl = `/${nearestCity.name}${newParams.toString() ? `?${newParams.toString()}` : ''}`;

                            console.log("Redirecting to:", newUrl); // Debugging line
                            window.location.href = newUrl;
                        } else {
                            console.log("No nearby city found.");
                            alert("No nearby city found.");
                        }

                        setOpen(false);
                    } catch (error) {
                        console.error("Error fetching location name:", error);
                        alert("Failed to fetch location name. Please try again.");
                    } finally {
                        setLoading(false);
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

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <motion.div
                    className='my-[2px] text-sm font-semibold text-gray-700 text-start flex flex-row gap-1 justify-center items-center'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SlLocationPin className='text-sm text-blue-500' />
                    <span className='text-xs truncate w-48 text-gray-800 font-bold'>
                        {locationName ? `Results near ${locationName}` : 'Select Location for best results'}
                    </span>
                    <CiEdit className='text-lg text-orange-500 ml-2' />
                    <span className='text-sm text-blue-700 hover:underline cursor-pointer'>Change location</span>
                </motion.div>
            </PopoverTrigger>
            <PopoverContent asChild>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-96 p-6 bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-xl border border-gray-200 relative"
                >
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <IoClose size={24} />
                    </button>
                    <div className="text-center mb-6 flex flex-col justify-center items-center">
                        <Image src="/lottie/location.gif" width={120} height={120} alt='CherryGlitz' className="mb-4" />
                        {locationName ? (
                            <>
                                <h2 className="text-2xl font-bold text-teal-600 mb-2">You’re All Set</h2>
                                <p className="text-md font-medium text-gray-500 mb-4">Enjoy our services near <span className='text-blue-500'>{locationName}</span></p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-purple-800 mb-2">Find Your Location</h2>
                                <p className="text-md text-gray-600 mb-4">Find the best services near you with CZ</p>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                onClick={handleLocationDetection}
                                className="w-full py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
                            >
                                {loading ? "Detecting your location..." : "Locate Me"}
                            </Button>
                        </motion.div>
                        <CitySearchBarRes />
                    </div>
                </motion.div>
            </PopoverContent>
        </Popover>
    );
}
