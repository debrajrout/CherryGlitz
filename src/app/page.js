import Searchbar from "@/components/Searchbar";
import CatagoryHero from "@/components/sections/CatagoryHero";
import Header from "@/components/sections/Header";
import { SparklesPreview } from "@/components/sections/Sprakle";
import Text from "@/components/sections/Text";
import { FlipWordsDemo } from "@/components/special-components/HeroText";
import { LayoutGridDemo } from "@/components/special-components/LayoutSection";
import { MovingBorderDemo } from "@/components/special-components/categoryIcon";
import { MovingBorder } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";

import { assets } from "@/utils/assets";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-black px-3 ">
      <SparklesPreview />
      <Searchbar />
      <Header />
      <CatagoryHero />
      <FlipWordsDemo />
      <LayoutGridDemo />
    </main>
  );
}
