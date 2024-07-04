import React from "react";
import { FlipWordsDemo } from "../special-components/HeroText";
import City from "../city/city";

export default function CitySection() {
  return (
    <div className="mt-4 px-2">
      <FlipWordsDemo />
      <City />
    </div>
  );
}
