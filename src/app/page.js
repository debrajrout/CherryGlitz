import Searchbar from "@/components/Searchbar";
import Header from "@/components/sections/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-sky-100 via-lime-50 to-blue-300  ">
      <Header />
      <Searchbar />
    </div>
  );
}
