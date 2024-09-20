"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { motion } from "framer-motion";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

export default function MassageSpa1() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="mb-10 flex w-full mt-10 flex-col px-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">
            Ultimate <span className="text-blue-500">Massage Therapy</span>
          </span>
          <span className="mt-1 truncate overflow-hidden w-2/3 text-base font-semibold text-gray-500/70">
            Best massage near you.
          </span>
        </div>
        <motion.div
          animate={{ translateX: [0, 7, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          onClick={() => setIsDrawerOpen(true)} // Open the drawer on click
        >
          <TbCircleArrowRightFilled className="text-4xl mr-1 text-blue-500" />
        </motion.div>
      </div>
      <div className="flex h-60 items-end overflow-x-scroll">
        <div className="flex flex-row gap-7">
          {/* Existing Card 1 */}
          <div className="flex shadow-md shadow-black/50 h-56 w-44 flex-col justify-between gap-1 bg-lime-100/70">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spamassage/mm1.jpg" alt="Swedish Massage" width={7000} height={5000} />
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Swedish Massage
              </span>
              <span className="px-2 text-xs font-bold text-black/70">
                Relax and Unwind with the Classic Swedish Massage
              </span>
              <Link
                href="/category/massage"
                className="flex h-6 w-full flex-row items-center gap-1 bg-violet-500/30 px-2"
              >
                <RxDoubleArrowRight />{" "}
                <span className="text-xs text-violet-950">Explore More</span>
              </Link>
            </div>
          </div>
          {/* Existing Card 2 */}
          <div className="shadow-md shadow-black/50 flex h-56 w-44 flex-col justify-between gap-1 bg-lime-100/70">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spamassage/mm2.jpg" alt="Deep Tissue Massage" width={1181} height={1200} />
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Deep Tissue Massage
              </span>
              <span className="px-2 text-xs font-bold text-black/70">
                Relieve Tension and Stress with Deep Tissue Techniques
              </span>
              <Link
                href="/category/massage"
                className="flex h-6 w-full flex-row items-center gap-1 bg-violet-500/30 px-2"
              >
                <RxDoubleArrowRight />{" "}
                <span className="text-xs text-violet-950">Explore More</span>
              </Link>
            </div>
          </div>
          {/* Existing Card 3 */}
          <div className="shadow-md shadow-black/50 flex h-56 w-44 flex-col justify-between gap-1 bg-lime-100/70">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spamassage/mm3.jpg" alt="Hot Stone Massage" width={1181} height={1200} />
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Hot Stone Massage
              </span>
              <span className="px-2 text-xs font-bold text-black/70">
                Melt Away Tension with the Soothing Heat of Stones
              </span>
              <Link
                href="/category/massage"
                className="flex h-6 w-full flex-row items-center gap-1 bg-violet-500/30 px-2"
              >
                <RxDoubleArrowRight />{" "}
                <span className="text-xs text-violet-950">Explore More</span>
              </Link>
            </div>
          </div>
          {/* Existing Card 4 */}
          <div className="shadow-md shadow-black/50 flex h-56 w-44 flex-col justify-between gap-1 bg-lime-100/70">
            <div className="overflow-hidden rounded-t-md ">
              <Image src="/spamassage/mm4.jpg" alt="Aromatherapy Massage" width={1181} height={1200} />
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="px-2 text-base font-bold leading-none text-black">
                Aromatherapy Massage
              </span>
              <span className="px-2 text-xs font-bold text-black/70">
                Invigorate Your Senses with Essential Oils
              </span>
              <Link
                href="/category/massage"
                className="flex h-6 w-full flex-row items-center gap-1 bg-violet-500/30 px-2"
              >
                <RxDoubleArrowRight />{" "}
                <span className="text-xs text-violet-950">Explore More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Component */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="bg-white p-6 rounded-t-lg  shadow-lg">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold text-center">
              Discover Our Signature Massage Therapies
            </DrawerTitle>
          </DrawerHeader>

          <div className="grid grid-cols-1 overflow-y-auto gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
            {/* Drawer Card 1 */}
            <div className="flex flex-col bg-gradient-to-r from-green-300 to-green-500 p-4 rounded-lg shadow-lg">
              <Image
                src="/spamassage/mm1.jpg"
                alt="Swedish Massage"
                width={7000}
                height={5000}
                className="rounded-md object-cover h-40 mb-4"
              />
              <h3 className="text-lg font-bold text-black">Swedish Massage</h3>
              <p className="text-sm text-gray-700 mt-2">
                The Swedish Massage is designed to relax and rejuvenate. It
                involves long, smooth strokes, kneading, and circular movements
                on the topmost layers of muscles. Perfect for relieving stress
                and improving circulation.
              </p>
              <Link href="/category/massage" className="mt-4 text-blue-600 font-semibold">
                Learn More
              </Link>
            </div>

            {/* Drawer Card 2 */}
            <div className="flex flex-col bg-gradient-to-r from-yellow-300 to-yellow-500 p-4 rounded-lg shadow-lg">
              <Image
                src="/spamassage/mm2.jpg"
                alt="Deep Tissue Massage"
                width={1181}
                height={1200}
                className="rounded-md object-cover h-40 mb-4"
              />
              <h3 className="text-lg font-bold text-black">Deep Tissue Massage</h3>
              <p className="text-sm text-gray-700 mt-2">
                Deep Tissue Massage targets the deeper layers of muscles and
                connective tissue. It's ideal for chronic aches and pains,
                especially in the neck, back, shoulders, and legs.
              </p>
              <Link href="/category/massage" className="mt-4 text-blue-600 font-semibold">
                Learn More
              </Link>
            </div>

            {/* Drawer Card 3 */}
            <div className="flex flex-col bg-gradient-to-r from-orange-300 to-orange-500 p-4 rounded-lg shadow-lg">
              <Image
                src="/spamassage/mm3.jpg"
                alt="Hot Stone Massage"
                width={1181}
                height={1200}
                className="rounded-md object-cover h-40 mb-4"
              />
              <h3 className="text-lg font-bold text-black">
                Hot Stone Massage
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Hot Stone Massage uses smooth, heated stones to relieve
                tension and enhance relaxation. The warmth from the stones
                penetrates deep into the muscles, easing pain and promoting
                a sense of calm.
              </p>
              <Link href="/category/massage" className="mt-4 text-blue-600 font-semibold">
                Learn More
              </Link>
            </div>

            {/* Drawer Card 4 */}
            <div className="flex flex-col bg-gradient-to-r from-purple-300 to-purple-500 p-4 rounded-lg shadow-lg">
              <Image
                src="/spamassage/mm4.jpg"
                alt="Aromatherapy Massage"
                width={1181}
                height={1200}
                className="rounded-md object-cover h-40 mb-4"
              />
              <h3 className="text-lg font-bold text-black">Aromatherapy Massage</h3>
              <p className="text-sm text-gray-700 mt-2">
                Aromatherapy Massage combines the benefits of massage therapy with
                the therapeutic properties of essential oils. It's perfect for
                those seeking a sensory experience that promotes holistic well-being.
              </p>
              <Link href="/category/massage" className="mt-4 text-blue-600 font-semibold">
                Learn More
              </Link>
            </div>
          </div>

          <DrawerFooter className="flex justify-end mt-6">
            <DrawerClose asChild>
              <button className="btn btn-outline">Close</button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
