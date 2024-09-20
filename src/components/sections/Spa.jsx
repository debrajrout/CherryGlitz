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

export default function SpaExperience() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="mb-10 flex w-full mt-10 flex-col px-2">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-gray-800">
                        Ultimate <span className="text-blue-400">Spa Experience</span>
                    </span>
                    <span className="mt-1 text-lg font-medium text-gray-600">
                        Discover the Best Spa
                    </span>
                </div>
                <motion.div
                    animate={{ translateX: [0, 7, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    onClick={() => setIsDrawerOpen(true)} // Open the drawer on click
                    className="cursor-pointer"
                >
                    <TbCircleArrowRightFilled className="text-4xl mr-1 text-blue-400 hover:text-blue-600 transition-colors" />
                </motion.div>
            </div>
            <div className="flex h-60 items-end overflow-x-scroll py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md">
                <div className="flex flex-row gap-7">
                    {/* Spa Card 1 */}
                    <div className="flex shadow-lg shadow-blue-100/70 h-56 w-44 flex-col justify-between gap-2 bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-md">
                            <Image src="/spamassage/spa1.jpg" alt="Facial Treatments" width={7000} height={5000} className="object-cover h-28 w-full" />
                        </div>
                        <div className="flex w-full flex-col justify-between p-3">
                            <span className="text-lg font-semibold text-gray-700">
                                Facial Treatments
                            </span>
                            <span className="text-sm text-gray-500">
                                Rejuvenate Your Skin with Our Signature Facials
                            </span>
                            <Link
                                href="/category/spa"
                                className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition-colors mt-2"
                            >
                                <RxDoubleArrowRight />{" "}
                                <span className="text-sm font-semibold">Explore More</span>
                            </Link>
                        </div>
                    </div>
                    {/* Spa Card 2 */}
                    <div className="shadow-lg shadow-blue-100/70 flex h-56 w-44 flex-col justify-between gap-2 bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-md">
                            <Image src="/spamassage/spa2.jpg" alt="Body Wraps" width={1181} height={1200} className="object-cover h-28 w-full" />
                        </div>
                        <div className="flex w-full flex-col justify-between p-3">
                            <span className="text-lg font-semibold text-gray-700">
                                Body Wraps
                            </span>
                            <span className="text-sm text-gray-500">
                                Detoxify and Nourish Your Body with Luxurious Wraps
                            </span>
                            <Link
                                href="/category/spa"
                                className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition-colors mt-2"
                            >
                                <RxDoubleArrowRight />{" "}
                                <span className="text-sm font-semibold">Explore More</span>
                            </Link>
                        </div>
                    </div>
                    {/* Spa Card 3 */}
                    <div className="shadow-lg shadow-blue-100/70 flex h-56 w-44 flex-col justify-between gap-2 bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-md">
                            <Image src="/spamassage/spa3.jpg" alt="Hydrotherapy" width={1181} height={1200} className="object-cover h-28 w-full" />
                        </div>
                        <div className="flex w-full flex-col justify-between p-3">
                            <span className="text-lg font-semibold text-gray-700">
                                Hydrotherapy
                            </span>
                            <span className="text-sm text-gray-500">
                                Experience the Healing Power of Water
                            </span>
                            <Link
                                href="/category/spa"
                                className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition-colors mt-2"
                            >
                                <RxDoubleArrowRight />{" "}
                                <span className="text-sm font-semibold">Explore More</span>
                            </Link>
                        </div>
                    </div>
                    {/* Spa Card 4 */}
                    <div className="shadow-lg shadow-blue-100/70 flex h-56 w-44 flex-col justify-between gap-2 bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        <div className="overflow-hidden rounded-t-md">
                            <Image src="/spamassage/spa4.jpg" alt="Aromatherapy" width={1181} height={1200} className="object-cover h-28 w-full" />
                        </div>
                        <div className="flex w-full flex-col justify-between p-3">
                            <span className="text-lg font-semibold text-gray-700">
                                Aromatherapy
                            </span>
                            <span className="text-sm text-gray-500">
                                Indulge Your Senses with Essential Oils
                            </span>
                            <Link
                                href="/category/spa"
                                className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition-colors mt-2"
                            >
                                <RxDoubleArrowRight />{" "}
                                <span className="text-sm font-semibold">Explore More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Drawer Component */}
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerContent className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-t-lg shadow-xl">
                    <DrawerHeader>
                        <DrawerTitle className="text-2xl font-bold text-center text-gray-800">
                            Discover Our Exclusive Spa Treatments
                        </DrawerTitle>
                    </DrawerHeader>

                    <div className="grid grid-cols-1 overflow-y-auto gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
                        {/* Drawer Card 1 */}
                        <div className="flex flex-col bg-gradient-to-r from-green-200 to-green-400 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <Image
                                src="/spamassage/spa1.jpg"
                                alt="Facial Treatments"
                                width={7000}
                                height={5000}
                                className="rounded-md object-cover h-40 mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700">Facial Treatments</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Our facials are designed to cleanse, exfoliate, and nourish your skin,
                                leaving it looking and feeling rejuvenated. Choose from a variety of treatments
                                tailored to your skin type.
                            </p>
                            <Link href="/category/spa" className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                Learn More
                            </Link>
                        </div>

                        {/* Drawer Card 2 */}
                        <div className="flex flex-col bg-gradient-to-r from-yellow-200 to-yellow-400 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <Image
                                src="/spamassage/spa2.jpg"
                                alt="Body Wraps"
                                width={1181}
                                height={1200}
                                className="rounded-md object-cover h-40 mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700">Body Wraps</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Our body wraps offer a relaxing way to detoxify your skin, reduce cellulite,
                                and improve circulation. Choose from our selection of mud, seaweed, or thermal wraps.
                            </p>
                            <Link href="/category/spa" className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                Learn More
                            </Link>
                        </div>

                        {/* Drawer Card 3 */}
                        <div className="flex flex-col bg-gradient-to-r from-blue-200 to-blue-400 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <Image
                                src="/spamassage/spa3.jpg"
                                alt="Hydrotherapy"
                                width={1181}
                                height={1200}
                                className="rounded-md object-cover h-40 mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700">Hydrotherapy</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Hydrotherapy uses water to relieve pain and promote physical well-being.
                                Enjoy our whirlpools, hot tubs, or hydro-massage showers to invigorate your body and mind.
                            </p>
                            <Link href="/category/spa" className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                Learn More
                            </Link>
                        </div>

                        {/* Drawer Card 4 */}
                        <div className="flex flex-col bg-gradient-to-r from-purple-200 to-purple-400 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <Image
                                src="/spamassage/spa4.jpg"
                                alt="Aromatherapy"
                                width={1181}
                                height={1200}
                                className="rounded-md object-cover h-40 mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700">Aromatherapy</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Aromatherapy combines the healing properties of essential oils with massage and other spa treatments.
                                It's designed to balance your body and mind, promoting relaxation and wellness.
                            </p>
                            <Link href="/category/spa" className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <DrawerFooter className="flex justify-end mt-6">
                        <DrawerClose asChild>
                            <button className="btn btn-outline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">Close</button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
