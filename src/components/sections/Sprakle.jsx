"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { MovingBorderDemo } from "../special-components/categoryIcon";
import { TypewriterEffectSmoothDemo } from "../special-components/Text";

export function SparklesPreview() {
  return (
    <div className="mt-16 flex  w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <TypewriterEffectSmoothDemo />
      <div className="relative h-28 w-full ">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[3px]  bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px  bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px]  bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px  bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        <MovingBorderDemo className="absolute top-0 z-50 " />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="absolute top-0 h-full w-full"
          particleColor="#D9DF87"
        />

        {/* Radial Gradient to prevent sharp edges */}
      </div>
    </div>
  );
}
