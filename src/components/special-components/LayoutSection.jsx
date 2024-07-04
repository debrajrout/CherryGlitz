"use client";
import Image from "next/image";
import { RxDoubleArrowRight } from "react-icons/rx";
import { motion } from "framer-motion";
export function LayoutGridDemo() {
  return (
    <div className="flex h-56 items-end overflow-x-scroll">
      <div className="flex flex-row gap-7">
        <div className=" mb-2 flex h-[175px] w-40 flex-col gap-1 rounded-md bg-white  shadow-md shadow-black/50 ">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="-mt-10 h-48 w-full overflow-hidden  p-2 "
          >
            <Image
              alt=""
              src="/mancat/mt.png"
              width={260}
              height={300}
              className="rounded-lg object-cover shadow-md shadow-black"
            />
          </motion.div>
          <div className="flex h-full  w-full flex-col justify-between  px-2 pb-1 ">
            <span className="text-base font-bold leading-none text-black">
              Tattoo and Piercing
            </span>
            <span className=" text-xs font-semibold text-black/90">
              Ink and Metal, Where Art Meets Body
            </span>
            <div className="flex h-4 w-32 flex-row items-center gap-1 rounded-sm bg-violet-500/30 px-2">
              <RxDoubleArrowRight />{" "}
              <span className="text-xs text-violet-950">Explore More</span>
            </div>
          </div>
        </div>
        <div className=" mb-2 flex h-[175px] w-40 flex-col gap-1 rounded-md bg-rose-300  shadow-md shadow-black/50 ">
          <div className="-mt-10 h-48 w-full overflow-hidden  p-2 ">
            <Image
              alt=""
              src="/mancat/mb.png"
              width={260}
              height={300}
              className="rounded-lg object-cover shadow-md shadow-black"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-between  px-2 pb-1 ">
            <span className="text-base font-bold leading-none text-black">
              Beauty Parlour
            </span>
            <span className=" text-xs font-semibold text-black/90">
              Indulge in the Art of Beauty with{" "}
              <span className="font-semibold text-pink-600">Cherry Glitz</span>
            </span>
            <div className="flex h-4 w-32 flex-row items-center gap-1 rounded-sm bg-violet-500/30 px-2">
              <RxDoubleArrowRight />{" "}
              <span className="text-xs text-violet-950">Explore More</span>
            </div>
          </div>
        </div>
        <div className=" mb-2 flex h-[175px] w-40 flex-col gap-1 rounded-md bg-emerald-300  shadow-md shadow-black/50 ">
          <div className="-mt-10 h-48 w-full overflow-hidden  p-2 ">
            <Image
              alt=""
              src="/mancat/msl.png"
              width={260}
              height={300}
              className="rounded-lg object-cover shadow-md shadow-black"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-between px-2 pb-1">
            <span className="text-base font-bold leading-none text-black">
              Men’s and Unisex salon
            </span>
            <span className=" text-xs font-semibold text-black/90">
              Explore Your Ultimate Grooming Destination
            </span>{" "}
            <div className="flex h-4 w-32 flex-row items-center gap-1 rounded-sm bg-violet-500/30 px-2">
              <RxDoubleArrowRight />{" "}
              <span className="text-xs text-violet-950">Explore More</span>
            </div>
          </div>
        </div>
        <div className=" mb-2 flex h-[175px] w-40 flex-col gap-1 rounded-md bg-violet-300  shadow-md shadow-black/50 ">
          <div className="-mt-10 h-48 w-full overflow-hidden  p-2 ">
            <Image
              alt=""
              src="/mancat/mm.png"
              width={260}
              height={300}
              className="rounded-lg object-cover shadow-md shadow-black"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-between bg-slate-400/50 px-2 pb-1">
            <span className="text-base font-bold leading-none text-black">
              Massage Parlour
            </span>
            <span className=" text-xs font-semibold text-black/90">
              Indulge in Ultimate Relaxation{" "}
              <span className="font-semibold text-blue-600">Cherry Glitz</span>
            </span>{" "}
            <div className="flex h-4 w-32 flex-row items-center gap-1 rounded-sm bg-violet-500/30 px-2">
              <RxDoubleArrowRight />{" "}
              <span className="text-xs text-violet-950">Explore More</span>
            </div>
          </div>
        </div>
        <div className=" mb-2 flex h-[175px] w-40 flex-col gap-1 rounded-md bg-yellow-300/50  shadow-md shadow-black/50 ">
          <div className="-mt-10 h-48 w-full overflow-hidden  p-2 ">
            <Image
              alt=""
              src="/mancat/ms.png"
              width={260}
              height={300}
              className="rounded-lg object-cover shadow-md shadow-black"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-between  px-2 pb-1">
            <span className="text-base font-bold leading-none text-black">
              Spa Centre
            </span>
            <span className=" text-xs font-semibold text-black/90">
              Pamper Yourself with Pure Indulgence{" "}
              <span className="font-semibold text-red-500">Cherry Glitz</span>
            </span>{" "}
            <div className="flex h-4 w-32 flex-row items-center gap-1 rounded-sm bg-violet-500/30 px-2">
              <RxDoubleArrowRight />{" "}
              <span className="text-xs text-violet-950">Explore More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
