"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import Link from "next/link";

export function TatooSection() {
  return (
    <div className="mb-4 mt-9 px-2 flex w-full flex-col gap-2  ">
      <span className=" text-2xl font-bold text-black">
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
      </p> <Link href="/category/tatoos" className="rounded-2xl mt-1  text-base font-semibold  text-yellow-400">
        Try now →
      </Link>
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
      </p> <Link href="/category/tatoos" className="rounded-2xl mt-1  text-base font-semibold  text-yellow-400">
        Try now →
      </Link>
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
      </p> <Link href="/category/tatoos" className="rounded-2xl mt-1  text-base font-semibold  text-yellow-400">
        Try now →
      </Link>
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
      </p> <Link href="/category/tatoos" className="rounded-2xl mt-1  text-base font-semibold  text-yellow-400">
        Try now →
      </Link>
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
