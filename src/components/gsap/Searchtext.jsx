"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import Image from "next/image";
import { FaSpa } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdOutlineGirl } from "react-icons/md";
import { AiOutlineDingding } from "react-icons/ai";
import { MdOutlineAddLocationAlt } from "react-icons/md";

gsap.registerPlugin(TextPlugin);
export default function Searchtext() {
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  useGSAP(() => {
    timeline.fromTo(
      "#t1",
      {
        y: 20,

        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        ease: "power1.out",
        opacity: 1,
      },
    );
    timeline.to(
      "#t1",
      { y: -10, opacity: 0, duration: 1, ease: "power1.out" },
      "+=1",
    );
    timeline.fromTo(
      "#t2",
      {
        y: 20,

        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        ease: "power1.out",
        opacity: 1,
      },
    );
    timeline.to(
      "#t2",
      { y: -10, opacity: 0, duration: 1, ease: "power1.out" },
      "+=1",
    );
    timeline.fromTo(
      "#t3",
      {
        y: 20,

        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        ease: "power1.out",
        opacity: 1,
      },
    );
    timeline.to(
      "#t3",
      { y: -10, opacity: 0, duration: 1, ease: "power1.out" },
      "+=1",
    );
    timeline.fromTo(
      "#t4",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        ease: "power1.out",
        opacity: 1,
      },
    );
    timeline.to(
      "#t4",
      { y: -10, opacity: 0, duration: 1, ease: "power1.out" },
      "+=1",
    );
  });
  return (
    <div className="flex h-16 w-full  flex-row items-center justify-between  px-2 ">
      <div className=" flex h-10 w-full flex-row items-center justify-between rounded-full bg-white/90  px-2 shadow-sm shadow-sky-500 ring-1 ring-sky-400  ">
        <div className="flex flex-row gap-2">
          <IoSearch className=" ml-2 mt-1 h-6 w-6 text-pink-500 " />
          <span className="mr-5 text-lg font-semibold text-black/60">
            Search for
          </span>
          <div className="relative ml-2 flex items-center justify-center  p-2">
            <div
              id="t1"
              className="absolute flex flex-row items-center gap-1 text-base  font-normal text-yellow-400  opacity-0 "
            >
              Spas
              <FaSpa />
            </div>
            <div
              id="t2"
              className="absolute flex flex-row items-center justify-center  text-base font-normal text-blue-500  opacity-0 "
            >
              Parler
              <MdOutlineGirl />
            </div>
            <div
              id="t3"
              className="absolute flex flex-row items-center justify-center gap-1 text-base font-normal text-orange-400  opacity-0 "
            >
              Salone <FaShop />
            </div>
            <div
              id="t4"
              className="absolute flex flex-row items-center  justify-center gap-1 text-base font-normal text-lime-600 opacity-0"
            >
              Tatoos
              <AiOutlineDingding />
            </div>
          </div>
        </div>
        <MdOutlineAddLocationAlt className="mr-2 h-6 w-6 text-blue-700" />
      </div>
    </div>
  );
}
