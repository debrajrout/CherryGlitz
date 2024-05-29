import React from "react";
import { FlipWordsDemo } from "../special-components/HeroText";
import City from "../city/city";

export default function CitySection() {
  return (
    <div className="bg-slate-300/70">
      <FlipWordsDemo />
      <City />
    </div>
  );
}
