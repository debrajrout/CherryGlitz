import Image from "next/image";
import React from "react";
import {
  FaEye,
  FaSpa,
  FaLeaf,
  FaMagic,
  FaBrush,
  FaFeather,
  FaSmile,
} from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const eyeCareServices = [
  {
    name: "Dark Circle Reduction",
    description: "Effective treatments to reduce dark circles around the eyes.",
    icon: <FaEye className="text-3xl text-blue-500" />,
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
    services: [
      "Intense Pulsed Light (IPL) therapy",
      "Platelet-rich plasma (PRP) injections",
    ],
  },
  {
    name: "Eye Massages",
    description:
      "Relaxing massages to relieve eye strain and improve circulation.",
    icon: <FaSpa className="text-3xl text-green-500" />,
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    name: "Eye Masks",
    description: "Soothing masks for hydration and rejuvenation.",
    icon: <FaLeaf className="text-3xl text-purple-500" />,
    bgColor: "bg-purple-100",
    textColor: "text-purple-700",
  },
  {
    name: "Eye Serums",
    description: "Targeted serums to treat specific eye concerns.",
    icon: <FaMagic className="text-3xl text-pink-500" />,
    bgColor: "bg-pink-100",
    textColor: "text-pink-700",
  },
  {
    name: "Eye Contouring",
    description: "Treatments to enhance the contours around the eyes.",
    icon: <FaBrush className="text-3xl text-yellow-500" />,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
];

const eyebrowsServices = [
  {
    name: "Eyebrow Shaping",
    description: "Various methods to shape your eyebrows to perfection.",
    icon: <FaFeather className="text-brown-500 text-3xl" />,
    bgColor: "bg-brown-100",
    textColor: "text-brown-700",
    methods: ["Waxing", "Threading", "Tweezing"],
  },
  {
    name: "Eyebrow Tinting",
    description: "Tinting services to enhance the color of your eyebrows.",
    icon: <FaBrush className="text-3xl text-red-500" />,
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
  {
    name: "Eyebrow Microblading",
    description:
      "Semi-permanent makeup technique for natural-looking eyebrows.",
    icon: <FaMagic className="text-3xl text-orange-500" />,
    bgColor: "bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    name: "Eyebrow Lamination",
    description:
      "Treatment to create the illusion of fuller, more defined eyebrows.",
    icon: <FaSmile className="text-3xl text-teal-500" />,
    bgColor: "bg-teal-100",
    textColor: "text-teal-700",
  },
  {
    name: "Eyebrow Pencils or Powders",
    description: "Tools to help you fill and define your eyebrows.",
    icon: <FaBrush className="text-3xl text-blue-500" />,
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
];

const eyelashesServices = [
  {
    name: "Eyelash Extensions",
    description: "Extensions to add length and volume to your lashes.",
    icon: <FaFeather className="text-black-500 text-3xl" />,
    bgColor: "bg-black-100",
    textColor: "text-black-700",
  },
  {
    name: "Eyelash Tinting",
    description: "Tinting to darken and enhance your natural lashes.",
    icon: <FaBrush className="text-3xl text-gray-500" />,
    bgColor: "bg-gray-100",
    textColor: "text-gray-700",
  },
  {
    name: "Eyelash Lift",
    description: "Lifting treatment to curl your natural lashes.",
    icon: <FaMagic className="text-3xl text-pink-500" />,
    bgColor: "bg-pink-100",
    textColor: "text-pink-700",
  },
  {
    name: "Eyelash Glitter",
    description: "Add some sparkle to your lashes with glitter or decals.",
    icon: <FaSmile className="text-3xl text-yellow-500" />,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
  {
    name: "Eyelash Growth Serums",
    description: "Serums to promote the growth of your natural lashes.",
    icon: <FaLeaf className="text-3xl text-green-500" />,
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
];

const EyeCarePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 bg-gradient-to-r from-rose-600 to-blue-600 bg-clip-text text-center text-4xl font-bold text-transparent">
        Eye Care - Enhance Your Natural Beauty
      </h1>
      <button className=" mb-8 flex items-center gap-2 rounded-full bg-blue-500 px-6 py-2 text-white shadow-md transition-all duration-300 hover:bg-blue-600">
        <FaSearch className="text-white" />
        Search Now
      </button>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">Eye Care:</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eyeCareServices.map((service, index) => (
            <div
              key={index}
              className={`transform rounded-lg p-6 shadow-lg transition-transform hover:scale-105 ${service.bgColor}`}
            >
              {service.icon}
              <h3 className={`mb-2 text-xl font-bold ${service.textColor}`}>
                {service.name}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              {service.services && (
                <ul className="mt-2 list-disc pl-5 text-gray-600">
                  {service.services.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">Eyebrows:</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eyebrowsServices.map((service, index) => (
            <div
              key={index}
              className={`transform rounded-lg p-6 shadow-lg transition-transform hover:scale-105 ${service.bgColor}`}
            >
              {service.icon}
              <h3 className={`mb-2 text-xl font-bold ${service.textColor}`}>
                {service.name}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              {service.methods && (
                <ul className="mt-2 list-disc pl-5 text-gray-600">
                  {service.methods.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Eyelashes:
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eyelashesServices.map((service, index) => (
            <div
              key={index}
              className={`transform rounded-lg p-6 shadow-lg transition-transform hover:scale-105 ${service.bgColor}`}
            >
              {service.icon}
              <h3 className={`mb-2 text-xl font-bold ${service.textColor}`}>
                {service.name}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EyeCarePage;
