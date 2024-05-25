import { BeautySection } from "@/components/ButyParlerSection/Parler";

import Searchbar from "@/components/Searchbar";
import { TatooSection } from "@/components/TatooSection/TatooHero";

import Footer from "@/components/footer/Footer";
import CatagoryHero from "@/components/sections/CatagoryHero";

import { FlipWordsDemo } from "@/components/special-components/HeroText";

import { LayoutGridDemo } from "@/components/special-components/LayoutSection";
import SubCat from "@/components/sections/SubCat";
import City from "@/components/city/city";

export default function Home() {
  return (
    <main className=" bg-white  ">
      <Searchbar />
      <SubCat />
      <CatagoryHero />
      <FlipWordsDemo />
      <City />
      <LayoutGridDemo />
      <TatooSection />
      <BeautySection />
      <Footer />
    </main>
  );
}
