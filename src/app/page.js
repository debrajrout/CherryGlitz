import { BeautySection } from "@/components/ButyParlerSection/Parler";

import Searchbar from "@/components/Searchbar";
import { TatooSection } from "@/components/TatooSection/TatooHero";
import FinalCity from "@/components/city/FinalCity";

import Footer from "@/components/footer/Footer";
import CatagoryHero from "@/components/sections/CatagoryHero";
import Header from "@/components/sections/Header";

import { FlipWordsDemo } from "@/components/special-components/HeroText";

import { LayoutGridDemo } from "@/components/special-components/LayoutSection";
import SubCat from "@/components/sections/SubCat";

export default function Home() {
  return (
    <main className=" bg-white  ">
      <Searchbar />
      <SubCat />
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
