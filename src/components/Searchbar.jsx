import React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RxCross1 } from "react-icons/rx";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Searchtext from "./gsap/Searchtext";
import { PlaceholdersAndVanishInputDemo } from "./sections/SearchDiv";
import { ComboboxDemo } from "./search/searchCity";

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
];

const CityDisplay = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {cities.map((city, index) => (
        <div
          key={index}
          className="flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full w-24 h-24 shadow-lg transform transition-transform hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400"
        >
          <span className="text-center font-semibold">{city}</span>
        </div>
      ))}
    </div>
  );
};

export default function Searchbar() {
  return (
    <div className="mt-[65px] w-full">
      <Drawer>
        <DrawerTrigger className="w-full">
          <Searchtext />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-center bg-gradient-to-b from-gray-200 to-gray-400 px-4 py-4 rounded-lg shadow-xl">
          <div className="flex h-16 w-full flex-row items-center justify-between px-3 mb-4">
            <span className="ml-1 text-2xl font-semibold text-gray-800">Explore ultimate fession</span>
            <DrawerClose>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-gray-800">
                <RxCross1 className="h-4 w-4 text-gray-800" />
              </div>
            </DrawerClose>
          </div>
          <PlaceholdersAndVanishInputDemo />
          <div className="w-full mt-4"><ComboboxDemo /></div>
          <div className="w-full mt-4 px-5">
            <CityDisplay />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
