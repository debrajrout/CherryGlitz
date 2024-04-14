"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FaSpa } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdOutlineGirl } from "react-icons/md";
import { AiOutlineDingding } from "react-icons/ai";
// import { TextPlugin } from "gsap/all";
// gsap.registerPlugin(TextPlugin);
export default function Subhero() {
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
    <div className="mx-auto  flex h-32 w-full flex-col items-center justify-center  bg-transparent p-2 shadow-lg shadow-slate-900 ">
      <span className="text-2xl font-semibold text-slate-900">
        Discover Premium
      </span>
      <div className="relative mt-2 flex h-full w-full justify-center">
        <span
          id="t1"
          className="absolute flex flex-row items-center gap-2 text-3xl  font-normal text-yellow-400 "
        >
          Spas
          <FaSpa />
        </span>
        <span
          id="t2"
          className="absolute flex flex-row items-center justify-center gap-1 text-3xl font-normal text-blue-500  "
        >
          Parler
          <MdOutlineGirl />
        </span>
        <span
          id="t3"
          className="absolute flex flex-row items-center justify-center gap-2 text-3xl font-normal text-orange-400  "
        >
          Salone <FaShop />
        </span>
        <span
          id="t4"
          className="absolute flex flex-row items-center  justify-center gap-2 text-3xl font-normal text-lime-600"
        >
          Tatoo
          <AiOutlineDingding />
        </span>
      </div>
      <span className="text-lg font-normal text-slate-800">
        Services Near You
      </span>
    </div>
  );
}
