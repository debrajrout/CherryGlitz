import React from "react";

import { GrLinkNext } from "react-icons/gr";
export default function Tagline() {
  return (
    <div className="mb-2 flex w-full flex-row justify-between px-1">
      <span className="w-full text-xl font-bold text-black">Top citys</span>
      <GrLinkNext className=" mr-2 text-black" />
    </div>
  );
}
