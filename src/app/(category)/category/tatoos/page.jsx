import TabTatooSection from "@/components/special-components/TabTatooSection";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { GiModernCity } from "react-icons/gi";
import { GrBraille } from "react-icons/gr";
export default function page() {
  return (
    <div className=" mt-4 flex  w-full flex-col items-center bg-slate-200 ">
      <div className="relative flex w-[95%] flex-col items-center overflow-hidden  rounded-2xl">
        <Image
          src="/tatoo/tatoonm.png"
          width={1181}
          className="rounded-2xl"
          height={945}
          alt=""
        />
        <div className="absolute bottom-0 h-20 w-full bg-black/70 p-2">
          <div className="flex flex-row  items-center justify-between">
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-white">Cherry Glitz</span>
              <span className="text-sm font-semibold text-orange-500">
                Best Tatoos<span> .Piercing </span>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl p-2 pr-2 ring-1 ring-white/25">
              <span className="text-base font-semibold text-sky-400">
                In your
              </span>
              <GiModernCity className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <TabTatooSection />
      <div className="mt-3 flex h-[133px] w-[95%] flex-row  justify-between rounded-2xl shadow-md shadow-black/20 ring-1 ring-black/30">
        <div className="flex w-2/3 flex-col px-3 py-2   pr-6">
          <span className="text-xl font-semibold text-lime-500">
            Tribal tattoos
          </span>
          <span className="text-sm font-medium text-black/70">
            Way to connect with heritage and foster a sense of pride and unity
          </span>
          <div className="mt-1 h-[1px] w-full bg-black/30">.</div>
          <span className="flex flex-row items-center gap-2 font-medium text-red-500">
            Symbol of <GrBraille />
          </span>
          <span> . fertility . protection . courage </span>
        </div>
        <div className=" h-full w-32 p-[3px]">
          <Image
            src="/tatoo/tatoob1.webp"
            width={986}
            className="rounded-2xl shadow-sm shadow-black/50"
            height={1000}
            alt=""
          />
        </div>
      </div>
      <div className="mt-3 flex h-[133px] w-[95%] flex-row  justify-between rounded-2xl shadow-md shadow-black/20 ring-1 ring-black/30">
        <div className="flex w-2/3 flex-col px-3 py-2   pr-6">
          <span className="text-xl font-semibold text-blue-600">
            Neo traditional style
          </span>
          <span className="text-sm font-medium text-black/70">
            more complex color palettes and more variation in line weight
          </span>
          <div className="mt-1 h-[1px] w-full bg-black/30">.</div>
          <span className="flex flex-row items-center gap-2 font-medium text-gray-600">
            Search for <GrBraille />
          </span>
          <span> . new school . neotraditional</span>
        </div>
        <div className=" h-full w-32 p-[3px]">
          <Image
            src="/tatoo/tatoob2.webp"
            width={986}
            className="rounded-2xl shadow-sm shadow-black/50"
            height={1000}
            alt=""
          />
        </div>
      </div>
      <div className="mt-3 flex h-[133px] w-[95%] flex-row  justify-between rounded-2xl shadow-md shadow-black/20 ring-1 ring-black/30">
        <div className="flex w-2/3 flex-col px-3 py-2   pr-6">
          <span className="text-xl font-semibold text-red-500">
            Japanese tattoos
          </span>
          <span className="text-sm font-medium text-black/70">
            Broadly speaking, tattooing in Japan is generally referred to as
            Irezumi
          </span>
          <div className="mt-1 h-[1px] w-full bg-black/30">.</div>
          <span className="flex flex-row items-center gap-2 font-medium text-green-500">
            Symbol of <GrBraille />
          </span>
          <span className="text-sm"> . Dragon Tattoos . Snake Tattoos </span>
        </div>
        <div className=" h-full w-32 p-[3px]">
          <Image
            src="/tatoo/tatoob3.webp"
            width={986}
            className="rounded-2xl shadow-sm shadow-black/50"
            height={1000}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
