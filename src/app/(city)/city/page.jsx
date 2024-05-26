import React from "react";
import { FcSearch } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { GiModernCity } from "react-icons/gi";
import Link from "next/link";
export default function page() {
  return (
    <main className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-row gap-2">
        <div className="flex h-16 w-1/6 flex-col items-center justify-center rounded-full bg-white p-2 shadow-md shadow-black/20">
          <AiOutlineHome className="h-full w-full" />
          <Link className="text-xs font-semibold" href="/">
            Home
          </Link>
        </div>
        <div className="flex h-16 w-5/6 flex-row items-center gap-2  rounded-full bg-white px-3 py-2 shadow-md shadow-black/20">
          <div className="flex h-11 w-11 items-center justify-center rounded-full  p-1">
            <FcSearch className="h-full w-full" />
          </div>
          <div className="flex h-full w-full flex-col ">
            <span className="text-lg font-medium text-black/80">
              Near your city
            </span>
            <div className="flex flex-row items-center text-sm font-semibold text-black/50">
              <span>Tatoos</span>
              <LuDot className=" text-black" />
              <span>Parler</span>
              <LuDot className=" text-black" />
              <span>Spa</span>
              <LuDot className=" text-black" />
              <span>Salone</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 text-blue-800">
        <GiModernCity className="h-6 w-6 " />
        <span className="text-lg font-semibold">Explore top citys</span>
      </div>

      <div className="flex h-64 w-full flex-col rounded-2xl p-2 shadow-md shadow-black/20 ring-1 ring-black/30"></div>
    </main>
  );
}
