"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";
import Link from "next/link";

export function ParlourSection() {
    return (
        <div className="mb-4 mt-8 flex w-full flex-col gap-2 px-2">
            <span className="text-2xl font-bold text-black">
                Explore <span className="text-orange-400">Parlours</span>
            </span>
            <LayoutGrid cards={parlourCards} />
        </div>
    );
}

const ParlourCardOne = () => {
    return (
        <div>
            <p className="text-xl font-semibold text-white">Makeup Services</p>
            <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
                Look Your Best for Any Occasion with Expert Makeup Artists
            </p>
            <Link href="/women/radiantglow" className="rounded-2xl mt-1 text-base font-semibold text-yellow-400">
                Try now →
            </Link>
        </div>
    );
};

const ParlourCardTwo = () => {
    return (
        <div>
            <p className="text-xl font-semibold text-white">Facial Treatments</p>
            <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
                Revitalize Your Skin with Customized Facials
            </p>
            <Link href="/women/skincare" className="rounded-2xl mt-1 text-base font-semibold text-yellow-400">
                Try now →
            </Link>
        </div>
    );
};

const ParlourCardThree = () => {
    return (
        <div>
            <p className="text-xl font-semibold text-white">Manicures & Pedicures</p>
            <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
                Pamper Your Hands and Feet with Our Professional Services
            </p>
            <Link href="/women/nails" className="rounded-2xl mt-1 text-base font-semibold text-yellow-400">
                Try now →
            </Link>
        </div>
    );
};

const ParlourCardFour = () => {
    return (
        <div>
            <p className="text-xl font-semibold text-white">Hair Styling</p>
            <p className="my-1 max-w-lg text-sm font-normal text-neutral-200">
                Achieve Your Dream Look with Our Expert Hair Stylists
            </p>
            <Link href="/women/hairstyle" className="rounded-2xl mt-1 text-base font-semibold text-yellow-400">
                Try now →
            </Link>
        </div>
    );
};

const parlourCards = [
    {
        id: 1,
        content: <ParlourCardOne />,
        className: "md:col-span-2",
        Tagline: "Beauty, Perfected",
        thumbnail: "/parlour/bl1.webp",
    },
    {
        id: 2,
        content: <ParlourCardTwo />,
        className: "col-span-1",
        Tagline: "Radiant Skin Awaits",
        thumbnail: "/parlour/bl2.jpg",
    },
    {
        id: 3,
        content: <ParlourCardThree />,
        className: "col-span-1",
        Tagline: "Pampered to Perfection",
        thumbnail: "/parlour/bl3.jpg",
    },
    {
        id: 4,
        content: <ParlourCardFour />,
        className: "md:col-span-2",
        Tagline: "Styled with Grace",
        thumbnail: "/parlour/bl4.jpg",
    },
];
