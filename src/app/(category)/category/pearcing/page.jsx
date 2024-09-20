"use client";
import Image from "next/image";
import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";

const piercingData = [
    {
        name: "Ear Piercings",
        description: "Includes lobe, helix, tragus, and more.",
        image: "/subcatf/piercing/earpiercing.jpg",
        alt: "Various ear piercings such as lobe, helix, and tragus.",
    },
    {
        name: "Nose Piercings",
        description: "Popular nose piercings like nostril and septum.",
        image: "/subcatf/piercing/nosepiercing.jpg",
        alt: "Nose piercings, including nostril and septum.",
    },
    {
        name: "Lip Piercings",
        description: "Includes labret, Monroe, and snake bites.",
        image: "/subcatf/piercing/lipspiercing.jpg",
        alt: "Lip piercings such as labret, Monroe, and snake bites.",
    },
    {
        name: "Tongue Piercings",
        description: "Central tongue piercings with a variety of jewelry.",
        image: "/subcatf/piercing/tonguepiercings.jpg",
        alt: "Tongue piercings with various styles of jewelry.",
    },
    {
        name: "Navel (Belly Button) Piercings",
        description: "Classic belly button piercings.",
        image: "/subcatf/piercing/bellypiercings.jpg",
        alt: "Belly button piercings with rings or studs.",
    },
    {
        name: "Nipple Piercings",
        description: "Nipple piercings with different jewelry options.",
        image: "/subcatf/piercing/nipplepiercings.jpg",
        alt: "Nipple piercings with rings or barbells.",
    },
    {
        name: "Eyebrow Piercings",
        description: "Eyebrow piercings with horizontal or vertical placements.",
        image: "/subcatf/piercing/eyebrowpiercings.jpg",
        alt: "Eyebrow piercings with different placement options.",
    },
    {
        name: "Cartilage Piercings",
        description: "Helix, conch, and other cartilage piercings.",
        image: "/subcatf/piercing/cartilagepiercings.jpg",
        alt: "Cartilage piercings such as helix, conch, and more.",
    },
    {
        name: "Industrial Piercings",
        description: "Two piercings connected by a single piece of jewelry.",
        image: "/subcatf/piercing/industrial.jpg",
        alt: "Industrial piercings with bars connecting two piercings.",
    },
    {
        name: "Genital Piercings",
        description: "Intimate piercings with a variety of styles.",
        image: "/subcatf/piercing/genitalpiercings.jpg",
        alt: "Genital piercings with different styles and options.",
    },
];

export default function PiercingsPage() {
    return (
        <div className="p-4 -mt-2">
            <h1 className="text-3xl font-bold text-center mb-4">Types of Piercings</h1>
            <div className="grid grid-cols-2 gap-6">
                {piercingData.map((piercing, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <Image
                            src={piercing.image}
                            alt={piercing.alt}
                            width={200}
                            height={400}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg truncate font-semibold">{piercing.name}</h2>
                            <p className="text-sm text-gray-600 mb-2 truncate">{piercing.description}</p>

                            {/* Gender Icons */}
                            <div className="flex items-center gap-1 text-gray-500 mb-4">
                                <FaMale className="text-blue-500" />
                                <FaFemale className="text-pink-500" />
                                <span className="text-xs font-bold">Unisex</span>
                            </div>

                            {/* Explore Now Button */}
                            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                                Try it now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
