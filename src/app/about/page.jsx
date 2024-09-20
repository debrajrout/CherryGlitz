"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100  to-purple-100 p-4 sm:p-6">
            <div className="max-w-6xl mx-auto mb-7 mt-[50px]">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-600">
                        Welcome to <span className="text-purple-600">Cherry Glitz</span>
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-700">
                        Your ultimate destination for self-expression, beauty, and wellness.
                    </p>
                </motion.div>

                {/* Our Story Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="bg-white p-8 rounded-lg shadow-lg mb-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Cherry Glitz was founded with a simple belief: that everyone deserves
                                to feel confident, beautiful, and empowered. Our journey began with a
                                small salon, and today, we've grown into India's largest beauty and
                                grooming platform, helping millions of people across the country
                                embrace their unique identities.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                From tattooing and piercing to luxury spa treatments and unisex salons,
                                Cherry Glitz offers a diverse range of services tailored to meet the
                                needs of every individual. Whether you're looking to make a bold
                                statement or simply indulge in some self-care, we're here to support
                                you on your journey to self-love and self-expression.
                            </p>
                        </div>

                        {/* Image or Decorative Element */}
                        <div className="relative h-64 w-full bg-gradient-to-r from-purple-300 to-pink-300 rounded-lg shadow-inner overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/60 to-pink-500/60 flex items-center justify-center">
                                <p className="text-2xl sm:text-3xl font-semibold text-white text-center px-4">
                                    Empowering Self-Expression and Beauty
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>


                {/* What We Offer Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="space-y-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 text-center mb-8">
                        What We Offer
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-purple-700 text-center">
                                Tattooing
                            </h3>
                            <p className="mt-2 text-gray-600 text-center">
                                Tattooing is a silent anthem of your internal desires—a way to wear your passions, beliefs, and stories on your skin.
                            </p>
                        </motion.div>

                        {/* Service Card 2 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-pink-600 text-center">
                                Piercing
                            </h3>
                            <p className="mt-2 text-gray-600 text-center">
                                Piercing is a bold declaration of style and individuality, a small yet powerful way to express who you are.
                            </p>
                        </motion.div>

                        {/* Service Card 3 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-purple-700 text-center">
                                Beauty Parlors
                            </h3>
                            <p className="mt-2 text-gray-600 text-center">
                                Transformations happen here, bringing you closer to wearing the next crown of Miss Universe.
                            </p>
                        </motion.div>

                        {/* Service Card 4 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-pink-600 text-center">
                                Unisex Salons
                            </h3>
                            <p className="mt-2 text-gray-600 text-center">
                                A space where everyone can explore their style, whether through a fresh haircut, vibrant hair color, or a new look.
                            </p>
                        </motion.div>

                        {/* Service Card 5 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-purple-700 text-center">
                                Massage & Spa Centers
                            </h3>
                            <p className="mt-2 text-gray-600 text-center">
                                Sanctuaries for the body and soul, offering a retreat where relaxation meets rejuvenation.
                            </p>
                        </motion.div>

                        {/* Service Card 6 */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-pink-600 text-center">
                                Self-Care
                            </h3>
                            <p className="mt-2 text-gray-600 text-center">
                                Empower yourself with services that not only enhance your appearance but also uplift your spirit.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Why Choose Us Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="bg-gradient-to-r from-purple-200 to-pink-200 p-8 rounded-lg shadow-lg my-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 text-center mb-8">
                        Why Choose Cherry Glitz?
                    </h2>
                    <ul className="space-y-4">
                        <li className="text-lg text-gray-700 leading-relaxed">
                            <strong className="text-purple-700">Expertise:</strong> Our professionals are highly skilled and trained to deliver the best beauty and wellness services, ensuring that you receive the care and attention you deserve.
                        </li>
                        <li className="text-lg text-gray-700 leading-relaxed">
                            <strong className="text-pink-600">Personalized Services:</strong> We understand that everyone is unique. Our services are tailored to meet your individual needs and preferences, ensuring that you get the best results every time.
                        </li>
                        <li className="text-lg text-gray-700 leading-relaxed">
                            <strong className="text-purple-700">Convenience:</strong> With thousands of locations across the country, Cherry Glitz makes it easy to find and book the services you need, wherever you are.
                        </li>
                        <li className="text-lg text-gray-700 leading-relaxed">
                            <strong className="text-pink-600">Innovative Treatments:</strong> We are constantly updating our offerings to include the latest trends and technologies in beauty and wellness, so you can always stay ahead of the curve.
                        </li>
                    </ul>
                </motion.section>

                {/* Testimonials Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 text-center mb-8">
                        What Our Clients Say
                    </h2>
                    <div className="space-y-8">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-6 rounded-lg shadow-lg transition-shadow"
                        >
                            <div className="mb-4">
                                <p className="text-lg text-gray-700 italic text-center">
                                    "Cherry Glitz transformed my look and boosted my confidence. The staff is incredibly professional and friendly. Highly recommended!"
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="h-12 w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-inner"></div>
                                <div className="ml-4 text-center">
                                    <p className="text-purple-700 font-semibold">Aarti Sharma</p>
                                    <p className="text-gray-500 text-sm">Mumbai, India</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-6 rounded-lg shadow-lg transition-shadow"
                        >
                            <div className="mb-4">
                                <p className="text-lg text-gray-700 italic text-center">
                                    "I love the variety of services Cherry Glitz offers. It's my go-to place for all my beauty needs. The ambiance is amazing, and I always leave feeling pampered."
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="h-12 w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-inner"></div>
                                <div className="ml-4 text-center">
                                    <p className="text-purple-700 font-semibold">Rohit Mehta</p>
                                    <p className="text-gray-500 text-sm">Delhi, India</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Final Call to Action */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6">
                        Ready to Begin Your Journey?
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        At Cherry Glitz, we're committed to helping you look and feel your best. Explore our services and book an appointment today!
                    </p>
                    <a
                        href="/services"
                        className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
                    >
                        Explore Services
                    </a>
                </motion.section>
            </div>
            <Footer />
        </div>
    );
}
