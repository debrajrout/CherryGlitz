"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full py-4">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-bold text-yellow-500">House in the woods</p>
      <p className="text-base font-normal text-white"></p>
      <p className=" max-w-lg text-base font-normal text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-bold text-yellow-500">
        House above the clouds
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className=" max-w-lg text-base font-normal text-neutral-200">
        Perched high above the world, this house offers breathtaking views
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-bold text-yellow-500">Greens all over</p>
      <p className="text-base font-normal text-white"></p>
      <p className=" max-w-lg text-base font-normal text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-bold text-yellow-500">Rivers are serene</p>
      <p className="text-base font-normal text-white"></p>
      <p className=" max-w-lg text-base font-normal text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-2",
    thumbnail: "/images/f1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-2",
    thumbnail: "/images/f2.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-2",
    thumbnail: "/images/f3.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-2",
    thumbnail: "/images/f4.jpg",
  },
];
