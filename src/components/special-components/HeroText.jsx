"use client";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";
export function FlipWordsDemo() {
  const words = [
    "Tattoo and Piercing",
    "Men’s and Unisex Salon",
    "Beauty Parlour",
    "Massage Parlour",
    "Spa Centre",
  ];

  return (
    <div className="mt-3 flex h-[77px] flex-col items-center justify-center ">
      <div className="mx-auto text-2xl font-normal text-white">
        Best
        <FlipWords words={words} /> <br />
      </div>
      <div className="flex flex-row items-center justify-center ">
        <span className="w-full  text-center font-serif text-lg font-medium text-yellow-300">
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
          <MdDoubleArrow className="ml-4 mt-1 h-6 w-6 text-white" />
        </motion.div>
      </div>
    </div>
  );
}
