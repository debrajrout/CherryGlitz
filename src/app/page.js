import Searchbar from "@/components/Searchbar";
import CatagoryHero from "@/components/sections/CatagoryHero";
import Header from "@/components/sections/Header";
import Subhero from "@/components/sections/Subhero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white/10  ">
      <Header />
      <Searchbar />
      {/* <Subhero /> */}

      <CatagoryHero />
    </div>
  );
}
