import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Searchtext from "./gsap/Searchtext";

export default function Searchbar() {
  return (
    <div className="w-full bg-transparent bg-white ">
      <Popover>
        <PopoverTrigger className="w-full">
          <Searchtext />
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  );
}
