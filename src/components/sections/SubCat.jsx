import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
  {
    src: "/category/a (1).png",
    name: "Radiant Makeup",
    url: "/women/radiantglow",
  },
  {
    src: "/category/haircutg.png",
    name: "Haircuts styling",
    url: "/women/hairstyle",
  },
  {
    src: "/category/groomg.png",
    name: "Hair Grooming",
    url: "/women/hairtream",
  },
  {
    src: "/category/a (3).png",
    name: "Hair Coloring",
    url: "category/wedding",
  },
  {
    src: "/category/a (4).png",
    name: "Waxing Threading",
    url: "/women/waxing",
  },
  {
    src: "/category/a (5).png",
    name: "SkinCare BodyCare",
    url: "/women/skincare",
  },
  {
    src: "/category/a (6).png",
    name: "Manicure Padicure",
    url: "/women/padicare",
  },
  {
    src: "/category/a (7).png",
    name: "Mehendi BodyArt",
    url: "/women/mehendi",
  },
  {
    src: "/category/a (8).png",
    name: "EyeCare Eyelash",
    url: "/women/faceneye",
  },
];

const additionalImages = [
  {
    src: "/category/a (11).png",
    name: "Haircutting styling",
    url: "/men/haircut",
  },
  {
    src: "/category/a (12).png",
    name: "Hair Grooming",
    url: "/men/hairgroom",
  },
  {
    src: "/category/a (13).png",
    name: "Beard Mustache",
    url: "/men/beard",
  },
  {
    src: "/category/a (14).png",
    name: "Kids Haircut",
    url: "/men/kids",
  },
  {
    src: "/category/a (8).png",
    name: "Manicure Padicure",
    url: "/men/manicure",
  },
  {
    src: "/category/a (9).png",
    name: "SkinCare BodyCare",
    url: "/men/skincare",
  },
  { src: "/category/a (10).png", name: "Waxing Threading", url: "/men/waxing" },
];

const images3 = [
  {
    src: "/category/a (11).png",
    name: "Haircutting styling",
    url: "/category/functions",
  },
  {
    src: "/category/a (12).png",
    name: "Hair Grooming",
    url: "/men/hairgroom",
  },
  {
    src: "/category/a (13).png",
    name: "Beard Mustache",
    url: "/men/beard",
  },
  {
    src: "/category/a (14).png",
    name: "Kids Haircut",
    url: "/men/kids",
  },
  {
    src: "/category/a (8).png",
    name: "Manicure Padicure",
    url: "/men/manicure",
  },
];

export default function SubCat() {
  return (
    <div className="flex h-[210px] flex-row gap-2 px-1 py-1">
      <div className="flex  w-4/5 flex-col gap-4 rounded-lg  px-1 shadow-md shadow-black/50 ring-1 ring-black/50">
        <div className="scrollbar-hide flex flex-row items-center gap-6 overflow-x-auto">
          {images.map(({ src, name, url }, index) => (
            <Link
              href={url}
              key={index}
              className="flex flex-col items-center gap-1 p-1"
            >
              <Image
                src={src}
                alt="category"
                width={100}
                height={100}
                className="object-cover"
              />
              <span className="w-10 text-balance text-center text-xs font-semibold text-black">
                {name}
              </span>
            </Link>
          ))}
        </div>

        <div className="scrollbar-hide flex flex-row items-center gap-6 overflow-x-auto">
          {additionalImages.map(({ src, name, url }, index) => (
            <Link
              href={url}
              key={index}
              className="flex flex-col items-center gap-1 p-1"
            >
              <Image
                src={src}
                alt="category"
                width={100}
                height={100}
                className="object-cover"
              />
              <span className="w-10 text-wrap text-center text-xs font-semibold text-black">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="scrollbar-hide h-full w-1/5 overflow-y-auto rounded-lg p-1 shadow-md shadow-black/50 ring-1 ring-black/50">
        <div className=" flex flex-col items-center gap-4">
          {images3.map(({ src, name, url }, index) => (
            <Link
              href={url}
              key={index}
              className="flex w-11  flex-col items-center gap-1"
            >
              <Image
                src={src}
                alt="category"
                width={80}
                height={80}
                className="object-cover"
              />
              <span className="text-balance text-center text-xs font-semibold text-black">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
