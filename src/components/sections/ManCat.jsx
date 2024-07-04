import React from "react";
import { LayoutGridDemo } from "../special-components/LayoutSection";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export default function ManCat() {
  return (
    <div className=" flex flex-col mt-8 px-2">
      <span className="px-1 text-2xl font-semibold text-black">
        Explore our category
      </span>
      <span className=" flex flex-row items-center gap-1 px-1 text-sm font-medium   text-blue-600">
        With Cherry Glitz <MdKeyboardDoubleArrowRight className="mt-1" />
      </span>
      <LayoutGridDemo />
    </div>
  );
}
