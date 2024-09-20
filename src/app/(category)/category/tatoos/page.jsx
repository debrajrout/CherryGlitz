"use client";
import Image from "next/image";
import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";
const tattooData = [
  {
    name: "Traditional Tattoos",
    description: "Bold lines and bright colors.",
    image: "/subcatf/tat/traditional.jpg",
    alt: "Bold traditional tattoos with bright colors",
  },
  {
    name: "Neo-traditional Tattoos",
    description: "Rich color and fine details.",
    image: "/subcatf/tat/neotraditional.jpg",
    alt: "Neo-traditional tattoos with rich color and fine details",
  },
  {
    name: "Blackwork Tattoos",
    description: "Black ink only, no colors.",
    image: "/subcatf/tat/blackwork.jpg",
    alt: "Blackwork tattoos with only black ink and no colors",
  },
  {
    name: "Fine Line Tattoos",
    description: "Delicate and precise lines.",
    image: "/subcatf/tat/fineline.jpg",
    alt: "Fine line tattoos with delicate and precise lines",
  },
  {
    name: "Geometric Tattoos",
    description: "Shapes and symmetry.",
    image: "/subcatf/tat/geometric.jpg",
    alt: "Geometric tattoos featuring shapes and symmetry",
  },
  {
    name: "Watercolor Tattoos",
    description: "Soft colors blending like watercolors.",
    image: "/subcatf/tat/watercolour.jpg",
    alt: "Watercolor tattoos with soft colors blending like paint",
  },
  {
    name: "Realism Tattoos",
    description: "Photo-realistic designs.",
    image: "/subcatf/tat/realism.jpg",
    alt: "Realism tattoos with photo-realistic designs",
  },
  {
    name: "Portrait Tattoos",
    description: "Detailed human portraits.",
    image: "/subcatf/tat/portrait.jpg",
    alt: "Portrait tattoos with detailed human faces and figures",
  },
  {
    name: "Japanese Tattoos (Irezumi)",
    description: "Traditional Japanese style, often with mythical creatures.",
    image: "/subcatf/tat/japanees.jpg",
    alt: "Japanese Irezumi tattoos featuring traditional mythical creatures",
  },
  {
    name: "Chinese Tattoos (Hanzi)",
    description: "Incorporates Chinese characters and symbols.",
    image: "/subcatf/tat/chinese.jpg",
    alt: "Chinese Hanzi tattoos with characters and symbols",
  },
  {
    name: "Tribal Tattoos",
    description: "Patterns and symbols from ancient tribal cultures.",
    image: "/subcatf/tat/tribal.jpg",
    alt: "Tribal tattoos with patterns and symbols from ancient cultures",
  },
  {
    name: "Maori Tattoos (Ta Moko)",
    description: "Traditional Maori tattooing with intricate designs.",
    image: "/subcatf/tat/maori.jpg",
    alt: "Maori tattoos, also known as Ta Moko, with intricate traditional designs",
  },
  {
    name: "Dotwork Tattoos",
    description: "Intricate designs made entirely of dots.",
    image: "/subcatf/tat/dotwork.jpg",
    alt: "Dotwork tattoos featuring intricate designs made of dots",
  },
  {
    name: "Illustrative Tattoos",
    description: "A combination of realism and traditional illustration styles.",
    image: "/subcatf/tat/illustrative.jpg",
    alt: "Illustrative tattoos combining realism and traditional illustration styles",
  },
  {
    name: "Script Tattoos",
    description: "Tattooed text, often quotes or names.",
    image: "/subcatf/tat/script.jpg",
    alt: "Script tattoos with text, quotes, or names",
  },
  {
    name: "Graphic Tattoos",
    description: "Modern, abstract designs influenced by graphic design.",
    image: "/subcatf/tat/graphic.jpg",
    alt: "Graphic tattoos with modern, abstract designs",
  },
  {
    name: "Surrealism Tattoos",
    description: "Dream-like, abstract designs often blending reality and fantasy.",
    image: "/subcatf/tat/superrealism.jpg",
    alt: "Surrealism tattoos blending reality and fantasy with dream-like designs",
  },
  {
    name: "Minimalist Tattoos",
    description: "Simple, clean, and minimal designs.",
    image: "/subcatf/tat/minimalist.jpg",
    alt: "Minimalist tattoos with simple, clean, and minimal designs",
  },
  {
    name: "Abstract Tattoos",
    description: "Non-representational, creative designs.",
    image: "/subcatf/tat/abstract.jpg",
    alt: "Abstract tattoos with non-representational and creative designs",
  },
  {
    name: "Bio-mechanical Tattoos",
    description: "Designs that combine organic elements with machinery.",
    image: "/subcatf/tat/biomechanical.jpg",
    alt: "Bio-mechanical tattoos combining organic elements with machinery",
  },
];
export default function TattoosPage() {
  return (
    <div className="p-4 -mt-2">
      <h1 className="text-3xl font-bold text-center mb-4">Types of Tattoos</h1>
      <div className="grid grid-cols-2 gap-6">
        {tattooData.map((tattoo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={tattoo.image}
              alt={tattoo.alt}
              width={200}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg truncate font-semibold">{tattoo.name}</h2>
              <p className="text-sm text-gray-600 mb-2 truncate">{tattoo.description}</p>

              {/* Gender Icons */}
              <div className="flex items-center gap-1 text-gray-500 mb-4">
                <FaMale className="text-blue-500" />
                <FaFemale className="text-pink-500" />
                <span className="text-xs font-bold">Unisex</span>
              </div>

              {/* Explore Now Button */}
              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                Try now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
