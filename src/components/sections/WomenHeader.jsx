import Link from "next/link";
import React from "react";
import { TbArrowBigLeftLines } from "react-icons/tb";
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";

export default function WomenHeading() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-pink-100 to-pink-200 px-6 py-4 shadow-lg shadow-black/30 sm:flex-row sm:justify-between">
      <div className="mb-4 flex items-center gap-4 sm:mb-0">
        <Link href="/">
          <TbArrowBigLeftLines className="h-8 w-8 animate-bounce-left text-pink-700 transition-colors  hover:text-pink-900" />
        </Link>
        <span className="text-3xl font-bold text-pink-900">
          Cherry <span className="text-orange-700">Glitz</span>
        </span>
      </div>

      <div className="flex flex-col items-center text-center sm:items-end sm:text-right">
        <span className="text-lg font-medium text-pink-700">
          Fashion & Beauty
        </span>
        <span className="flex items-center text-sm font-semibold text-black/75">
          <CiLocationOn className="mr-1" /> Women's Section
        </span>
      </div>

      <div className="flex flex-col items-center sm:items-end">
        <div className="mt-2 flex items-center gap-2 text-sm text-black/75 sm:mt-0">
          <CiPhone className="text-pink-700" /> +1 (234) 567-8901
        </div>
        <div className="flex items-center gap-2 text-sm text-black/75">
          <CiMail className="text-pink-700" /> contact@cherryglitz.com
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6 sm:mt-0 sm:justify-end">
        <Link href="/wishlist" aria-label="Wishlist">
          <FiHeart className="h-6 w-6 text-pink-700 transition-colors duration-300 hover:text-pink-900" />
        </Link>
        <Link href="/search" aria-label="Search">
          <FiSearch className="h-6 w-6 text-pink-700 transition-colors duration-300 hover:text-pink-900" />
        </Link>
        <Link href="/cart" aria-label="Shopping Cart">
          <FiShoppingCart className="h-6 w-6 text-pink-700 transition-colors duration-300 hover:text-pink-900" />
        </Link>
      </div>
    </div>
  );
}
