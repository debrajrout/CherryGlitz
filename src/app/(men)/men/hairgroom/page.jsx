

import ThreeDCardDemo from "@/components/ManSection/CardSection";
import GroomAll from "@/components/ManSection/GroomAll";
import React from "react";

export default function page() {
  return (
    <div className="flex  w-full items-center flex-col gap-1  bg-zinc-900 px-3 py-6">
      <div className="w-full mt-10 mb-4 text-center">
        <span className="text-yellow-400 text-2xl font-medium">Ultimate Male Grooming</span> <br />
        <span className="text-zinc-500 text-lg  font-semibold">Premium Hair, Beard and Grooming Services</span>
      </div>
      <button className="bg-slate-800 -mt-2 mb-2 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span>
            Explore with us
          </span>
          <svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
      <ThreeDCardDemo />
      <GroomAll />
    </div>
  );
}
