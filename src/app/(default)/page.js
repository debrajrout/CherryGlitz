import { BeautySection } from "@/components/ButyParlerSection/Parler";
import Searchbar from "@/components/Searchbar";
import { TatooSection } from "@/components/TatooSection/TatooHero";
import Footer from "@/components/footer/Footer";
import CatagoryHero from "@/components/sections/CatagoryHero";
import { LayoutGridDemo } from "@/components/special-components/LayoutSection";
import SubCat from "@/components/sections/SubCat";
import CitySection from "@/components/sections/citySection";
import ManCat from "@/components/sections/ManCat";

export default function Home() {
  return (
    <main>
      <Searchbar />
      <SubCat />
      <CatagoryHero />
      <CitySection />
      <ManCat />
      <TatooSection />
      <BeautySection />
      <Footer />
    </main>
  );
}
