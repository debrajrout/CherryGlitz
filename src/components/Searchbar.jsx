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
    <div className=" w-full ">
      <Popover>
        <PopoverTrigger className="w-full">
          <Searchtext />
        </PopoverTrigger>
        <PopoverContent>
          <div className="h-96 w-full bg-slate-600">jdflskl</div>
          <div className="h-96 w-full bg-slate-600">jdflskl</div>
          <div className="h-96 w-full bg-slate-600">jdflskl</div>
          <div className="h-96 w-full bg-slate-600">jdflskl</div>
          <div className="h-96 w-full bg-slate-600">jdflskl</div>
          <div className="h-96 w-full bg-slate-600">jdflskl</div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
