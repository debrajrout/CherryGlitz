import Image from "next/image";
import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
export default function MassageSpa() {
  return (
    <div className="mb-3 flex w-full flex-col px-2">
      <div className="flex flex-col">
        <span>dsscdscsc</span>
        <span>sdnsklnsnlsnlsnlnslanl</span>
      </div>

      <div className="flex h-56 items-end overflow-x-scroll">
        <div className="flex flex-row gap-3">
          <div className=" flex h-56 w-44 flex-col justify-between gap-1 bg-lime-200">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spa/spa3.png" alt="" width={1181} height={1200} />
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Tattoo and Piercing
              </span>
              <span className=" px-2 text-xs font-semibold text-black/90">
                Ink and Metal, Where Art Meets Body
              </span>
              <div className="flex h-6 w-full flex-row items-center  gap-1 bg-violet-500/30 px-2 ">
                <RxDoubleArrowRight />{" "}
                <span className="text-xs text-violet-950">Explore More</span>
              </div>
            </div>
          </div>
          <div className=" flex h-56 w-44 flex-col justify-between gap-1 bg-lime-200">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spa/spa3.png" alt="" width={1181} height={1200} />
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Tattoo and Piercing
              </span>
              <span className=" px-2 text-xs font-semibold text-black/90">
                Ink and Metal, Where Art Meets Body
              </span>
              <div className="flex h-6 w-full flex-row items-center  gap-1 bg-violet-500/30 px-2 ">
                <RxDoubleArrowRight />{" "}
                <span className="text-xs text-violet-950">Explore More</span>
              </div>
            </div>
          </div>
          <div className=" flex h-56 w-44 flex-col justify-between gap-1 bg-lime-200">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spa/spa3.png" alt="" width={1181} height={1200} />
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Tattoo and Piercing
              </span>
              <span className=" px-2 text-xs font-semibold text-black/90">
                Ink and Metal, Where Art Meets Body
              </span>
              <div className="flex h-6 w-full flex-row items-center  gap-1 bg-violet-500/30 px-2 ">
                <RxDoubleArrowRight />{" "}
                <span className="text-xs text-violet-950">Explore More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
