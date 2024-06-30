import Link from "next/link";
import React from "react";
import { TbArrowBigLeftLines } from "react-icons/tb";


export default function WomenHeading() {
  return (

    <div className="w-full h-14 flex flex-row gap-2 items-center bg-gray-100 px-4 ">
      <Link href="/">
        <TbArrowBigLeftLines className="h-8 w-8 animate-bounce-left text-pink-500 transition-colors hover:text-pink-800" />
      </Link>
      <span className="text-3xl font-bold text-pink-800">
        Cherry <span className="text-orange-600">Glitz</span>
      </span>
    </div>



  );
}
