import Image from "next/image";
import React from "react";

const images1 = [
  "/category/a (1).png",
  "/category/haircutg.png",
  "/category/groomg.png",
  "/category/a (4).png",
  "/category/a (5).png",
  "/category/a (6).png",
  "/category/a (7).png",
  "/category/a (8).png",
  "/category/a (9).png",
  "/category/a (10).png",
];

const name1 = [
  "Radiant Makeup",
  "Haircuts styling",
  "Hair Grooming",
  "Waxing Threading",
  "SkinCare BodyCare",
  "Manicure Padicure",
  "Mehendi BodyArt",
  "EyeCare Eyelash",
];

const name2 = [
  "dskjh jhfds",
  "dsfcx cxczds",
  "dsfd sfvvds",
  "dsfsaw dads",
  "daSA ssfds",
  "dsfd dsss",
  "dsdd fds",
  "dsfs dfxzxzxzs",
  "dsfsdfs hjhgdghfb",
];
const images2 = [
  "/category/a (8).png",
  "/category/a (9).png",
  "/category/a (10).png",
  "/category/a (11).png",
  "/category/a (12).png",
  "/category/a (13).png",
  "/category/a (14).png",
  "/category/a (8).png",
  "/category/a (9).png",
  "/category/a (10).png",
];
export default function SubCat() {
  return (
    <div className="flex flex-col gap-4 px-1">
      <div className="flex flex-row items-center gap-5 overflow-x-auto ">
        {images1.map((image, index) => (
          <div
            key={index}
            className="flex    flex-col items-center   gap-1  p-1"
          >
            <Image
              src={image}
              alt="category"
              width={100}
              height={100}
              className=" object-cover "
            />
            <span className="w-10  text-balance text-center text-xs font-semibold text-black">
              {name1[index]}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-5 overflow-x-auto">
        {images2.map((image, index) => (
          <div key={index} className="flex    flex-col items-center gap-1 p-1">
            <Image
              src={image}
              alt="category"
              width={100}
              height={100}
              className=" object-cover "
            />
            <span className="w-10 text-wrap text-center text-xs font-semibold text-black">
              {name2[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
