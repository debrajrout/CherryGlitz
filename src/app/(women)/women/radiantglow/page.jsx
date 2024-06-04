import React from "react";
import Image from "next/image";
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

const makeupServices = [
  {
    name: "Everyday Makeup",
    description: "Subtle and natural makeup for everyday wear.",
    icon: <FaSmile className="text-pink-500" />,
  },
  {
    name: "Glam Makeup",
    description: "Bold and glamorous look for special occasions.",
    icon: <FaGem className="text-pink-500" />,
  },
  {
    name: "Bridal Makeup",
    description: "Elegant and long-lasting makeup for your big day.",
    icon: <FaHeart className="text-pink-500" />,
  },
  {
    name: "Evening Makeup",
    description: "Perfect for nights out and formal events.",
    icon: <FaMoon className="text-pink-500" />,
  },
  {
    name: "Prom Makeup",
    description: "Stand out at your prom with a unique makeup look.",
    icon: <FaTheaterMasks className="text-pink-500" />,
  },
  {
    name: "Editorial Makeup",
    description: "Creative and artistic makeup for photoshoots.",
    icon: <FaPaintBrush className="text-pink-500" />,
  },
  {
    name: "Special Effects Makeup (SFX)",
    description: "Transform into characters with SFX makeup.",
    icon: <FaPalette className="text-pink-500" />,
  },
  {
    name: "Airbrush Makeup",
    description: "Flawless and lightweight airbrush application.",
    icon: <FaPaintRoller className="text-pink-500" />,
  },
  {
    name: "Mature Skin Makeup",
    description: "Enhancing natural beauty for mature skin.",
    icon: <FaLeaf className="text-pink-500" />,
  },
  {
    name: "Men's Makeup",
    description: "Natural and polished looks for men.",
    icon: <FaThumbsUp className="text-pink-500" />,
  },
  {
    name: "Natural Makeup Look",
    description: "Minimalist makeup for a fresh-faced look.",
    icon: <FaLeaf className="text-pink-500" />,
  },
  {
    name: "Dewy Skin Makeup",
    description: "Achieve a glowing, dewy skin finish.",
    icon: <FaTint className="text-pink-500" />,
  },
  {
    name: "Bold Lip Colors",
    description: "Statement lips with bold, vibrant colors.",
    icon: <FaGrinBeam className="text-pink-500" />,
  },
  {
    name: "Smoky Eye Makeup",
    description: "Dramatic and smoldering smoky eyes.",
    icon: <FaEye className="text-pink-500" />,
  },
  {
    name: "Graphic Eyeliner",
    description: "Creative and bold eyeliner designs.",
    icon: <FaStar className="text-pink-500" />,
  },
  {
    name: "Feathered Brows",
    description: "Soft and natural-looking feathered brows.",
    icon: <FaFire className="text-pink-500" />,
  },
  {
    name: "Colorful Eyeshadow Looks",
    description: "Vibrant and colorful eyeshadow styles.",
    icon: <FaEyeDropper className="text-pink-500" />,
  },
  {
    name: "Glossy Lips",
    description: "High-shine and luscious glossy lips.",
    icon: <FaHeartbeat className="text-pink-500" />,
  },
  {
    name: "Monochromatic Makeup",
    description: "Single color makeup looks for a cohesive style.",
    icon: <FaTrophy className="text-pink-500" />,
  },
  {
    name: "Retro/Vintage Makeup",
    description: "Classic makeup styles from past decades.",
    icon: <FaGlobe className="text-pink-500" />,
  },
];

const Layout1 = ({ service }) => (
  <div className="flex transform flex-col items-center rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
    <div className="relative mb-4 h-32 w-full overflow-hidden rounded-lg">
      <Image
        src={`/makeup/${service.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        alt={service.name}
      />
    </div>
    <div className="mb-2 text-pink-500">{service.icon}</div>
    <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
    <p className="text-center text-sm text-gray-600">{service.description}</p>
    <button className="mt-4 flex items-center text-pink-500 hover:text-pink-700">
      <span className="mr-2">Learn More</span>
      <FaArrowRight />
    </button>
  </div>
);

const Layout2 = ({ service }) => (
  <div className="flex transform flex-col items-center rounded-lg bg-pink-200 p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
    <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full">
      <Image
        src={`/makeup/${service.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
        alt={service.name}
      />
    </div>
    <div className="mb-2 text-pink-500">{service.icon}</div>
    <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
    <p className="text-center text-sm text-gray-600">{service.description}</p>
    <button className="mt-4 flex items-center text-pink-500 hover:text-pink-700">
      <span className="mr-2">Learn More</span>
      <FaArrowRight />
    </button>
  </div>
);

const Layout3 = ({ service }) => (
  <div className="flex transform flex-col items-center rounded-lg bg-blue-200 p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
    <div className="relative mb-4 h-32 w-full overflow-hidden rounded-lg">
      <Image
        src={`/makeup/${service.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        alt={service.name}
      />
    </div>
    <div className="mb-2 text-pink-500">{service.icon}</div>
    <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
    <p className="text-center text-sm text-gray-600">{service.description}</p>
    <button className="mt-4 flex items-center text-pink-500 hover:text-pink-700">
      <span className="mr-2">Learn More</span>
      <FaArrowRight />
    </button>
  </div>
);

export default function RadiantMakeupPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-pink-800">Radiant Makeup</h1>
        <p className="text-lg text-gray-600">
          Transform your look with our exclusive makeup services
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 overflow-x-auto sm:grid-cols-2 lg:grid-cols-3">
        {makeupServices.map((service, index) => (
          <div key={index}>
            {index % 3 === 0 && <Layout1 service={service} />}
            {index % 3 === 1 && <Layout2 service={service} />}
            {index % 3 === 2 && <Layout3 service={service} />}
          </div>
        ))}
      </div>
    </div>
  );
}
