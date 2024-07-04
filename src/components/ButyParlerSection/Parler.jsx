"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function BeautySection() {
  return (
    <div className="mb-4 mt-8 flex  w-full flex-col gap-2 px-2 shadow-md shadow-black/30 ">
      <span className="text-2xl font-bold text-black">
        Explore <span className="text-blue-500">Saloons</span>  and <span className="text-orange-400">Parlours</span> {" "}
        {/* <span className=" text-pink-500">CherryGlitz</span> */}
      </span>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Makeup Services</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        Look Your Best for Any Occasion with Expert Makeup Artists
      </p>
      <span className="rounded-2xl mt-1  text-base font-semibold  text-yellow-400">
        Try now →
      </span>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Facial Treatments</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        Revitalize Your Skin with Customized Facials
      </p> <span className="rounded-2xl mt-1  text-base font-semibold  text-yellow-400">
        Try now →
      </span>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Premium Haircuts</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        Get the Perfect Cut with Expert Stylists
      </p> <span className="rounded-2xl mt-1  text-base font-semibold  text-yellow-400">
        Try now →
      </span>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Hair Coloring</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        Transform Your Look with Professional Hair Coloring Services
      </p> <span className="rounded-2xl mt-1  text-base font-semibold  text-yellow-400">
        Try now →
      </span>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    Tagline: "Beauty, Perfected",
    subTagline: "A serene and tranquil retreat",
    thumbnail: "/saloon/bl1.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    Tagline: "Radiant Skin Awaits",
    subTagline: "A serene and tranquil retreat",
    thumbnail: "/saloon/bl2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    subTagline: "Vibrant New You",
    Tagline: "Vibrant New You",
    thumbnail: "/saloon/mss1.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    subTagline: "Your Best Look Yet",
    Tagline: "Your Best Look Yet",
    thumbnail: "/saloon/mss2.jpg",
  },
];
