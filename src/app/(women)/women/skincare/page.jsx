import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SkinCareTreatmentsPage = () => {
  const treatments = [
    {
      name: "Microdermabrasion",
      description:
        "A non-invasive exfoliating treatment that removes dead skin cells and improves skin texture.",
      image: "microdermabrasion.jpg",
    },
    {
      name: "Chemical Peel",
      description:
        "A treatment that uses a solution to remove the outer layers of the skin, revealing smoother, brighter skin.",
      image: "chemical-peel.jpg",
    },
    {
      name: "Microneedling",
      description:
        "A minimally invasive treatment that uses tiny needles to stimulate collagen production and improve skin texture.",
      image: "microneedling.jpg",
    },
    {
      name: "Oxygen Facial",
      description:
        "A treatment that uses oxygen to improve skin texture, reduce fine lines and wrinkles, and enhance skin tone.",
      image: "oxygen-facial.jpg",
    },
    {
      name: "LED Light Therapy",
      description:
        "A non-invasive treatment that uses different wavelengths of light to target various skin concerns such as acne, fine lines, and hyperpigmentation.",
      image: "led-light-therapy.jpg",
    },
    {
      name: "Galvanic Facial",
      description:
        "A treatment that uses a galvanic current to stimulate the skin and promote blood flow, improving skin texture and reducing fine lines and wrinkles.",
      image: "galvanic-facial.jpg",
    },
    {
      name: "High-Frequency Facial",
      description:
        "A treatment that uses high-frequency energy to stimulate the skin and promote collagen production, improving skin texture and reducing fine lines and wrinkles.",
      image: "high-frequency-facial.jpg",
    },
    {
      name: "Radiofrequency Skin Tightening",
      description:
        "A minimally invasive treatment that uses radiofrequency energy to stimulate collagen production and tighten the skin, improving skin texture and reducing fine lines and wrinkles.",
      image: "radiofrequency-skin-tightening.jpg",
    },
    {
      name: "Ultrasonic Facial",
      description:
        "A treatment that uses ultrasonic waves to deep clean the skin and promote collagen production, improving skin texture and reducing fine lines and wrinkles.",
      image: "ultrasonic-facial.jpg",
    },
    {
      name: "Cryotherapy Facial",
      description:
        "A treatment that uses liquid nitrogen to freeze and remove dead skin cells, improving skin texture and reducing fine lines and wrinkles.",
      image: "cryotherapy-facial.jpg",
    },
    {
      name: "Vampire Facial (PRP Therapy)",
      description:
        "A treatment that uses platelet-rich plasma (PRP) to stimulate collagen production and improve skin texture, reducing fine lines and wrinkles.",
      image: "vampire-facial.jpg",
    },
    {
      name: "Hydrafacial",
      description:
        "A treatment that uses a patented technology to cleanse, exfoliate, and hydrate the skin, improving skin texture and reducing fine lines and wrinkles.",
      image: "hydrafacial.jpg",
    },
    {
      name: "Gold Facial",
      description:
        "A treatment that uses gold particles to stimulate collagen production and improve skin texture, reducing fine lines and wrinkles.",
      image: "gold-facial.jpg",
    },
    {
      name: "Platinum Facial",
      description:
        "A treatment that uses platinum particles to stimulate collagen production and improve skin texture, reducing fine lines and wrinkles.",
      image: "platinum-facial.jpg",
    },
    {
      name: "Diamond Facial",
      description:
        "A treatment that uses diamond particles to exfoliate the skin and improve skin texture, reducing fine lines and wrinkles.",
      image: "diamond-facial.jpg",
    },
    {
      name: "Pearl Facial",
      description:
        "A treatment that uses pearl particles to exfoliate the skin and improve skin texture, reducing fine lines and wrinkles.",
      image: "pearl-facial.jpg",
    },
    {
      name: "Charcoal Facial",
      description:
        "A treatment that uses charcoal particles to deep clean the skin and improve skin texture, reducing fine lines and wrinkles.",
      image: "charcoal-facial.jpg",
    },
    {
      name: "Aromatherapy Facial",
      description:
        "A treatment that uses essential oils to promote relaxation and improve skin texture, reducing fine lines and wrinkles.",
      image: "aromatherapy-facial.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Skin Care Treatments
        </h1>
        <p className="text-lg text-gray-600">
          Improve the appearance and health of your skin with our range of
          treatments
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="transform rounded-lg p-6 shadow-md shadow-black/30 transition-transform duration-300 hover:scale-105"
          >
            {/* <Image
              src={treatment.image}
              alt={treatment.name}
              w
              className="w-full rounded-t-lg"
            /> */}
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              {treatment.name}
            </h2>
            <p className="text-gray-600">{treatment.description}</p>
            <button className="mt-4 w-full rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-900">
              Search near you
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinCareTreatmentsPage;
