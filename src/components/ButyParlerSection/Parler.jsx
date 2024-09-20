"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";
import Link from "next/link";

export function SaloonSection() {
  return (
    <div className="mb-4 mt-8 flex w-full flex-col gap-2 px-2">
      <span className="text-2xl font-bold text-black">
        Explore <span className="text-blue-500">Saloons</span>
      </span>
      <LayoutGrid cards={saloonCards} />
    </div>
  );
}

const SaloonCardOne = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Premium Haircuts</p>
      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        Get the Perfect Cut with Expert Stylists
      </p>
      <Link href="/men/haircut" className="rounded-2xl mt-1 text-base font-semibold text-yellow-400">
        Try now →
      </Link>
    </div>
  );
};

const SaloonCardTwo = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Hair Coloring</p>
      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        Transform Your Look with Professional Hair Coloring Services
      </p>
      <Link href="/men/beard" className="rounded-2xl mt-1 text-base font-semibold text-yellow-400">
        Try now →
      </Link>
    </div>
  );
};

const SaloonCardThree = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Men’s Grooming</p>
      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        Experience the Best in Men’s Grooming Services
      </p>
      <Link href="/men/grooming" className="rounded-2xl mt-1 text-base font-semibold text-yellow-400">
        Try now →
      </Link>
    </div>
  );
};

const SaloonCardFour = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-white">Beard Styling</p>
      <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
        Keep Your Beard Looking Sharp with Expert Styling
      </p>
      <Link href="/men/beard" className="rounded-2xl mt-1 text-base font-semibold text-yellow-400">
        Try now →
      </Link>
    </div>
  );
};

const saloonCards = [
  {
    id: 1,
    content: <SaloonCardOne />,
    className: "md:col-span-2",
    Tagline: "Vibrant New You",
    thumbnail: "/saloon/mss1.jpg",
  },
  {
    id: 2,
    content: <SaloonCardTwo />,
    className: "col-span-1",
    Tagline: "Your Best Look Yet",
    thumbnail: "/saloon/mss2.jpg",
  },
  {
    id: 3,
    content: <SaloonCardThree />,
    className: "col-span-1",
    Tagline: "Groomed to Perfection",
    thumbnail: "/saloon/mss3.jpg",
  },
  {
    id: 4,
    content: <SaloonCardFour />,
    className: "md:col-span-2",
    Tagline: "Styled to Impress",
    thumbnail: "/saloon/mss4.jpg",
  },
];
