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
    // timeline1.fromTo(
    //   "#s1",
    //   {
    //     scale: 0,
    //     rotation: 0,
    //     opacity: 0,
    //     borderRadius: "0%",
    //   },
    //   {
    //     borderRadius: "20%",
    //     duration: 1,
    //     ease: "power4.out",
    //     opacity: 1,
    //     scale: 1,
    //   },
    // );
    // timeline1.to(
    //   "#s1",
    //   {
    //     opacity: 0,
    //     scale: 0,
    //     duration: 1,
    //     ease: "power4.out",
    //   },
    //   "+=2",
    // );
    // timeline1.fromTo(
    //   "#s2",
    //   {
    //     scale: 0,
    //     rotation: 0,
    //     opacity: 0,
    //     borderRadius: "0%",
    //   },
    //   {
    //     borderRadius: "20%",
    //     duration: 1,
    //     ease: "power4.out",
    //     opacity: 1,
    //     scale: 1,
    //   },
    // );
    // timeline1.to(
    //   "#s2",
    //   {
    //     opacity: 0,
    //     scale: 0,
    //     duration: 1,
    //     ease: "power4.out",
    //   },
    //   "+=1",
    // );
    // timeline1.fromTo(
    //   "#s3",
    //   {
    //     scale: 0,
    //     rotation: 0,
    //     opacity: 0,
    //     borderRadius: "0%",
    //   },
    //   {
    //     borderRadius: "20%",
    //     duration: 1,
    //     ease: "power4.out",
    //     opacity: 1,
    //     scale: 1,
    //   },
    // );
    // timeline1.to(
    //   "#s3",
    //   {
    //     opacity: 0,
    //     scale: 0,
    //     duration: 1,
    //     ease: "power4.out",
    //   },
    //   "+=1",
    // );
    // timeline1.fromTo(
    //   "#s4",
    //   {
    //     scale: 0,
    //     rotation: 0,
    //     opacity: 0,
    //     borderRadius: "0%",
    //   },
    //   {
    //     borderRadius: "20%",
    //     duration: 1,
    //     ease: "power4.out",
    //     opacity: 1,
    //     scale: 1,
    //   },
    // );
    // timeline1.to(
    //   "#s4",
    //   {
    //     opacity: 0,
    //     scale: 0,
    //     duration: 1,
    //     ease: "power4.out",
    //   },
    //   "+=1",
    // );
  });
  return (
    <div className="flex h-14 w-full  flex-row items-center justify-between  px-6 shadow-md shadow-black/20">
      <div className=" flex h-10 w-full flex-row items-center rounded-md bg-white   px-2 shadow-sm shadow-black ring-1 ring-white/50  ">
        <IoSearch className="mr-3 h-6 w-6 text-pink-500  " />
        <span className="flex flex-row gap-8">
          <span>Search for </span>
          <div className="relative  flex items-center justify-center  p-2">
            <span
              id="t1"
              className="absolute flex flex-row items-center gap-1 text-base  font-normal text-yellow-400 "
            >
              Spas
              <FaSpa />
            </span>
            <span
              id="t2"
              className="absolute flex flex-row items-center justify-center  text-base font-normal text-blue-500  "
            >
              Parler
              <MdOutlineGirl />
            </span>
            <span
              id="t3"
              className="absolute flex flex-row items-center justify-center gap-1 text-base font-normal text-orange-400  "
            >
              Salone <FaShop />
            </span>
            <span
              id="t4"
              className="absolute flex flex-row items-center  justify-center gap-1 text-base font-normal text-lime-600"
            >
              Tatoo
              <AiOutlineDingding />
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}
