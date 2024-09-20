import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PiPlusLight } from "react-icons/pi";
import { CgMenuLeftAlt } from "react-icons/cg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutMenu from "../buttons/menuLogout";

import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import {
  MdOutlineLocalOffer,
  MdOutlineStorefront,
  MdOutlineTravelExplore,
  MdOutlineWorkspacePremium,
} from "react-icons/md";
import { FcBusinessContact } from "react-icons/fc";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoGift, GoGraph, GoHeartFill } from "react-icons/go";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { LuSparkles } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { auth } from "@/auth";
import Link from "next/link";

const menuItems = [
  { name: "Home", icon: <AiFillHome />, src: "" },
  { name: "Explore", icon: <MdOutlineTravelExplore />, src: "explore" },
  { name: "Offer Zone", icon: <MdOutlineLocalOffer /> },
  { name: "My Wishlist", icon: <GoHeartFill />, src: "liked" },
  { name: "Book an Appointment", icon: <FaRegCalendarAlt /> },
  { name: "Subscription", icon: <MdOutlineWorkspacePremium /> },
  { name: "Event Sparklers", icon: <LuSparkles /> },
  { name: "Customer Support", icon: <LiaHandsHelpingSolid /> },
  { name: "Gift Vouchers", icon: <GoGift /> },
  { name: "Franchise", icon: <MdOutlineStorefront /> },
  { name: "Career and Growth", icon: <GoGraph />, src: "groth" },
  { name: "Terms and Conditions", icon: <IoDocumentTextOutline />, src: "termscg" },
  { name: "Contact Us", icon: <FcBusinessContact /> },
];

export default async function MenuSection() {
  const session = await auth();
  return (
    <Sheet side="left">
      <SheetTrigger>
        <CgMenuLeftAlt className="mr-1 h-7 w-7 text-black/70" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex  flex-col items-center gap-3 px-[1px]  text-black"
      >
        <div className="rounded-lg bg-white p-4 ">
          <div className="flex flex-col items-center">
            <div className="flex w-full flex-row items-center justify-between text-blue-900">
              <div className="w-full">
                {session ? (
                  <div className="inline-flex w-full items-center justify-between gap-4">
                    <div className="flex flex-row items-center gap-4">
                      <Avatar className="relative">
                        <AvatarImage
                          src={session?.user?.image}
                          className="h-12 w-12 rounded-full border-2 border-blue-600 shadow-lg"
                        />
                        <AvatarFallback className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                          {session?.user?.name?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="-mt-3 text-lg font-semibold">
                        {session?.user?.name}
                      </span>
                    </div>
                    <LogoutMenu />
                  </div>
                ) : (
                  <a
                    className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-2 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
                    href="#"
                  >
                    <span className="font-medium transition-colors group-hover:text-white">
                      {" "}
                      Login / Register
                    </span>

                    <span className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
                      <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </a>
                )}
              </div>
            </div>
            <span className="mt-2 text-xs font-medium">
              Welcome to Cherry Glitz
            </span>
          </div>
        </div>

        <div className="flex w-full -mt-4 items-center justify-center">
          <button className="mx-auto flex h-9 w-[90%] animate-shimmer items-center justify-center gap-1 rounded-md border border-slate-300 bg-[linear-gradient(110deg,#6366f1,45%,#818cf8,55%,#6366f1)] bg-[length:200%_100%] px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-indigo-600">
            <PiPlusLight className="text-xl text-white" />
            <span className="text-sm text-white">
              Become a Verified Partner
            </span>
          </button>
        </div>

        <div className="flex w-full items-center justify-center">
          <button className="mx-auto flex h-9 w-[90%] animate-shimmer items-center justify-center gap-1 rounded-md border border-slate-300 bg-[linear-gradient(110deg,#6366f1,45%,#818cf8,55%,#6366f1)] bg-[length:200%_100%] px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-indigo-600">
            <FaRegCalendarAlt className="text-xl text-white" />
            <span className="text-sm text-white">Book an Appointment</span>
          </button>
        </div>

        <div className="flex w-full flex-col gap-2 px-4 ">
          {menuItems.map((item, index) => (
            <Link href={`/${item.src}`}
              key={index}
              className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-black/5 px-4 py-2 text-sm font-medium text-black transition duration-100 hover:scale-105 hover:bg-white/20 focus:bg-white/20 focus:outline-none"
            >
              {item.icon}
              <span className="text-gray-900">{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="mt-2 flex w-[90%] flex-col gap-3">
          <div className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-black/5 px-4 py-3 text-sm font-medium text-black transition duration-100 hover:scale-105  focus:outline-none ">
            <Link href="/about">About Cherry Glitz</Link>
            <Image
              src="/menuicon/information.png"
              width={15}
              height={15}
              alt="Information Icon"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
