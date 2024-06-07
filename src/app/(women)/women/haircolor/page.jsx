import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const hairColoringServices = [
  {
    name: "Balayage",
    description:
      "A freehand hair coloring technique for natural-looking highlights.",
    imageSrc: "/hair_coloring/balayage.jpg",
  },
  {
    name: "Highlights",
    description:
      "Add brightness and dimension to your hair with strategically placed highlights.",
    imageSrc: "/hair_coloring/highlights.jpg",
  },
  {
    name: "Lowlights",
    description:
      "Create depth and richness to your hair color with darker shades.",
    imageSrc: "/hair_coloring/lowlights.jpg",
  },
  {
    name: "Ombre",
    description:
      "Achieve a gradient effect from dark to light hair color for a striking look.",
    imageSrc: "/hair_coloring/ombre.jpg",
  },
  {
    name: "Babylights",
    description:
      "Subtle and delicate highlights that mimic the sun-kissed hair of children.",
    imageSrc: "/hair_coloring/babylights.jpg",
  },
  {
    name: "Root Touch-Up",
    description:
      "Cover up regrowth and maintain the consistency of your hair color.",
    imageSrc: "/hair_coloring/root_touch_up.jpg",
  },
];

const Layout1 = ({ service }) => (
  <div className="flex transform flex-col items-center rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
    <div className="mb-4">
      <Image
        src={service.imageSrc}
        alt={service.name}
        className="rounded-lg"
        width={200}
        height={200}
      />
    </div>
    <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
    <p className="text-center text-sm text-gray-600">{service.description}</p>
    <button className="mt-4 flex items-center text-pink-500 hover:text-pink-700">
      <span className="mr-2">Learn More</span>
      <FaArrowRight />
    </button>
  </div>
);

const Layout2 = ({ service }) => (
  <div className="flex transform flex-col items-center rounded-lg bg-pink-100 p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
    <div className="mb-4">
      <Image
        src={service.imageSrc}
        alt={service.name}
        className="rounded-lg"
        width={200}
        height={200}
      />
    </div>
    <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
    <p className="text-center text-sm text-gray-600">{service.description}</p>
    <button className="mt-4 flex items-center text-pink-500 hover:text-pink-700">
      <span className="mr-2">Learn More</span>
      <FaArrowRight />
    </button>
  </div>
);

const Layout3 = ({ service }) => (
  <div className="flex transform flex-col items-center rounded-lg bg-blue-100 p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
    <div className="mb-4">
      <Image
        src={service.imageSrc}
        alt={service.name}
        className="rounded-lg"
        width={200}
        height={200}
      />
    </div>
    <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
    <p className="text-center text-sm text-gray-600">{service.description}</p>
    <button className="mt-4 flex items-center text-pink-500 hover:text-pink-700">
      <span className="mr-2">Learn More</span>
      <FaArrowRight />
    </button>
  </div>
);

export default function HairColoringPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-pink-800">
          Hair Coloring Services
        </h1>
        <p className="text-lg text-gray-600">
          Discover our exclusive hair coloring services
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 overflow-x-auto sm:grid-cols-2 lg:grid-cols-3">
        {hairColoringServices.map((service, index) => (
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
