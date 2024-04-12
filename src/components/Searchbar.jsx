import React from "react";
import { IoSearch } from "react-icons/io5";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Searchbar() {
  return (
    <div className="w-full bg-transparent p-4">
      <Popover>
        <PopoverTrigger className="w-full">
          <div className="flex h-16 w-full  flex-row items-center justify-between rounded-sm bg-white px-4  ring-1  ring-black/50">
            <div className="flex h-10 w-64 flex-row items-center  rounded-lg  px-2 ring-1 ring-gray-700 ">
              <IoSearch className="mr-3 h-6 w-6 " />
              <span>Search for items...</span>
            </div>
            <div className="mr-4 h-14 w-14 bg-yellow-200">hi</div>
          </div>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  );
}
