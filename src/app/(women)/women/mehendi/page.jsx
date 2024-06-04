import Image from "next/image";
import React from "react";

import {
  FaHandHoldingHeart,
  FaLeaf,
  FaPaintBrush,
  FaPalette,
  FaSmile,
  FaStar,
  FaTint,
  FaGem,
  FaFeather,
  FaMagic,
} from "react-icons/fa";

const mehendiTypes = [
  {
    name: "Traditional Indian",
    description:
      "Intricate patterns inspired by Indian culture and traditions.",
    icon: (
      <FaHandHoldingHeart className="mx-auto mb-4 text-4xl text-pink-500" />
    ),
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
  {
    name: "Arabic",
    description:
      "Elegant and flowing designs with bold outlines and floral motifs.",
    icon: <FaLeaf className="mx-auto mb-4 text-4xl text-green-500" />,
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },

  {
    name: "Moroccan",
    description:
      "Geometric patterns and bold shapes influenced by Moroccan culture.",
    icon: <FaPalette className="mx-auto mb-4 text-4xl text-yellow-500" />,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
  {
    name: "Indo-Arabic",
    description:
      "Fusion of Indian and Arabic styles featuring bold motifs and delicate details.",
    icon: <FaSmile className="mx-auto mb-4 text-4xl text-purple-500" />,
    bgColor: "bg-purple-100",
    textColor: "text-purple-700",
  },
  {
    name: "Bridal",
    description:
      "Elaborate designs specifically created for brides, often covering the entire hand and forearm.",
    icon: <FaStar className="mx-auto mb-4 text-4xl text-pink-500" />,
    bgColor: "bg-pink-100",
    textColor: "text-pink-700",
  },
  {
    name: "Rajasthani",
    description:
      "Traditional designs from Rajasthan characterized by intricate details and peacock motifs.",
    icon: <FaTint className="mx-auto mb-4 text-4xl text-red-500" />,
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
  {
    name: "Floral",
    description:
      "Designs inspired by flowers and nature, featuring delicate petals and vine patterns.",
    icon: <FaGem className="mx-auto mb-4 text-4xl text-green-500" />,
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    name: "Mandala",
    description:
      "Circular patterns symbolizing harmony and balance, often featuring intricate details.",
    icon: <FaFeather className="mx-auto mb-4 text-4xl text-blue-500" />,
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    name: "Glitter",
    description:
      "Mehendi designs embellished with glitter for added sparkle and glamour.",
    icon: <FaMagic className="mx-auto mb-4 text-4xl text-yellow-500" />,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
  {
    name: "Pakistani",
    description:
      "Intricate designs with elements of both Indian and Arabic styles.",
    icon: <FaPaintBrush className="mx-auto mb-4 text-4xl text-blue-500" />,
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
];

const MehendiPage = () => {
  return (
    <div className="container flex flex-col items-center gap-3 py-12 ">
      <h1 className="mb-8 bg-gradient-to-r from-rose-600 to-blue-600 bg-clip-text text-center text-4xl font-bold text-transparent">
        Mehendi - A Timeless Art Form
      </h1>
      <div className="grid h-52 w-[95%] grid-cols-3 grid-rows-2 gap-0 rounded-xl p-4 ring-1 ring-red-500">
        <div className="relative   flex flex-col items-center justify-center overflow-hidden  p-1">
          <div className="z-10 p-1">
            <Image
              src="/mehendi/m4.png"
              alt=""
              className="w-16"
              width={500}
              height={500}
            />
          </div>
          <span className="z-10">Traditional</span>
          <div className="absolute right-2 top-2 h-10 w-10 rounded-full bg-rose-400/50"></div>
        </div>
        {/* Column 2, Row 1 */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden   border-l-2 border-r-2  border-red-500 p-1 ">
          {" "}
          <div className="z-10 p-1">
            <Image
              src="/mehendi/m5.png"
              alt=""
              className="w-16"
              width={500}
              height={500}
            />
          </div>
          <span className="">Arabic</span>
          <div className="absolute bottom-4 left-3 h-10 w-10 rounded-full bg-rose-400/50"></div>
        </div>
        {/* Column 3, Row 1 */}
        <div className=" relative flex flex-col items-center justify-center overflow-hidden   p-1  ">
          {" "}
          <div className="z-10 p-1">
            <Image
              src="/mehendi/m6.png"
              alt=""
              className="w-16"
              width={500}
              height={500}
            />
          </div>
          <span className="">Floral</span>
          <div className="absolute  h-10 w-10 rounded-full bg-rose-400/50"></div>
        </div>
        {/* Column 1, Row 2 */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden  border-t-2  border-red-500  p-1  ">
          {" "}
          <div className="z-10 p-1">
            <Image
              src="/mehendi/m1.png"
              alt=""
              className="w-16"
              width={500}
              height={500}
            />
          </div>
          <span className="">Moroccan</span>
          <div className="absolute right-2 top-2 h-10 w-10 rounded-full bg-rose-400/50"></div>
        </div>
        {/* Column 2, Row 2 */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden  border-l-2 border-r-2 border-t-2  border-red-500 p-1 ">
          {" "}
          <div className="z-10 p-1">
            <Image
              src="/mehendi/m2.png"
              alt=""
              className="w-16"
              width={500}
              height={500}
            />
          </div>
          <span className="-mt-6 ">Rajasthan</span>
          <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-rose-400/50"></div>
        </div>
        {/* Column 3, Row 2 */}
        <div className="relative flex flex-col items-center  justify-center overflow-hidden  border-t-2  border-red-500 p-1 ">
          {" "}
          <div className="z-10 w-12">
            <Image
              src="/mehendi/m3.png"
              alt=""
              className="w-14"
              width={500}
              height={500}
            />
          </div>
          <span className="z-10 -mt-2">Mandala</span>
          <div className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-rose-400/50"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mehendiTypes.map((type, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 shadow-md shadow-black/30 ${type.bgColor}`}
          >
            {type.icon}
            <h2 className={`mb-2 text-xl font-bold ${type.textColor}`}>
              {type.name}
            </h2>
            <p className="text-gray-600">{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MehendiPage;
