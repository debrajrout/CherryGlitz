import Image from "next/image";
import React from "react";
import { FcSearch } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";

import { GrFormNext } from "react-icons/gr";
import {
  LuSendHorizonal,
  LuSettings,
  LuLayoutDashboard,
  LuAlignCenter,
  LuAnchor,
  LuAperture,
  LuArrowRightCircle,
  LuAward,
  LuBell,
  LuBookmark,
  LuBox,
  LuBriefcase,
  LuCalendar,
  LuCamera,
  LuCast,
  LuCheckCircle,
  LuClipboard,
  LuClock,
  LuCloudDrizzle,
  LuCode,
} from "react-icons/lu";

const treatments = [
  {
    name: "Hydrafacial",
    icon: <LuSendHorizonal style={{ color: "#FF5733", fontSize: "1.5em" }} />,
    description: "Deep cleansing and hydration for radiant skin.",
  },
  {
    name: "Himalayan Salt Stone Massage",
    icon: <LuSettings style={{ color: "#33FF57", fontSize: "1.5em" }} />,
    description: "Relaxing massage using warm salt stones to soothe muscles.",
  },
  {
    name: "Float Therapy (Sensory Deprivation Tank)",
    icon: <LuLayoutDashboard style={{ color: "#3357FF", fontSize: "1.5em" }} />,
    description: "Stress relief and meditation in a sensory-free environment.",
  },
  {
    name: "Infrared Sauna Sessions",
    icon: <LuAlignCenter style={{ color: "#FF33A1", fontSize: "1.5em" }} />,
    description: "Detoxify and rejuvenate with infrared heat therapy.",
  },
  {
    name: "Body Wraps",
    icon: <LuAnchor style={{ color: "#FFAA33", fontSize: "1.5em" }} />,
    description: "Skin tightening and hydration treatment.",
  },
  {
    name: "Body Scrubs",
    icon: <LuAperture style={{ color: "#FF33F6", fontSize: "1.5em" }} />,
    description: "Exfoliate and smooth your skin with invigorating scrubs.",
  },
  {
    name: "Cellulite Treatments",
    icon: (
      <LuArrowRightCircle style={{ color: "#33FFC5", fontSize: "1.5em" }} />
    ),
    description: "Target and reduce the appearance of cellulite.",
  },
  {
    name: "Exfoliation Treatments",
    icon: <LuAward style={{ color: "#8D33FF", fontSize: "1.5em" }} />,
    description: "Remove dead skin cells for a fresh complexion.",
  },
  {
    name: "Body Contouring Treatments",
    icon: <LuBell style={{ color: "#FF5733", fontSize: "1.5em" }} />,
    description: "Non-invasive body shaping and slimming.",
  },
  {
    name: "Chemical Peels",
    icon: <LuBookmark style={{ color: "#33FF57", fontSize: "1.5em" }} />,
    description: "Skin resurfacing to treat wrinkles and pigmentation.",
  },
  {
    name: "Microdermabrasion",
    icon: <LuBox style={{ color: "#3357FF", fontSize: "1.5em" }} />,
    description: "Gently exfoliate and renew skin texture.",
  },
  {
    name: "Oxygen Facials",
    icon: <LuBriefcase style={{ color: "#FF33A1", fontSize: "1.5em" }} />,
    description: "Infuse oxygen to refresh and plump the skin.",
  },
  {
    name: "LED Light Therapy",
    icon: <LuCalendar style={{ color: "#FFAA33", fontSize: "1.5em" }} />,
    description: "Light therapy for acne, aging, and inflammation.",
  },
  {
    name: "Cryotherapy",
    icon: <LuCamera style={{ color: "#FF33F6", fontSize: "1.5em" }} />,
    description: "Cold treatment to reduce pain and inflammation.",
  },
  {
    name: "Vichy Shower",
    icon: <LuCast style={{ color: "#33FFC5", fontSize: "1.5em" }} />,
    description: "Hydrotherapy treatment under a rain-like shower.",
  },
  {
    name: "Ayurvedic Spa Treatments",
    icon: <LuCheckCircle style={{ color: "#8D33FF", fontSize: "1.5em" }} />,
    description: "Traditional Indian treatments for balance and wellness.",
  },
  {
    name: "Hydrotherapy",
    icon: <LuClipboard style={{ color: "#FF5733", fontSize: "1.5em" }} />,
    description: "Water-based treatments for healing and relaxation.",
  },
  {
    name: "Steam Rooms",
    icon: <LuClock style={{ color: "#33FF57", fontSize: "1.5em" }} />,
    description: "Relax and detoxify in a steam-filled room.",
  },
  {
    name: "Ice Baths",
    icon: <LuCloudDrizzle style={{ color: "#3357FF", fontSize: "1.5em" }} />,
    description: "Cold immersion to reduce muscle soreness.",
  },
  {
    name: "Herbal Wraps",
    icon: <LuCode style={{ color: "#FF33A1", fontSize: "1.5em" }} />,
    description: "Detox and nourish the skin with herbal-infused wraps.",
  },
];

const TreatmentItem = ({ name, icon, description }) => {
  return (
    <div className="flex flex-col items-start rounded-lg bg-white/80 p-4 text-black shadow-md shadow-black/30 ring-1 ring-sky-400/40">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="font-semibold">{name}</span>
      </div>
      <p className="mt-1 text-sm">{description}</p>
    </div>
  );
};

const TreatmentsGrid = () => {
  return (
    <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {treatments.map((treatment, index) => (
        <TreatmentItem
          key={index}
          name={treatment.name}
          icon={treatment.icon}
          description={treatment.description}
        />
      ))}
    </div>
  );
};

const TreatmentItem2 = ({ imageUrl, name, description }) => {
  return (
    <div className="mb-2 flex h-[120px] flex-row items-center justify-between gap-3 overflow-hidden rounded-sm bg-blue-400/30 p-2">
      <div className="-ml-10 w-2/6">
        <Image
          src={imageUrl}
          width={1000}
          height={667}
          alt=""
          className="rounded-full shadow-md shadow-black/40"
        />
      </div>
      <div className="flex w-4/6 flex-col">
        <div className="flex flex-row justify-between">
          <span className="text-xl font-medium text-green-500">{name}</span>
          <span className="text-xs font-medium">. By- CherryGlitz</span>
        </div>
        <span className="w-4/5 text-xs font-normal">{description}</span>
        <div className="mt-1 flex h-6 w-[110px] flex-row items-center justify-between rounded-full px-2 shadow-sm shadow-black/40 ring-1 ring-black/30">
          <span className="mb-[2px] text-base font-semibold text-red-500">
            visit now
          </span>
          <GrFormNext />
        </div>
      </div>
    </div>
  );
};

export default function page() {
  const treatments = [
    {
      imageUrl: "/spa/spp1.jpg",
      name: "Hydrafacial",
      description: "Deep cleansing and hydration for radiant skin.",
    },
    {
      imageUrl: "/spa/spp2.jpeg",
      name: "Himalayan Salt Stone Massage",
      description: "Relaxing massage using warm salt stones to soothe muscles.",
    },
    {
      imageUrl: "/spa/spp3.avif",
      name: "Float Therapy",
      description:
        "Stress relief and meditation in a sensory-free environment.",
    },
  ];

  return (
    <main className="flex w-full flex-col items-center ">
      <div className="mt-4 flex h-16 w-[95%] flex-row items-center gap-2 rounded-full bg-white  px-3 py-2 shadow-md shadow-black/20 ring-1 ring-black/20 hover:ring-1 hover:ring-rose-500/50">
        <div className="flex h-11 w-11 items-center justify-center rounded-full  p-1">
          <FcSearch className="h-full w-full" />
        </div>
        <div className="flex h-full w-full flex-col ">
          <span className="text-lg font-medium text-black/80">
            Best spa near you
          </span>
          <div className="flex flex-row items-center text-sm font-semibold text-black/50">
            <span> Hydrafacial</span>
            <LuDot className=" text-black" />
            <span>Himalayan</span>
            <LuDot className=" text-black" />
            <span>Cellulite</span>
            <LuDot className=" text-black" />
            <span>Exfoliation</span>
          </div>
        </div>
      </div>

      <div className="mb-2 mt-2 w-full">
        <Image
          src="/spa/spa1.png"
          width={1920}
          height={1080}
          alt=""
          className="shadow-md shadow-black/20"
        />
      </div>
      <div className="mt-2 grid w-full grid-cols-1 gap-4">
        {treatments.map((treatment, index) => (
          <TreatmentItem2
            key={index}
            imageUrl={treatment.imageUrl}
            name={treatment.name}
            description={treatment.description}
          />
        ))}
      </div>

      <div className="flex w-full flex-col gap-2 bg-blue-950/25 p-2 ">
        <div className="overflow-hidden rounded-t-2xl shadow-md shadow-black/30 ">
          <Image
            src="/spa/spa4.png"
            alt=""
            width={1181}
            height={945}
            className=""
          />
        </div>
        <div className="container mx-auto p-4">
          <h2 className="mb-4 text-2xl font-bold">Our Spa Treatments</h2>
          <TreatmentsGrid />
        </div>
      </div>
    </main>
  );
}
