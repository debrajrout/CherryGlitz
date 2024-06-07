import Image from "next/image";
import React from "react";
import { FaArrowRight, FaHandHoldingHeart, FaLeaf } from "react-icons/fa";

const PedicureManicurePage = () => {
  const pedicureTypes = [
    {
      name: "Basic Pedicure",
      description: "A basic pedicure with a relaxing foot soak and nail trim.",
      icon: (
        <FaHandHoldingHeart className="mx-auto mb-4 text-4xl text-green-500" />
      ),
      bgColor: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      name: "French Pedicure",
      description:
        "A classic French pedicure with a white tip and a relaxing foot soak.",
      icon: <FaLeaf className="mx-auto mb-4 text-4xl text-pink-500" />,
      bgColor: "bg-pink-100",
      textColor: "text-pink-700",
    },
    {
      name: "Spa Pedicure",
      description:
        "A luxurious pedicure with a foot massage and exfoliating scrub.",
      icon: (
        <FaHandHoldingHeart className="mx-auto mb-4 text-4xl text-blue-500" />
      ),
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      name: "Paraffin Pedicure",
      description:
        "A moisturizing pedicure with a warm paraffin wax treatment.",
      icon: <FaLeaf className="mx-auto mb-4 text-4xl text-purple-500" />,
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
    },
  ];

  const manicureTypes = [
    {
      name: "Basic Manicure",
      description: "A basic manicure with a nail trim and polish.",
      icon: (
        <FaHandHoldingHeart className="mx-auto mb-4 text-4xl text-orange-500" />
      ),
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
    },
    {
      name: "French Manicure",
      description:
        "A classic French manicure with a white tip and a nail trim.",
      icon: <FaLeaf className="mx-auto mb-4 text-4xl text-yellow-500" />,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
    },
    {
      name: "Gel Manicure",
      description:
        "A long-lasting manicure with a gel polish that cures under UV light.",
      icon: (
        <FaHandHoldingHeart className="mx-auto mb-4 text-4xl text-red-500" />
      ),
      bgColor: "bg-red-100",
      textColor: "text-red-700",
    },
    {
      name: "Shellac Manicure",
      description:
        "A chip-resistant manicure with a gel-like finish that lasts for weeks.",
      icon: <FaLeaf className="mx-auto mb-4 text-4xl text-teal-500" />,
      bgColor: "bg-teal-100",
      textColor: "text-teal-700",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-green-800">
          Pedicure and Manicure Types
        </h1>
        <p className="text-lg text-gray-600">
          Explore our range of pedicure and manicure services
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pedicureTypes.map((type, index) => (
          <div
            key={index}
            className={`transform rounded-lg p-6 shadow-md shadow-black/30 transition-transform duration-300 hover:scale-105 ${type.bgColor}`}
          >
            {type.icon}
            <h2 className={`mb-2 text-xl font-bold ${type.textColor}`}>
              {type.name}
            </h2>
            <p className="text-gray-600">{type.description}</p>
            <button className="mt-4 w-full rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600">
              Find near you
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {manicureTypes.map((type, index) => (
          <div
            key={index}
            className={`transform rounded-lg p-6 shadow-md shadow-black/30 transition-transform duration-300 hover:scale-105 ${type.bgColor}`}
          >
            {type.icon}
            <h2 className={`mb-2 text-xl font-bold ${type.textColor}`}>
              {type.name}
            </h2>
            <p className="text-gray-600">{type.description}</p>
            <button className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
              Find near you
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PedicureManicurePage;
