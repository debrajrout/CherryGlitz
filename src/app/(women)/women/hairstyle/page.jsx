import React from "react";
import {
  FaHeart,
  FaGem,
  FaEye,
  FaCrown,
  FaMoon,
  FaTheaterMasks,
  FaPaintBrush,
  FaPalette,
  FaSmile,
  FaLeaf,
  FaStar,
  FaFire,
  FaHeartbeat,
  FaTrophy,
  FaEyeDropper,
  FaGrinBeam,
  FaGlobe,
  FaTint,
  FaPaintRoller,
  FaThumbsUp,
  FaArrowRight,
} from "react-icons/fa";

const hairstyles = [
  {
    name: "Bob Cut",
    description:
      "A classic short haircut where the hair is typically cut straight around the head at jaw-length.",
    icon: <FaGem className="text-pink-500" />,
  },
  {
    name: "Pixie Cut",
    description:
      "A short hairstyle where the hair is cut short on the back and sides and slightly longer on the top.",
    icon: <FaEye className="text-pink-500" />,
  },
  {
    name: "Layered Haircut",
    description:
      "A haircut where the hair is cut into different lengths, creating layers for volume and movement.",
    icon: <FaCrown className="text-pink-500" />,
  },
  {
    name: "Bangs",
    description:
      "A hairstyle where the hair is cut and styled to fall over the forehead.",
    icon: <FaMoon className="text-pink-500" />,
  },
  {
    name: "Side-Swept Bangs",
    description:
      "Bangs that are styled to sweep across the forehead to one side.",
    icon: <FaTheaterMasks className="text-pink-500" />,
  },
  {
    name: "Blunt Cut",
    description:
      "A haircut where the hair is cut straight across, creating a blunt and even length.",
    icon: <FaPaintBrush className="text-pink-500" />,
  },
  {
    name: "Layered Bob",
    description:
      "A variation of the bob haircut with layers added for texture and volume.",
    icon: <FaPalette className="text-pink-500" />,
  },
  {
    name: "Chin-Length Bob",
    description:
      "A bob haircut where the hair is cut to chin length, framing the face.",
    icon: <FaPaintRoller className="text-pink-500" />,
  },
  {
    name: "Curly Hair",
    description: "Natural hair with curls, coils, or waves.",
    icon: <FaLeaf className="text-pink-500" />,
  },
  {
    name: "Straight Hair",
    description: "Hair that is naturally straight, without curls or waves.",
    icon: <FaThumbsUp className="text-pink-500" />,
  },
  {
    name: "Wavy Hair",
    description:
      "Hair with gentle waves or curls, between straight and curly hair.",
    icon: <FaLeaf className="text-pink-500" />,
  },
  {
    name: "Updo",
    description:
      "A hairstyle where the hair is arranged and secured upward, often for formal occasions.",
    icon: <FaTint className="text-pink-500" />,
  },
  {
    name: "Ponytail",
    description:
      "A hairstyle where the hair is gathered and secured at the back of the head, often with a hair tie or ribbon.",
    icon: <FaGrinBeam className="text-pink-500" />,
  },
  {
    name: "Braids",
    description: "Hairstyle created by weaving sections of hair together.",
    icon: <FaStar className="text-pink-500" />,
  },
  {
    name: "French Braid",
    description:
      "A type of braid where the hair is braided together starting from the scalp.",
    icon: <FaFire className="text-pink-500" />,
  },
];

const HairstylesPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-pink-800">Girls Hairstyles</h1>
        <p className="text-lg text-gray-600">
          Discover trendy hairstyles for girls
        </p>
      </header>

      <div className="mb-7 grid h-72 w-[95%] grid-cols-3 grid-rows-2 gap-0 rounded-xl bg-gradient-to-br from-purple-300 to-purple-100 p-4 ring-1 ring-purple-500">
        <div className="relative flex flex-col items-center justify-center overflow-hidden p-1">
          <div className="z-10 p-1">
            <FaHeart className="h-16 w-16 text-purple-500" />
          </div>
          <span className="z-10 mt-2 text-lg font-semibold text-black">
            Bob Cut
          </span>
          <div className="absolute right-2 top-2 h-10 w-10 rounded-full bg-purple-500 bg-opacity-50"></div>
        </div>
        {/* Column 2, Row 1 */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden border-l-2 border-r-2 border-purple-500 p-1">
          <div className="z-10 p-1">
            <FaLeaf className="h-16 w-16 text-purple-500" />
          </div>
          <span className="mt-2 text-lg font-semibold text-black">
            Wavy Hair
          </span>
          <div className="absolute bottom-4 left-3 h-10 w-10 rounded-full bg-purple-500 bg-opacity-50"></div>
        </div>
        {/* Column 3, Row 1 */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden p-1">
          <div className="z-10 p-1">
            <FaPalette className="h-16 w-16 text-purple-500" />
          </div>
          <span className="mt-2 text-lg font-semibold text-black">French</span>
          <div className="absolute h-10 w-10 rounded-full bg-purple-500 bg-opacity-50"></div>
        </div>
        {/* Column 1, Row 2 */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden border-t-2 border-purple-500 p-1">
          <div className="z-10 p-1">
            <FaMoon className="h-16 w-16 text-purple-500" />
          </div>
          <span className="mt-2 text-lg font-semibold text-black">Layered</span>
          <div className="absolute right-2 top-2 h-10 w-10 rounded-full bg-purple-500 bg-opacity-50"></div>
        </div>
        {/* Column 2, Row 2 */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden border-l-2 border-r-2 border-t-2 border-purple-500 p-1">
          <div className="z-10 p-1">
            <FaGem className="h-16 w-16 text-purple-500" />
          </div>
          <span className="mt-2 text-lg font-semibold text-black">
            Ponytail
          </span>
          <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-purple-500 bg-opacity-50"></div>
        </div>
        {/* Column 3, Row 2 */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden border-t-2 border-purple-500 p-1">
          <div className="z-10 w-12">
            <FaPaintBrush className="h-16 w-16 text-purple-500" />
          </div>
          <span className="mt-2 text-lg font-semibold text-black">
            Curly Hair
          </span>
          <div className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-purple-500 bg-opacity-50"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hairstyles.map((hairstyle, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg bg-gradient-to-br from-purple-300 to-pink-200 p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg"
          >
            <div className="relative mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white">
              <span className="text-4xl text-purple-500">{hairstyle.icon}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {hairstyle.name}
            </h2>
            <p className="text-center text-sm text-gray-600">
              {hairstyle.description}
            </p>
            <button className="mt-4 flex items-center text-purple-500 hover:text-purple-700">
              <span className="mr-2">Learn More</span>
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HairstylesPage;
