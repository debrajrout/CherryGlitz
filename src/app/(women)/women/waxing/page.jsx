import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const waxingServices = [
  {
    name: "Brazilian Wax",
    description: "Removes hair from the pubic area, leaving a smooth finish.",
    imageSrc: "/waxing/brazilian_wax.jpg",
  },
  {
    name: "Face Wax",
    description:
      "Targets facial hair including upper lip, chin, and cheeks for a clean look.",
    imageSrc: "/waxing/face_wax.jpg",
  },
  {
    name: "Hollywood Wax",
    description: "Similar to Brazilian wax but removes all pubic hair.",
    imageSrc: "/waxing/hollywood_wax.jpg",
  },
  {
    name: "Bikini Wax",
    description:
      "Removes hair along the bikini line for a tidy appearance in swimwear.",
    imageSrc: "/waxing/bikini_wax.jpg",
  },
  {
    name: "Eyebrow Wax",
    description:
      "Shapes and tidies the eyebrows for a defined and polished look.",
    imageSrc: "/waxing/eyebrow_wax.jpg",
  },
  {
    name: "Underarm Wax",
    description:
      "Removes underarm hair for smoother and longer-lasting results than shaving.",
    imageSrc: "/waxing/underarm_wax.jpg",
  },
  {
    name: "Leg Wax",
    description: "Removes hair from the legs for silky smooth skin.",
    imageSrc: "/waxing/leg_wax.jpg",
  },
  {
    name: "Lip Wax",
    description: "Quickly removes unwanted hair from the upper lip area.",
    imageSrc: "/waxing/lip_wax.jpg",
  },
  {
    name: "Chin Wax",
    description:
      "Targets hair on the chin area for a clean and hair-free look.",
    imageSrc: "/waxing/chin_wax.jpg",
  },
  {
    name: "Cheek Wax",
    description:
      "Removes excess hair on the cheeks for a smooth and hair-free appearance.",
    imageSrc: "/waxing/cheek_wax.jpg",
  },
  {
    name: "Arm Wax",
    description: "Removes hair from the arms for a smooth and hairless look.",
    imageSrc: "/waxing/arm_wax.jpg",
  },
  {
    name: "Full Body Wax",
    description:
      "Removes hair from all parts of the body for a completely smooth feel.",
    imageSrc: "/waxing/full_body_wax.jpg",
  },
  {
    name: "Bridal Wax",
    description:
      "Prepares the bride's body for the wedding day, ensuring smooth skin.",
    imageSrc: "/waxing/bridal_wax.jpg",
  },
];

const CircularLayout = ({ service }) => (
  <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md hover:shadow-lg">
    <div className="mb-4 h-36 w-36 overflow-hidden rounded-full">
      <Image
        src={service.imageSrc}
        alt={service.name}
        className="rounded-full"
        width={144}
        height={144}
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

export default function WaxingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-pink-800">Waxing Services</h1>
        <p className="text-lg text-gray-600">
          Discover our range of waxing services for a smooth and hair-free
          experience.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {waxingServices.map((service, index) => (
          <div key={index}>
            <CircularLayout service={service} />
          </div>
        ))}
      </div>
    </div>
  );
}
