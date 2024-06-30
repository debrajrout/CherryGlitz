import Image from "next/image";
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

const makeupServices1 = [
  {
    name: "Everyday Makeup",
    description: "Subtle and natural makeup for everyday wear.",
    icon: <FaSmile className="text-3xl text-pink-500" />,
    imageSrc: "/makeup/m1.png",
  },
  {
    name: "Glam Makeup",
    description: "Bold and glamorous look for special occasions.",
    icon: <FaGem className="text-3xl text-pink-500" />,
    imageSrc: "/makeup/m2.png",
  },
  {
    name: "Bridal Makeup",
    description: "Elegant and long-lasting makeup for your big day.",
    icon: <FaHeart className="text-3xl text-pink-500" />,
    imageSrc: "/makeup/m3.png",
  },
  {
    name: "Evening Makeup",
    description: "Perfect for nights out and formal events.",
    icon: <FaMoon className="text-3xl text-pink-500" />,
    imageSrc: "/makeup/m4.png",
  },
];

const makeupServices = [
  {
    name: "Everyday Makeup",
    description: "Subtle and natural makeup for everyday wear.",
    icon: <FaSmile className="text-3xl text-pink-500" />,
  },
  {
    name: "Glam Makeup",
    description: "Bold and glamorous look for special occasions.",
    icon: <FaGem className="text-3xl text-pink-500" />,
  },
  {
    name: "Bridal Makeup",
    description: "Elegant and long-lasting makeup for your big day.",
    icon: <FaHeart className="text-3xl text-pink-500" />,
  },
  {
    name: "Evening Makeup",
    description: "Perfect for nights out and formal events.",
    icon: <FaMoon className="text-3xl text-pink-500" />,
  },
  {
    name: "Prom Makeup",
    description: "Stand out at your prom with a unique makeup look.",
    icon: <FaTheaterMasks className="text-3xl text-pink-500" />,
  },
  {
    name: "Editorial Makeup",
    description: "Creative and artistic makeup for photoshoots.",
    icon: <FaPaintBrush className="text-3xl text-pink-500" />,
  },
  {
    name: "Special Effects Makeup (SFX)",
    description: "Transform into characters with SFX makeup.",
    icon: <FaPalette className="text-3xl text-pink-500" />,
  },
  {
    name: "Airbrush Makeup",
    description: "Flawless and lightweight airbrush application.",
    icon: <FaPaintRoller className="text-3xl text-pink-500" />,
  },
  {
    name: "Mature Skin Makeup",
    description: "Enhancing natural beauty for mature skin.",
    icon: <FaLeaf className="text-3xl text-pink-500" />,
  },
  {
    name: "Men's Makeup",
    description: "Natural and polished looks for men.",
    icon: <FaThumbsUp className="text-3xl text-pink-500" />,
  },
  {
    name: "Natural Makeup Look",
    description: "Minimalist makeup for a fresh-faced look.",
    icon: <FaLeaf className="text-3xl text-pink-500" />,
  },
  {
    name: "Dewy Skin Makeup",
    description: "Achieve a glowing, dewy skin finish.",
    icon: <FaTint className="text-3xl text-pink-500" />,
  },
  {
    name: "Bold Lip Colors",
    description: "Statement lips with bold, vibrant colors.",
    icon: <FaGrinBeam className="text-3xl text-pink-500" />,
  },
  {
    name: "Smoky Eye Makeup",
    description: "Dramatic and smoldering smoky eyes.",
    icon: <FaEye className="text-3xl text-pink-500" />,
  },
  {
    name: "Graphic Eyeliner",
    description: "Creative and bold eyeliner designs.",
    icon: <FaStar className="text-3xl text-pink-500" />,
  },
  {
    name: "Feathered Brows",
    description: "Soft and natural-looking feathered brows.",
    icon: <FaFire className="text-3xl text-pink-500" />,
  },
  {
    name: "Colorful Eyeshadow Looks",
    description: "Vibrant and colorful eyeshadow styles.",
    icon: <FaEyeDropper className="text-3xl text-pink-500" />,
  },
  {
    name: "Glossy Lips",
    description: "High-shine and luscious glossy lips.",
    icon: <FaHeartbeat className="text-3xl text-pink-500" />,
  },
  {
    name: "Monochromatic Makeup",
    description: "Single color makeup looks for a cohesive style.",
    icon: <FaTrophy className="text-3xl text-pink-500" />,
  },
  {
    name: "Retro/Vintage Makeup",
    description: "Classic makeup styles from past decades.",
    icon: <FaGlobe className="text-3xl text-pink-500" />,
  },
];

const Layout1 = ({ service }) => (
  <div className="flex transform flex-col items-center rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
    <div className="mb-4 text-pink-500">{service.icon}</div>
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
    <div className="mb-4 text-pink-500">{service.icon}</div>
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
    <div className="mb-4 text-pink-500">{service.icon}</div>
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
    <div className=" ">

      <div className="bg-indigo-600 px-4 py-2 text-white">
        <p className="text-center text-sm font-medium">
          Looking for best tattoo artists?
          <a href="#" className="inline-block underline ml-2 text-xs">Check out near you</a>
        </p>
      </div>
      <section
        className="relative w-full h-[20rem]  bg-[url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        >

        </div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl px-4 text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Exclusive Radiant Makeup

              <strong className="block text-2xl font-extrabold text-rose-500"> With Cherry Glitz </strong>
            </h1>

            <p className="mt-4 px-4 max-w-lg text-white sm:text-xl/relaxed">
              Transform your look with our exclusive makeup services
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Explore more
              </a>


            </div>
          </div>
        </div>
      </section>




      <div className="flex h-[260px] w-full flex-col mt-3 px-4">
        <span className="mb-4 text-xl font-medium text-blue-500">
          Explore makeup with us
        </span>
        <div className="flex w-full flex-row gap-4 overflow-x-auto">
          {makeupServices1.map((service, index) => (
            <div
              key={index}
              className="flex w-1/3 flex-col items-center gap-2 rounded-lg  p-1 shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-28 w-28  rounded-full">
                <Image
                  src={service.imageSrc}
                  alt={service.name}
                  className="rounded-full"
                  width={112}
                  height={112}
                />
              </div>

              <span className="text-center text-base font-semibold text-gray-800">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 mb-4 gap-6 overflow-x-auto sm:grid-cols-2 px-7 lg:grid-cols-3">
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
