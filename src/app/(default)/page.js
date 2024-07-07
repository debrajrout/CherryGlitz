import { BeautySection } from "@/components/ButyParlerSection/Parler";
import Searchbar from "@/components/Searchbar";
import { TatooSection } from "@/components/TatooSection/TatooHero";
import Footer from "@/components/footer/Footer";
import CatagoryHero from "@/components/sections/CatagoryHero";
import SubCat from "@/components/sections/SubCat";
import CitySection from "@/components/sections/citySection";
import ManCat from "@/components/sections/ManCat";
import MassageSpa from "@/components/sections/MassageSpa";
import CitySearchBar from "@/components/citySearch";

export default function Home() {
  return (
    <main>
      <div className="flex w-full flex-row items-center  justify-between  px-3">
        <Searchbar />
        <CitySearchBar />
      </div>
      <SubCat />
      <CatagoryHero />
      <CitySection />
      <ManCat />
      <TatooSection />
      <BeautySection />
      <MassageSpa />
      <Footer />
    </main>
  );
}
