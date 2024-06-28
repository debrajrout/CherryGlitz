import { CardHoverEffectDemo } from "@/components/ManSection/CardBgSEction";


import { HeroHighlightDemo } from "@/components/ManSection/HeroText";
import { TracingBeamDemo } from "@/components/ManSection/LineTraker";
import { MeteorsDemo } from "@/components/ManSection/StyleCard";


import React from "react";

export default function page() {
  return (
    <div className="flex  w-full items-center flex-col gap-1 bg-zinc-900 px-3 py-6">
      <HeroHighlightDemo />
      <TracingBeamDemo />
      <span className="text-blue-400 text-base px-8">Other services</span>
      <CardHoverEffectDemo />
      <span className="text-yellow-400 text-xl  mb-3 px-8 -mt-7 w-full  text-center">Hairstyling Services</span>
      <MeteorsDemo />

    </div>
  );
}
