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

export const metadata = {
  title: "Massage",
}

const massages = [
  {
    name: "Swedish Massage",
    icon: <LuSendHorizonal style={{ color: "#FF5733", fontSize: "1.5em" }} />,
  },
  {
    name: "Deep Tissue Massage",
    icon: <LuSettings style={{ color: "#33FF57", fontSize: "1.5em" }} />,
  },
  {
    name: "Thai Massage",
    icon: <LuLayoutDashboard style={{ color: "#3357FF", fontSize: "1.5em" }} />,
  },
  {
    name: "Shiatsu Massage",
    icon: <LuAlignCenter style={{ color: "#FF33A1", fontSize: "1.5em" }} />,
  },
  {
    name: "Sports Massage",
    icon: <LuAnchor style={{ color: "#FFAA33", fontSize: "1.5em" }} />,
  },
  {
    name: "Aromatherapy Massage",
    icon: <LuAperture style={{ color: "#FF33F6", fontSize: "1.5em" }} />,
  },
  {
    name: "Hot Stone Massage",
    icon: (
      <LuArrowRightCircle style={{ color: "#33FFC5", fontSize: "1.5em" }} />
    ),
  },
  {
    name: "Reflexology",
    icon: <LuAward style={{ color: "#8D33FF", fontSize: "1.5em" }} />,
  },
  {
    name: "Prenatal Massage",
    icon: <LuBell style={{ color: "#FF5733", fontSize: "1.5em" }} />,
  },
  {
    name: "Lymphatic Drainage Massage",
    icon: <LuBookmark style={{ color: "#33FF57", fontSize: "1.5em" }} />,
  },
  {
    name: "Craniosacral Therapy",
    icon: <LuBox style={{ color: "#3357FF", fontSize: "1.5em" }} />,
  },
  {
    name: "Trigger Point Therapy",
    icon: <LuBriefcase style={{ color: "#FF33A1", fontSize: "1.5em" }} />,
  },
  {
    name: "Myofascial Release",
    icon: <LuCalendar style={{ color: "#FFAA33", fontSize: "1.5em" }} />,
  },
  {
    name: "Ayurvedic Massage",
    icon: <LuCamera style={{ color: "#FF33F6", fontSize: "1.5em" }} />,
  },
  {
    name: "Acupressure",
    icon: <LuCast style={{ color: "#33FFC5", fontSize: "1.5em" }} />,
  },
  {
    name: "Reiki Healing",
    icon: <LuCheckCircle style={{ color: "#8D33FF", fontSize: "1.5em" }} />,
  },
  {
    name: "Balinese Massage",
    icon: <LuClipboard style={{ color: "#FF5733", fontSize: "1.5em" }} />,
  },
  {
    name: "Hawaiian Lomi Lomi Massage",
    icon: <LuClock style={{ color: "#33FF57", fontSize: "1.5em" }} />,
  },
  {
    name: "Chair Massage",
    icon: <LuCloudDrizzle style={{ color: "#3357FF", fontSize: "1.5em" }} />,
  },
  {
    name: "Couple's Massage",
    icon: <LuCode style={{ color: "#FF33A1", fontSize: "1.5em" }} />,
  },
];

const MassageItem = ({ name, icon }) => {
  return (
    <div className="flex h-[52px] w-[185px] flex-row items-center justify-between gap-2 rounded-full bg-white/80 p-3   text-black shadow-md shadow-black/30 ring-1 ring-sky-400/40">
      <span className="mb-1.5 text-sm font-normal">{name}</span> {icon}
    </div>
  );
};

export default function page() {
  return (
    <main className="flex w-full flex-col gap-5 items-center ">
      <div className="mt-4 flex h-16 w-[95%] flex-row items-center gap-2 rounded-full bg-white  px-3 py-2 shadow-md shadow-black/20 ring-1 ring-black/20 hover:ring-1 hover:ring-rose-500/50">
        <div className="flex h-11 w-11 items-center justify-center rounded-full  p-1">
          <FcSearch className="h-full w-full" />
        </div>
        <div className="flex h-full w-full flex-col ">
          <span className="text-lg font-medium text-black/80">
            Best massage near you
          </span>
          <div className="flex flex-row items-center text-sm font-semibold text-black/50">
            <span>Deep</span>
            <LuDot className=" text-black" />
            <span>Thai</span>
            <LuDot className=" text-black" />
            <span>Shiatsu</span>
            <LuDot className=" text-black" />
            <span>Sports</span>
          </div>
        </div>
      </div>

      <div className="mb-2 mt-2 w-full">
        <Image
          src="/spa/spa2.png"
          width={1920}
          height={1080}
          alt=""
          className="shadow-md shadow-black/20"
        />
      </div>
      <div className="mb-2 flex h-[117px] flex-row items-center  justify-between gap-3 overflow-hidden rounded-sm bg-rose-400/30   p-2">
        <div className="-ml-10  w-2/6 ">
          <Image
            src="/massage/swedes.jpeg"
            width={1000}
            height={667}
            alt=""
            className="rounded-full shadow-md shadow-black/40"
          />
        </div>
        <div className="flex w-4/6 flex-col">
          {" "}
          <div className="flex  flex-row justify-between ">
            <span className=" text-xl font-medium text-green-500">
              Swedish Massage{" "}
            </span>
            <span className="text-xs font-bold">. By- CherryGlitz</span>
          </div>
          <span className="w-4/5 text-xs font-normal">
            Swedish massage is a classic massage technique aimed at promoting
            relaxation and improving circulation.
          </span>
          <div className="mt-1 flex h-6 w-[110px] flex-row items-center  justify-between rounded-full px-2 shadow-sm shadow-black/40 ring-1 ring-black/30">
            <span className="mb-[2px] text-base font-semibold text-red-500">
              visite now
            </span>
            <GrFormNext />
          </div>
        </div>
      </div>

      <div className="mb-2 flex h-[117px] flex-row items-center  justify-between gap-3 overflow-hidden rounded-sm bg-black/15   p-2">
        <div className="-ml-10  w-2/6 ">
          <Image
            src="/massage/deep.jpg"
            width={1000}
            height={667}
            alt=""
            className="rounded-full shadow-md shadow-black/40"
          />
        </div>
        <div className="flex w-4/6 flex-col">
          {" "}
          <div className="flex  flex-row justify-between ">
            <span className=" text-xl font-medium text-green-500">
              Deep Tissue
            </span>
            <span className="text-xs font-bold">. By- CherryGlitz</span>
          </div>
          <span className="w-4/5 text-xs font-normal">
            Deep tissue massage targets the deeper layers of muscles and
            connective tissues.
          </span>
          <div className="mt-1 flex h-6 w-[110px] flex-row items-center  justify-between rounded-full px-2 shadow-sm shadow-black/40 ring-1 ring-black/30">
            <span className="mb-[2px] text-base font-semibold text-red-500">
              visite now
            </span>
            <GrFormNext />
          </div>
        </div>
      </div>

      <div className="mb-2 flex h-[117px] flex-row items-center  justify-between gap-3 overflow-hidden rounded-sm bg-black/15   p-2">
        <div className="-ml-10  w-2/6 ">
          <Image
            src="/massage/thai.jpeg"
            width={1000}
            height={667}
            alt=""
            className="rounded-full shadow-md shadow-black/40"
          />
        </div>
        <div className="flex w-4/6 flex-col">
          {" "}
          <div className="flex  flex-row justify-between ">
            <span className=" text-xl font-medium text-green-500">
              Thai Massage
            </span>
            <span className="text-xs font-bold text-black">. By- CherryGlitz</span>
          </div>
          <span className="w-4/5 text-xs font-normal">
            Thai massage combines acupressure, assisted yoga postures, and deep
            stretching.
          </span>
          <div className="mt-1 flex h-6 w-[110px] flex-row items-center  justify-between rounded-full px-2 shadow-sm shadow-black/40 ring-1 ring-black/30">
            <span className="mb-[2px] text-base font-semibold text-red-500">
              visite now
            </span>
            <GrFormNext />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 bg-blue-950/25 p-2 ">
        <div className="overflow-hidden rounded-t-2xl shadow-md shadow-black/30 ">
          <Image
            src="/spa/spa3.png"
            alt=""
            width={1181}
            height={945}
            className=""
          />
        </div>
        <div className="mt-2 grid  w-full grid-cols-2 items-center justify-items-center gap-4  ">
          {massages.map((massage, index) => (
            <MassageItem key={index} name={massage.name} icon={massage.icon} />
          ))}
        </div>
      </div>
    </main>
  );
}
