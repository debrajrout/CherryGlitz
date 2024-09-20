"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";


export default function ExploreCategories() {
    return (
        <>
            <section className="bg-gradient-to-b mt-10 from-gray-50 to-gray-100 py-12">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                            Explore Our Categories
                        </h1>

                        <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
                            Discover a world of beauty, style, and relaxation with our diverse range of categories. Whether you're looking for a fresh new look or a soothing escape, Cherry Glitz has something for everyone.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mt-8"
                        >
                            <Link href="/">
                                <span className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
                                    Explore Now
                                </span>
                            </Link>
                        </motion.div>
                    </div>


                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1: Tattoo and Piercing */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative flex flex-col p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg text-white"
                        >
                            <Image
                                alt="Tattoo and Piercing"
                                src="/mancat/mt.png"
                                width={500}
                                height={300}
                                className="object-cover w-full h-48 rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-bold">Tattoo and Piercing</h2>
                            <p className="mt-2 text-sm">
                                Ink and Metal, Where Art Meets Body. Discover the best tattoo and piercing artists in town.
                            </p>
                            <Link href="/category/tatoos">
                                <div className="flex items-center gap-2 mt-4 text-sm font-semibold">
                                    <span>Try it now</span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Card 2: Beauty Parlour */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative flex flex-col p-6 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg shadow-lg text-white"
                        >
                            <Image
                                alt="Beauty Parlour"
                                src="/mancat/mb.png"
                                width={500}
                                height={300}
                                className="object-cover w-full h-48 rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-bold">Beauty Parlour</h2>
                            <p className="mt-2 text-sm">
                                Indulge in the Art of Beauty. Experience top-tier beauty services with Cherry Glitz.
                            </p>
                            <Link href="/women/radiantglow">
                                <div className="flex items-center gap-2 mt-4 text-sm font-semibold">
                                    <span>Try it now</span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Card 3: Men’s and Unisex Salon */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative flex flex-col p-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg text-white"
                        >
                            <Image
                                alt="Men's and Unisex Salon"
                                src="/mancat/msl.png"
                                width={500}
                                height={300}
                                className="object-cover w-full h-48 rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-bold">Men’s and Unisex Salon</h2>
                            <p className="mt-2 text-sm">
                                Your Ultimate Grooming Destination. Get the latest haircuts and styles.
                            </p>
                            <Link href="/men/haircut">
                                <div className="flex items-center gap-2 mt-4 text-sm font-semibold">
                                    <span>Try it now</span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Card 4: Massage Parlour */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative flex flex-col p-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg text-white"
                        >
                            <Image
                                alt="Massage Parlour"
                                src="/mancat/mm.png"
                                width={500}
                                height={300}
                                className="object-cover w-full h-48 rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-bold">Massage Parlour</h2>
                            <p className="mt-2 text-sm">
                                Indulge in Ultimate Relaxation with Cherry Glitz’s expert masseuses.
                            </p>
                            <Link href="/category/massage">
                                <div className="flex items-center gap-2 mt-4 text-sm font-semibold">
                                    <span>Try it now</span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Card 5: Spa Centre */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative flex flex-col p-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg text-white"
                        >
                            <Image
                                alt="Spa Centre"
                                src="/mancat/ms.png"
                                width={500}
                                height={300}
                                className="object-cover w-full h-48 rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-bold">Spa Centre</h2>
                            <p className="mt-2 text-sm">
                                Pamper Yourself with Pure Indulgence at Cherry Glitz Spa.
                            </p>
                            <Link href="/category/spa">
                                <div className="flex items-center gap-2 mt-4 text-sm font-semibold">
                                    <span>Try it now</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </>
    );
}
