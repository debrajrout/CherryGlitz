"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function TatooSection() {
  return (
    <div className="mb-4 mt-2 flex w-full flex-col gap-2 bg-violet-900/20 shadow-md shadow-black/30 ">
      <span className=" text-xl font-bold text-black">
        Explore Tatoo with <span className=" text-pink-500">CherryGlitz</span>
      </span>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Traditional Tattoos</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        vibrant colors, and iconic imagery such as anchors, eagles, pin-up
        girls, and roses.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">
        Neo-traditional Tattoos
      </p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        a broader color palette, and elaborate shading.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Blackwork Tattoos</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        This style includes a range of motifs from tribal patterns to geometric
        shapes
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Fine Line Tattoos</p>

      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        Fine line tattoos use thin, delicate lines to create detailed and
        intricate designs.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    Tagline: "Traditional",
    subTagline: "A serene and tranquil retreat",
    thumbnail: "/mancat/tatoo.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    Tagline: "Neo-traditional",
    subTagline: "A serene and tranquil retreat",
    thumbnail: "/tatoo/tatoob2.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    subTagline: "A serene and tranquil retreat",
    Tagline: "Blackwork",
    thumbnail: "/tatoo/tatoob3.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    subTagline: "A serene and tranquil retreat",
    Tagline: "Fine Line",
    thumbnail: "/tatoo/tatoob1.webp",
  },
];
