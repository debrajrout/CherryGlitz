"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FcNext } from "react-icons/fc";
const City = () => {
  return (
    <div className="flex w-full flex-row items-center overflow-x-auto px-1 py-2">
      <div className="flex h-28 items-center  space-x-4">
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-yellow-400">
          <Image
            src="/city/agra.png"
            alt="City 1"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-sky-400">
          <Image
            src="/city/bengaluru.png"
            alt="City 2"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-lime-400">
          <Image
            src="/city/chennai.png"
            alt="City 3"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-lime-400">
          <Image
            src="/city/delhi.png"
            alt="City 3"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-pink-500">
          <Image
            src="/city/hyderabad.png"
            alt="City 4"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-blue-500">
          <Image
            src="/city/jaipur.png"
            alt="City 5"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-yellow-400">
          <Image
            src="/city/kolkata.png"
            alt="City 6"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-green-400">
          <Image
            src="/city/lucknow.png"
            alt="City 7"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-yellow-400">
          <Image
            src="/city/mumbai.png"
            alt="City 8"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-yellow-400">
          <Image
            src="/city/pune.png"
            alt="City 9"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="h-24 w-20 flex-shrink-0 shadow-md shadow-yellow-400">
          <Image
            src="/city/ahemdabad.png"
            alt="City 10"
            className="rounded-lg object-cover"
            width={160}
            height={160}
          />
        </div>
        <div className="mt-2 flex h-[108px] w-14 flex-col items-center justify-center rounded-xl  bg-white/40  px-1 text-center shadow-md shadow-black/50 ring-2 ring-blue-400">
          <span className="mb-1 text-sm font-semibold">All citys</span>
          <Link href="/city">
            <motion.div
              animate={{
                translateX: [0, -3, 0],
              }}
              transition={{
                duration: 0.7,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <FcNext className="h-6 w-6  text-blue-800" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default City;
