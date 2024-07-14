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
import { IoMdArrowRoundForward } from "react-icons/io";

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

const category = [
  "Tattoo and Piercing",
  "beauty-parlour",
  "mens-unisex-salon",
  "massage-parlour",
  "spa-centre",
];



const CityDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="mt-6 flex flex-col gap-3 bg-white/50  py-4 ">
        <div className=" flex flex-row items-center  gap-2">
          <h1 className="mb-1 ml-4 text-xl font-medium text-black/50">
            Top category
          </h1>{" "}
          <IoMdArrowRoundForward className="text-xl text-black/50" />{" "}
        </div>

        <div className="flex flex-wrap gap-2  px-2  py-1">
          {category.map((city, index) => (
            <div
              key={index}
              className="flex h-10 w-[125px] flex-wrap items-center justify-center rounded-full bg-white/70  ring-1 ring-black/30 hover:scale-110 hover:shadow-md hover:shadow-sky-300/60"
            >
              <span className="text-center text-sm font-normal text-black/70">
                {city}
              </span>
            </div>
          ))}
        </div>
      </div>{" "}

      <div className="flex flex-col gap-3 bg-white/50  py-4 ">
        <div className=" flex flex-row items-center  gap-2">
          <h1 className="mb-1 ml-4 text-xl font-medium text-black/50">
            Explore top citys
          </h1>{" "}
          <IoMdArrowRoundForward className="text-xl text-black/50" />{" "}
        </div>

        <div className="flex flex-wrap  gap-2   px-1">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex h-8 w-[90px]  items-center justify-center rounded-full bg-white/75 ring-1 ring-black/30 hover:scale-110 hover:shadow-md hover:shadow-sky-300/60"
            >
              <span className="text-center text-sm font-normal text-black/60">
                {city}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Searchbar() {
  return (
    <div className="mt-[65px] w-[80%]">
      <Drawer>
        <DrawerTrigger className="w-72">
          <Searchtext />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col  items-center rounded-t-lg bg-gradient-to-b from-gray-200 to-gray-400  py-4 shadow-xl">
          <div className="mb-4 flex h-16 w-full flex-row items-center justify-between px-3 ">
            <span className="ml-1 text-2xl font-semibold text-gray-800">
              Explore ultimate fession
            </span>
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
