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
import { LiaSearchLocationSolid } from "react-icons/lia";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Searchtext from "./gsap/Searchtext";
import { PlaceholdersAndVanishInputDemo } from "./sections/SearchDiv";
import { ComboboxDemo } from "./search/searchCity";
import { IoMdArrowRoundForward } from "react-icons/io";
import { LocationSearchComponent } from "./sections/citySearchInput";

export default function CitySearchBar() {
    return (
        <div className="mt-[65px] w-[80%]">
            <Drawer>
                <DrawerTrigger className=" ml-8 flex w-9 flex-col items-center justify-center">
                    <LiaSearchLocationSolid className="text-3xl text-blue-500" />
                    <span className="text-xs">City</span>
                </DrawerTrigger>
                <DrawerContent className="flex flex-col  items-center bg-gradient-to-b from-gray-200 to-gray-400  py-4 shadow-xl">
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
                    <LocationSearchComponent />
                </DrawerContent>
            </Drawer>
        </div>
    );
}