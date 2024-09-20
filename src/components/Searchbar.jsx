"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaSpa, FaCut, FaPaintBrush, FaHandSparkles, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import Searchtext from "./gsap/Searchtext";
import { PlaceholdersAndVanishInputDemo } from "./sections/SearchDiv";
import useLocationStore from "@/store/useLocationStore";

// Import the fetchCities function
import { fetchCities } from "@/actions/fetchAll";  // Adjust the path as necessary

const category = [
  { name: "Tattoo & Piercing", icon: FaPaintBrush },
  { name: "Beauty Parlour", icon: FaHandSparkles },
  { name: "Men's Unisex Salon", icon: FaCut },
  { name: "Massage Parlour", icon: FaSpa },
  { name: "Spa Centre", icon: FaLeaf },
];

const CityDisplay = () => {
  const router = useRouter();
  const { nearestCity } = useLocationStore(); // Access the nearest city from Zustand store
  const [cities, setCities] = useState([]); // State to store fetched cities

  // Fetch cities from the database when the component mounts
  useEffect(() => {
    const getCities = async () => {
      try {
        const fetchedCities = await fetchCities();
        setCities(fetchedCities);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };

    getCities();
  }, []);

  const handleCategoryClick = (selectedCategory) => {
    const cityName = nearestCity || "Aligarh"; // Use the nearest city or default to Aligarh
    router.push(`/${cityName}?category=${selectedCategory}`);
  };

  const handleCityClick = (cityName) => {
    router.push(`/${cityName}`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <motion.div
        className="mt-6 flex flex-col gap-3 bg-white/70 py-4 w-full rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row items-center gap-2">
          <h1 className="mb-1 ml-4 text-xl font-semibold text-gray-700">
            Top Categories
          </h1>
          <IoMdArrowRoundForward className="text-xl text-gray-600" />
        </div>
        <div className="flex flex-wrap gap-2 px-2 py-1">
          {category.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-[120px] px-2.5 overflow-hidden sm:w-[160px] flex-wrap items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-md hover:shadow-blue-300/60 cursor-pointer"
                onClick={() => handleCategoryClick(cat.name)}
              >
                <Icon className="text-xl text-gray-700 mr-2" />
                <span className="text-center text-xs  font-semibold truncate text-gray-700">
                  {cat.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="mt-6 flex flex-col gap-3 bg-white/70 py-4 w-full rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-row items-center gap-2">
          <h1 className="mb-1 ml-4 text-xl font-semibold text-gray-700">
            Explore Top Cities
          </h1>
          <IoMdArrowRoundForward className="text-xl text-gray-600" />
        </div>
        <div className="flex flex-wrap gap-2 px-1 py-1">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-8 w-[90px] overflow-hidden px-2 sm:w-[110px] items-center justify-center rounded-full bg-white ring-1 ring-gray-300 shadow-md hover:shadow-blue-300/60 cursor-pointer"
              onClick={() => handleCityClick(city.name)} // Redirect to city page
            >
              <span className="text-center text-sm  truncate font-semibold text-gray-600">
                {city.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Searchbar() {
  return (
    <div className="w-full  mx-auto ">
      <Drawer>
        <DrawerTrigger className="w-full -mt-1 sm:w-72 px-0.5">
          <Searchtext />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-center rounded-t-lg bg-gradient-to-b from-gray-100 to-gray-300 py-4 shadow-xl overflow-y-auto">
          <div className="mb-4 flex h-16 w-full flex-row items-center justify-between px-3">
            <DrawerTitle>
              <span className="ml-1 text-2xl font-semibold text-gray-800">
                Explore Ultimate Fashion
              </span>
            </DrawerTitle>
            <DrawerClose>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-gray-800/50">
                <RxCross1 className="h-4 w-4 text-gray-800" />
              </div>
            </DrawerClose>
          </div>
          <PlaceholdersAndVanishInputDemo />
          <CityDisplay />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
