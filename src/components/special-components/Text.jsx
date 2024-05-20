"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Explore",
      className: "text-white text-xl font-semibold",
    },
    {
      text: "our",
      className: "text-white text-xl font-semibold",
    },

    {
      text: "Category.",
      className: "text-blue-500 text-xl font-semibold ",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}
