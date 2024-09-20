import { SaloonSection } from "@/components/ButyParlerSection/Parler";
import Searchbar from "@/components/Searchbar";
import { TatooSection } from "@/components/TatooSection/TatooHero";
import Footer from "@/components/footer/Footer";
import CatagoryHero from "@/components/sections/CatagoryHero";
import SubCat from "@/components/sections/SubCat";
import CitySection from "@/components/sections/citySection";
import ManCat from "@/components/sections/ManCat";
import CitySearchBar from "@/components/citySearch";
import { ParlourSection } from "@/components/ButyParlerSection/ParlourSection";
import MassageSpa1 from "@/components/sections/MassageSpa";
import MassageSpa2 from "@/components/sections/Spa";
import CartSection from "@/components/sections/likedBar";

export default function Home() {
  return (
    <main>
      <div className="flex w-full flex-col">
        <CitySearchBar />
        <Searchbar />
      </div>
      <SubCat />
      <CatagoryHero />
      <CitySection />
      <ManCat />
      <CartSection />
      <TatooSection />
      <ParlourSection />
      <SaloonSection />
      <MassageSpa1 />
      <MassageSpa2 />
      <Footer />
    </main>
  );
}
