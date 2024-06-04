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

const brideServices = [
  {
    name: "Bridal Makeup",
    description:
      "Enhance your natural beauty with our exquisite bridal makeup.",
    icon: <FaSmile className="text-pink-500" />,
  },
  {
    name: "Hairstyling",
    description: "Elegant hairstyling to complete your bridal look.",
    icon: <FaGem className="text-pink-500" />,
  },
  {
    name: "Bridal Henna",
    description: "Adorn your hands and feet with intricate henna designs.",
    icon: <FaHeart className="text-pink-500" />,
  },
  {
    name: "Bridal Manicure & Pedicure",
    description:
      "Pamper yourself with our luxurious manicure and pedicure services.",
    icon: <FaMoon className="text-pink-500" />,
  },
  {
    name: "Bridal Facial",
    description:
      "Indulge in a rejuvenating facial to achieve a radiant bridal glow.",
    icon: <FaLeaf className="text-pink-500" />,
  },
  {
    name: "Waxing or Threading",
    description: "Get rid of unwanted hair and enjoy silky smooth skin.",
    icon: <FaTint className="text-pink-500" />,
  },
  {
    name: "Body Scrub or Polish",
    description:
      "Revitalize your skin with our invigorating body scrub or polish treatments.",
    icon: <FaStar className="text-pink-500" />,
  },
  {
    name: "Eyebrow Shaping and Tinting",
    description: "Define your brows with expert shaping and tinting services.",
    icon: <FaEyeDropper className="text-pink-500" />,
  },
];

const groomServices = [
  {
    name: "Haircut",
    description: "Get a sharp haircut to complement your wedding day look.",
    icon: <FaTheaterMasks className="text-blue-500" />,
  },
  {
    name: "Beard Trim",
    description:
      "Style your beard to perfection with our professional trimming services.",
    icon: <FaPaintBrush className="text-blue-500" />,
  },
  {
    name: "Facial Treatment for Men",
    description: "Treat your skin to a refreshing facial for a handsome glow.",
    icon: <FaPalette className="text-blue-500" />,
  },
  {
    name: "Manicure",
    description:
      "Keep your hands well-groomed with our expert manicure services.",
    icon: <FaSmile className="text-blue-500" />,
  },
  {
    name: "Pedicure",
    description: "Relax and rejuvenate with a soothing pedicure treatment.",
    icon: <FaHeartbeat className="text-blue-500" />,
  },
  {
    name: "Waxing or Grooming",
    description:
      "Achieve a polished look with our waxing and grooming services.",
    icon: <FaGlobe className="text-blue-500" />,
  },
  {
    name: "Eyebrow Grooming",
    description: "Shape your eyebrows for a clean and refined appearance.",
    icon: <FaThumbsUp className="text-blue-500" />,
  },
];

const bothServices = [
  {
    name: "Couple's Massage",
    description: "Relax and rejuvenate together with our couple’s massage.",
    icon: <FaHeart className="text-purple-500" />,
  },
  {
    name: "Specialized Skincare Treatments",
    description:
      "Indulge in customized skincare treatments for a radiant glow.",
    icon: <FaFire className="text-purple-500" />,
  },
];

const Layout1 = ({ service }) => (
  <div className="flex transform flex-col items-center rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
    <div className="relative mb-4 h-32 w-full overflow-hidden rounded-lg">
      <Image
        src={`/wedding/${service.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
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
        src={`/wedding/${service.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
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
  <div className="flex transform flex-col items-center rounded-lg bg-purple-200 p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
    <div className="relative mb-4 h-32 w-full overflow-hidden rounded-lg">
      <Image
        src={`/wedding/${service.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
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

export default function WeddingHoneymoonPackage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-800">
          Wedding & Honeymoon Package
        </h1>
        <p className="text-lg text-gray-600">
          Get ready for your special day with our exclusive packages
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-pink-800">
          For the Bride:
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brideServices.map((service, index) => (
            <div key={index}>
              {index % 3 === 0 && <Layout1 service={service} />}
              {index % 3 === 1 && <Layout2 service={service} />}
              {index % 3 === 2 && <Layout3 service={service} />}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-blue-800">
          For the Groom:
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groomServices.map((service, index) => (
            <div key={index}>
              {index % 3 === 0 && <Layout1 service={service} />}
              {index % 3 === 1 && <Layout2 service={service} />}
              {index % 3 === 2 && <Layout3 service={service} />}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-purple-800">
          For Both:
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bothServices.map((service, index) => (
            <div key={index}>
              {index % 3 === 0 && <Layout1 service={service} />}
              {index % 3 === 1 && <Layout2 service={service} />}
              {index % 3 === 2 && <Layout3 service={service} />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
