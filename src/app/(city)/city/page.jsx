import React from "react";
import { FcSearch } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { GiModernCity } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";


export default function page() {
  return (
    <main>
      <div className="flex w-full flex-col gap-4 p-2  ">
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
        <div className="scrollbar-hide row-span-2 flex w-full flex-row justify-normal gap-x-3 gap-y-5 overflow-x-auto  py-3">
          <div className=" w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/agra.png"
              alt="City 1"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
          <div className="w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/bengaluru.png"
              alt="City 2"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
          <div className="w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/chennai.png"
              alt="City 3"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
          <div className="w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/delhi.png"
              alt="City 3"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
          <div className="w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/hyderabad.png"
              alt="City 4"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
          <div className="w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/jaipur.png"
              alt="City 5"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
          <div className="w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/kolkata.png"
              alt="City 6"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
          <div className="w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/lucknow.png"
              alt="City 7"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
          <div className="w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/mumbai.png"
              alt="City 8"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
          <div className="w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/pune.png"
              alt="City 9"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
          <div className="w-24 flex-shrink-0 shadow-md ">
            <Image
              src="/city/ahemdabad.png"
              alt="City 10"
              className="rounded-lg object-cover"
              width={768}
              height={1200}
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-6 px-4 gap-8 flex flex-wrap justify-between">
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 w-40 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Mumbai
        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 w-40 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Delhi
        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 w-40 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Bangalore
        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 w-40 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Pune
        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 w-40 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Ahmedabad
        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 w-40 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Jaipur
        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 w-40 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Kolkata

        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 w-40 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Chennai
        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 w-40 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Surat
        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 w-40 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Surat
        </button>
      </div>
    </main>
  );
}
