"use client";
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import useLocationStore from "@/store/useLocationStore";

export default function CategoryHeading() {
  const nearestCity = useLocationStore((state) => state.nearestCity);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure that the component renders only after client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex h-16 w-full flex-row items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 px-5 shadow-lg">
      <div className="flex flex-row items-center gap-4">
        <Link href="/" className="flex items-center justify-center">
          <FaArrowLeft className="text-2xl text-white cursor-pointer hover:text-indigo-200 transition-all duration-300" />
        </Link>
        <span className="font-medium text-lg text-white drop-shadow-md">
          Best tattoos in {isMounted && nearestCity ? nearestCity : "your city"}
        </span>
      </div>
      <div className="flex flex-row items-center gap-6 text-2xl text-white">
        <Link
          href="/liked"
          className="relative group cursor-pointer hover:text-red-300 transition-colors duration-300"
        >
          <FaHeart />
          <span className="absolute -top-3 -right-3 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center group-hover:bg-red-300 transition-all duration-300">
            5
          </span>
        </Link>
        <Link
          href="/account"
          className="hover:text-indigo-200 transition-all duration-300"
        >
          <MdAccountCircle className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}
