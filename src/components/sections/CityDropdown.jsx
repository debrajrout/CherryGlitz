"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowUp } from "react-icons/md";

const CityDropdown = ({ list, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger onClick={handleToggle}>
        <div className="flex h-full w-full cursor-pointer flex-row items-center justify-center rounded-full text-lg text-black">
          {name}
          <MdKeyboardArrowUp
            className={`text-3xl transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-60 overflow-y-auto">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {list.map((city, index) => (
          <DropdownMenuItem key={index}>{city}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CityDropdown;
