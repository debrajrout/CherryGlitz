"use client";
import React, { useState } from "react";
import { LayoutGridDemo } from "../special-components/LayoutSection";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Image from "next/image";
import { RxDoubleArrowRight } from "react-icons/rx";
import Link from "next/link";

export default function ManCat() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col mt-8 px-2">
      <div className="flex items-center justify-between px-1">
        <span className="px-1 text-2xl font-semibold text-black">
          Explore our category
        </span>
        <motion.div
          animate={{ translateX: [0, 7, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          onClick={() => setIsDrawerOpen(true)} // Open the drawer on click
        >
          <TbCircleArrowRightFilled className="text-4xl mr-1 text-blue-500 mt-1" />
        </motion.div>
      </div>

      <LayoutGridDemo />

      {/* Drawer Component */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="bg-white   p-6 rounded-t-lg shadow-lg">
          <DrawerHeader className="bg-blue-100 rounded-md">
            <DrawerTitle className="text-xl font-bold text-center">
              Explore Categories
            </DrawerTitle>
          </DrawerHeader>

          <div className="grid grid-cols-1 gap-6 mt-4 overflow-y-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
            {/* Card 1 */}
            <div className="flex flex-col p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg text-white">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-48 w-full overflow-hidden rounded-lg shadow-lg mb-4"
              >
                <Image
                  alt=""
                  src="/mancat/mt.png"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <Link href="/category/tatoos">
                <span className="text-lg font-bold leading-none">
                  Tattoo and Piercing
                </span>
                <p className="mt-2 text-sm">
                  Ink and Metal, Where Art Meets Body. Discover the best tattoo
                  and piercing artists in town.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm font-semibold">
                  <RxDoubleArrowRight />
                  <span>Explore More</span>
                </div>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col p-4 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg shadow-lg text-white">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-48 w-full overflow-hidden rounded-lg shadow-lg mb-4"
              >
                <Image
                  alt=""
                  src="/mancat/mb.png"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <Link href="/women/radiantglow">
                <span className="text-lg font-bold leading-none">
                  Beauty Parlour
                </span>
                <p className="mt-2 text-sm">
                  Indulge in the Art of Beauty. Experience top-tier beauty
                  services with Cherry Glitz.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm font-semibold">
                  <RxDoubleArrowRight />
                  <span>Explore More</span>
                </div>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg text-white">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-48 w-full overflow-hidden rounded-lg shadow-lg mb-4"
              >
                <Image
                  alt=""
                  src="/mancat/msl.png"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <Link href="/men/haircut">
                <span className="text-lg font-bold leading-none">
                  Men’s and Unisex Salon
                </span>
                <p className="mt-2 text-sm">
                  Your Ultimate Grooming Destination. Get the latest haircuts
                  and styles.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm font-semibold">
                  <RxDoubleArrowRight />
                  <span>Explore More</span>
                </div>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg text-white">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-48 w-full overflow-hidden rounded-lg shadow-lg mb-4"
              >
                <Image
                  alt=""
                  src="/mancat/mm.png"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <Link href="/category/massage">
                <span className="text-lg font-bold leading-none">
                  Massage Parlour
                </span>
                <p className="mt-2 text-sm">
                  Indulge in Ultimate Relaxation with Cherry Glitz’s expert
                  masseuses.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm font-semibold">
                  <RxDoubleArrowRight />
                  <span>Explore More</span>
                </div>
              </Link>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg text-white">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-48 w-full overflow-hidden rounded-lg shadow-lg mb-4"
              >
                <Image
                  alt=""
                  src="/mancat/ms.png"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <Link href="/category/spa">
                <span className="text-lg font-bold leading-none">
                  Spa Centre
                </span>
                <p className="mt-2 text-sm">
                  Pamper Yourself with Pure Indulgence at Cherry Glitz Spa.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm font-semibold">
                  <RxDoubleArrowRight />
                  <span>Explore More</span>
                </div>
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
