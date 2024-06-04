"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function BeautySection() {
  return (
    <div className="mb-4 mt-6 flex  w-full flex-col gap-2 bg-green-900/20 shadow-md shadow-black/30 ">
      <span className="text-xl font-bold text-black">
        Explore Saloons and Parlours{" "}
        {/* <span className=" text-pink-500">CherryGlitz</span> */}
      </span>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">House in the woods</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        A serene and tranquil retreat,
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">House above the clouds</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        Perched high above the world, this house offers
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Greens all over</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        A house surrounded by greenery and nature&
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Rivers are serene</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        A house by the river is a place of peace
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    Tagline: "Tatoo1",
    subTagline: "A serene and tranquil retreat",
    thumbnail: "/mancat/mb.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    Tagline: "Tatoo2",
    subTagline: "A serene and tranquil retreat",
    thumbnail: "/mancat/buty.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    subTagline: "A serene and tranquil retreat",
    Tagline: "Tatoo3",
    thumbnail: "/mancat/msl.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    subTagline: "A serene and tranquil retreat",
    Tagline: "Tatoo4",
    thumbnail: "/mancat/salon.jpg",
  },
];
