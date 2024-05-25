"use client";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";
export function FlipWordsDemo() {
  const words = [
    "Tattoo&Piercing",
    "Salon",
    "BeautyParlour",
    "MassageParlour",
    "SpaCentre",
  ];

  return (
    <div className=" flex h-[60px] flex-col items-center justify-start bg-black/25 ">
      <div className="mx-auto max-h-10 overflow-hidden text-2xl  font-semibold text-black">
        Best
        <FlipWords words={words} /> <br />
      </div>
      <div className="flex flex-row items-center justify-center ">
        <span className="w-full  text-center   text-lg font-semibold text-blue-800">
          Of your city
        </span>

        <motion.div
          animate={{
            translateX: [0, -3, 0],
          }}
          transition={{
            duration: 0.7,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <MdDoubleArrow className="text-green- ml-4 mt-1 h-6 w-6 text-blue-800" />
        </motion.div>
      </div>
    </div>
  );
}
