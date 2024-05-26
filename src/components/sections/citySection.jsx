import React from "react";
import { FlipWordsDemo } from "../special-components/HeroText";
import City from "../city/city";

export default function CitySection() {
  return (
    <div className="bg-black/25">
      <FlipWordsDemo />
      <City />
    </div>
  );
}
