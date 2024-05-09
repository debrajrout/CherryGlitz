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
  const timeline1 = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  useGSAP(() => {
    timeline1.to(
      "#textt",
      {
        duration: 1,
        text: "Fessions",
        ease: "none",
        color: "red",
      },
      "+=2",
    );
    timeline1.to(
      "#textt",
      {
        duration: 1,
        text: "Salon",
        ease: "none",
        color: "#cf19bc",
      },
      "+=2",
    );
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
    <div className="w-full px-3">
      <div className=" flex h-10 w-full flex-row items-center rounded-full bg-white/30  px-4 shadow-sm shadow-black ring-1 ring-white/50  ">
        <IoSearch className="mr-3 h-6 w-6 text-pink-500  " />
        <span>
          <span className="text-black/60">Search for </span>
          <span id="textt" className="text-base  font-semibold text-blue-700">
            Citys
          </span>
        </span>
      </div>
    </div>
  );
}
