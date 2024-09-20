"use client";
import Image from "next/image";
import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";

const spaData = [
  {
    name: "Hydrafacial",
    description: "A rejuvenating facial treatment that deeply cleanses and hydrates the skin.",
    image: "/subcatf/spa/hydrafacial.jpg",
    alt: "Hydrafacial treatment for skin hydration and rejuvenation.",
  },
  {
    name: "Himalayan Salt Stone Massage",
    description: "Massage using heated Himalayan salt stones to relax muscles and improve circulation.",
    image: "/subcatf/spa/himalayansaltstone.jpg",
    alt: "Himalayan Salt Stone Massage for muscle relaxation.",
  },
  {
    name: "Float Therapy (Sensory Deprivation Tank)",
    description: "Experience weightlessness and relaxation in a sensory deprivation tank.",
    image: "/subcatf/spa/flottherapy.jpg",
    alt: "Float Therapy with a sensory deprivation tank for relaxation.",
  },
  {
    name: "Infrared Sauna Sessions",
    description: "Sweat out toxins and improve circulation with infrared heat.",
    image: "/subcatf/spa/infraredsaunas.jpg",
    alt: "Infrared Sauna Sessions for detox and circulation.",
  },
  {
    name: "Body Wraps",
    description: "Detoxifying and nourishing wraps for the entire body.",
    image: "/subcatf/spa/bodywraps.jpg",
    alt: "Body wraps for detoxification and nourishment.",
  },
  {
    name: "Body Scrubs",
    description: "Exfoliating scrubs to remove dead skin and leave the body feeling smooth.",
    image: "/subcatf/spa/bodyscrub.jpg",
    alt: "Body scrubs for exfoliating dead skin.",
  },
  {
    name: "Cellulite Treatments",
    description: "Specialized treatments to reduce the appearance of cellulite.",
    image: "/subcatf/spa/cellulitetreatment.jpg",
    alt: "Cellulite treatments to smooth skin texture.",
  },
  {
    name: "Exfoliation Treatments",
    description: "Gentle exfoliation to remove dead skin and promote cell renewal.",
    image: "/subcatf/spa/exfoliation.jpg",
    alt: "Exfoliation treatments for skin renewal.",
  },
  {
    name: "Body Contouring Treatments",
    description: "Non-invasive treatments designed to sculpt and shape the body.",
    image: "/subcatf/spa/bodywraps.jpg",
    alt: "Body contouring treatments for sculpting and shaping.",
  },
  {
    name: "Chemical Peels",
    description: "Facial treatments that exfoliate and improve skin texture using chemical solutions.",
    image: "/subcatf/spa/chemicalpeel.jpg",
    alt: "Chemical peels to improve skin texture.",
  },
  {
    name: "Microdermabrasion",
    description: "A non-invasive treatment that gently exfoliates the skin to reduce imperfections.",
    image: "/subcatf/spa/microdermabrasion.jpg",
    alt: "Microdermabrasion treatment for exfoliating the skin.",
  },
  {
    name: "Oxygen Facials",
    description: "Facials that use oxygen to rejuvenate and hydrate the skin.",
    image: "/subcatf/spa/oxygenfacials.jpg",
    alt: "Oxygen facial treatment for rejuvenation.",
  },
  {
    name: "LED Light Therapy",
    description: "A non-invasive treatment using LED lights to target various skin concerns.",
    image: "/subcatf/spa/ledlighttherapy.jpg",
    alt: "LED light therapy for targeting skin concerns.",
  },
  {
    name: "Cryotherapy",
    description: "A cold treatment that helps reduce inflammation and promotes recovery.",
    image: "/subcatf/spa/cryotherapy.jpg",
    alt: "Cryotherapy for reducing inflammation and recovery.",
  },
  {
    name: "Vichy Shower",
    description: "A hydrotherapy treatment where warm water is sprayed over the body.",
    image: "/subcatf/spa/vichyshowers.jpg",
    alt: "Vichy shower for hydrotherapy and relaxation.",
  },
  {
    name: "Ayurvedic Spa Treatments",
    description: "Traditional Indian treatments that balance the mind, body, and spirit.",
    image: "/subcatf/spa/ayurvedicspatreatments.jpg",
    alt: "Ayurvedic treatments for holistic wellness.",
  },
  {
    name: "Hydrotherapy",
    description: "Water-based treatments that promote relaxation and healing.",
    image: "/subcatf/spa/hydrotherapy.jpg",
    alt: "Hydrotherapy for relaxation and healing.",
  },
  {
    name: "Steam Rooms",
    description: "Moist heat therapy that helps cleanse the body and relax the muscles.",
    image: "/subcatf/spa/steamrooms.jpg",
    alt: "Steam room therapy for muscle relaxation and detox.",
  },
  {
    name: "Ice Baths",
    description: "Cold immersion therapy that helps reduce inflammation and improve recovery.",
    image: "/subcatf/spa/icebaths.jpg",
    alt: "Ice bath for cold therapy and muscle recovery.",
  },
  {
    name: "Herbal Wraps",
    description: "Body wraps infused with herbal ingredients to nourish and detoxify the skin.",
    image: "/subcatf/spa/herbalwraps.jpg",
    alt: "Herbal wraps for nourishing and detoxifying the skin.",
  },
];

export default function SpaPage() {
  return (
    <div className="p-4 -mt-2">
      <h1 className="text-3xl font-bold text-center mb-4">Spa Center Treatments</h1>
      <div className="grid grid-cols-2 gap-6">
        {spaData.map((spa, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={spa.image}
              alt={spa.alt}
              width={200}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg truncate font-semibold">{spa.name}</h2>
              <p className="text-sm text-gray-600 mb-2 truncate">{spa.description}</p>

              {/* Gender Icons */}
              <div className="flex items-center gap-1 text-gray-500 mb-4">
                <FaMale className="text-blue-500" />
                <FaFemale className="text-pink-500" />
                <span className="text-xs font-bold">Unisex</span>
              </div>

              {/* Explore Now Button */}
              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                Try it now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
