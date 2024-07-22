import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
export default function MassageSpa() {
  return (
    <div className="mb-10 flex w-full mt-10 flex-col px-2">
      <div className="flex flex-col">
        <span className="text-2xl font-bold">Ultimate <span className="text-blue-500">Massage & Spa</span> Escape</span>
        <span className=" mt-1  text-base font-semibold text-gray-500/70">The Best Spots Near You for Relaxation</span>
      </div>

      <div className="flex h-60  items-end overflow-x-scroll">
        <div className="flex flex-row gap-7">
          <div className=" flex shadow-md shadow-black/50  h-56 w-44 flex-col justify-between gap-1 bg-lime-100/70">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spamassage/mm1.jpg" alt="" width={7000} height={5000} />
            </div>
            <Link href="" className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Swedish Massage
              </span>
              <span className=" px-2 text-xs font-bold text-black/70">
                Relax and Unwind with the Classic Swedish Massage
              </span>
              <div className="flex h-6 w-full flex-row items-center  gap-1 bg-violet-500/30 px-2 ">
                <RxDoubleArrowRight />{" "}
                <span className="text-xs text-violet-950">Explore More</span>
              </div>
            </Link>
          </div>
          <div className="shadow-md shadow-black/50 flex h-56 w-44 flex-col justify-between gap-1 bg-lime-100/70">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spamassage/mm2.jpg" alt="" width={1181} height={1200} />
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Deep Tissue Massage
              </span>
              <span className=" px-2 text-xs font-bold text-black/70">
                Relieve Tension and Stress with Deep Tissue Techniques
              </span>
              <div className="flex h-6 w-full flex-row items-center  gap-1 bg-violet-500/30 px-2 ">
                <RxDoubleArrowRight />{" "}
                <span className="text-xs text-violet-950">Explore More</span>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-black/50 flex h-56 w-44 flex-col justify-between gap-1 bg-lime-100/70">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spamassage/ms1.jpg" alt="" width={1181} height={1200} />
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Luxury Spa Treatments
              </span>
              <span className=" px-2 text-xs font-bold text-black/70">
                Indulge in Premium Spa Services for a Pampering Experience
              </span>
              <div className="flex h-6 w-full flex-row items-center  gap-1 bg-violet-500/30 px-2 ">
                <RxDoubleArrowRight />{" "}
                <span className="text-xs text-violet-950">Explore More</span>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-black/50 flex h-56 w-44 flex-col justify-between gap-1 bg-lime-100/70">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spamassage/ms2.jpg" alt="" width={1181} height={1200} />
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Holistic Spa Therapies
              </span>
              <span className=" px-2 text-xs font-bold text-black/70">
                Experience Complete Wellness with Our Holistic Spa Options
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
