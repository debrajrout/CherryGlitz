"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Express Yourself with Stunning Tattoos!",
    "Find Your Perfect Piercing Style!",
    "Unleash Your Beauty at Our Parlour!",
    "Elevate Your Look at Our Unisex Salon!",
    "Relax and Rejuvenate with Our Massages!",
    "Escape to Tranquility at Our Spa Centre!",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="w-[90%]">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
