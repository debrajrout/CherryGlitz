import Link from "next/link";
import React from "react";
import { TbArrowBigLeftLines } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
// const fadeInUpAnimation = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       staggerChildren: 0.3,
//       duration: 1,
//     },
//   },
// };
export default function CategoryHeading() {
  return (
    <div className="flex flex-row items-center justify-between rounded-b-3xl  bg-gradient-to-b from-white to-slate-200 px-2 shadow-lg   shadow-black/30">
      <div className="flex h-20  flex-row items-center gap-2 ">
        <Link href="/">
          <TbArrowBigLeftLines className="ml-5 h-8 w-8 animate-bounce-left text-blue-800" />
        </Link>
        <span className="pb-1 text-justify text-3xl font-bold text-blue-900">
          Cherry <span className="text-orange-700">Glitz</span>
        </span>
      </div>

      <div className="mr-2 flex flex-col items-end text-justify">
        <span className="text-sm font-medium text-blue-700">Best Tatoos</span>
        <span className=" flex flex-row items-center text-xs font-semibold text-black/75">
          <CiLocationOn className="mt-[2px]" /> Piercing
        </span>
      </div>
    </div>
  );
}
