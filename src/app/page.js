import { BeautySection } from "@/components/ButyParlerSection/Parler";

import Searchbar from "@/components/Searchbar";
import { TatooSection } from "@/components/TatooSection/TatooHero";
import FinalCity from "@/components/city/FinalCity";

import Footer from "@/components/footer/Footer";
import CatagoryHero from "@/components/sections/CatagoryHero";
import Header from "@/components/sections/Header";
import { SparklesPreview } from "@/components/sections/Sprakle";
import { FlipWordsDemo } from "@/components/special-components/HeroText";

import { LayoutGridDemo } from "@/components/special-components/LayoutSection";

export default function Home() {
  return (
    <main className=" bg-white/20  ">
      <Searchbar />
      <SparklesPreview />
      <CatagoryHero />
      <FlipWordsDemo />
      <LayoutGridDemo />
      <FinalCity />
      <TatooSection />
      <BeautySection />
      <div className="mb-4 mt-5 h-32 w-full bg-slate-500"></div>
      <Footer />
    </main>
  );
}
