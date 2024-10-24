import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const hairGroomingServices = [
  {
    name: "Hairline Cleanup",
    description: "Refine your hairline for a neat and polished look.",
    imageSrc: "/haircuts/hairline_cleanup.jpg",
  },
  {
    name: "Scalp Treatment",
    description: "Nourish and revitalize your scalp for healthier hair growth.",
    imageSrc: "/haircuts/scalp_treatment.jpg",
  },
  {
    name: "Deep Conditioning",
    description:
      "Restore moisture and strength to your hair with a deep conditioning treatment.",
    imageSrc: "/haircuts/deep_conditioning.jpg",
  },
  {
    name: "Scalp Massage",
    description:
      "Relax and stimulate blood flow to your scalp with a soothing massage.",
    imageSrc: "/haircuts/scalp_massage.jpg",
  },
  {
    name: "Hot Oil Treatment",
    description:
      "Intensely hydrate and nourish your hair with a hot oil treatment.",
    imageSrc: "/haircuts/hot_oil_treatment.jpg",
  },
  {
    name: "Hair Coloring",
    description: "Transform your hair color with our expert colorists.",
    imageSrc: "/haircuts/hair_coloring.jpg",
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

export default function HairGroomingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-pink-800">
          Hair Grooming Services
        </h1>
        <p className="text-lg text-gray-600">
          Discover our exclusive hair grooming services
        </p>
      </header>

      <div className="flex h-[260px] w-full flex-col  p-1">
        <span className="mb-4 text-2xl font-medium text-blue-500">
          Explore hair grooming with us
        </span>
        <div className="flex w-full flex-row gap-4 overflow-x-auto">
          {hairGroomingServices.map((service, index) => (
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

      <div className="grid grid-cols-1 gap-6 overflow-x-auto sm:grid-cols-2 lg:grid-cols-3">
        {hairGroomingServices.map((service, index) => (
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
