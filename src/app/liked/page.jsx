"use client";
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { IoNavigateOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FcShop } from "react-icons/fc";
import { MdOutlineCategory } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import LikeRemove from "@/components/ui/LikeRemove";
import { fetchUser } from "@/actions/getUser";
import { fetchLiked } from "@/actions/fetchAll";
import { fetchFirstImage } from "@/actions/aws"; // Import the fetchFirstImage action
import { FaPhoneAlt, FaStar } from "react-icons/fa";
import Footer from "@/components/footer/Footer";

export default function LikedShops() {
    const [user, setUser] = useState(null);
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const session = await getSession();
            if (session) {
                const userData = await fetchUser();
                const initialShops = await fetchLiked(userData.liked);

                // Fetch images for each shop
                const shopsWithImages = await Promise.all(
                    initialShops.map(async (shop) => {
                        const imageUrl = await fetchFirstImage(shop.City, shop.Uid);
                        return { ...shop, imageUrl };
                    })
                );

                setUser(userData);
                setShops(shopsWithImages);
            }
        };
        fetchData();
    }, []);

    const handleRemoveShop = (shopId) => {
        setShops((prevShops) => prevShops.filter((shop) => shop.Uid !== shopId));
    };

    // Function to get category-specific styles and content
    const getCategoryStyles = (category) => {
        switch (category) {
            case "Beauty Parlour":
                return {
                    bgColor: "bg-pink-100",
                    textColor: "text-pink-800",
                    borderColor: "border-pink-200",
                    icon: "/icons/beauty-parlour.png", // Example icon for Beauty Parlour
                };
            case "Men’s Salon":
                return {
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-800",
                    borderColor: "border-blue-200",
                    icon: "/icons/mens-salon.png", // Example icon for Men's Salon
                };
            case "Massage":
                return {
                    bgColor: "bg-green-100",
                    textColor: "text-green-800",
                    borderColor: "border-green-200",
                    icon: "/icons/massage.png", // Example icon for Massage
                };
            case "Tattoo":
                return {
                    bgColor: "bg-red-100",
                    textColor: "text-red-800",
                    borderColor: "border-red-200",
                    icon: "/icons/tattoo.png", // Example icon for Tattoo
                };
            case "Spa":
                return {
                    bgColor: "bg-purple-100",
                    textColor: "text-purple-800",
                    borderColor: "border-purple-200",
                    icon: "/icons/spa.png", // Example icon for Spa
                };
            default:
                return {
                    bgColor: "bg-gray-100",
                    textColor: "text-gray-800",
                    borderColor: "border-gray-200",
                    icon: "/icons/default.png", // Default icon
                };
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-blue-500 to-indigo-700 py-16 text-white">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Your Liked Shops</h1>
                    <p className="text-lg mb-6">
                        Revisit your favorite shops and explore their top-notch services.
                    </p>
                    <Link href="/explore">
                        <span className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
                            Explore More Shops
                        </span>
                    </Link>
                </div>
            </section>

            {/* Liked Shops Section */}
            <section className="bg-white py-16">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {shops && shops.length > 0 ? (
                            shops.map((shop) => {
                                const categoryStyles = getCategoryStyles(shop.Category);
                                return (
                                    <div
                                        key={shop.Uid}
                                        className={`relative flex flex-col p-6 ${categoryStyles.bgColor} border ${categoryStyles.borderColor} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                    >
                                        <div className="w-full mb-4">
                                            <Image
                                                alt={shop.Name}
                                                src={shop.imageUrl || categoryStyles.icon} // Use fetched image or category-specific icon
                                                width={500}
                                                height={300}
                                                className="object-cover w-full h-48 rounded-lg"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-between h-full">
                                            <div>
                                                <h2 className={`text-2xl font-bold ${categoryStyles.textColor} mb-2`}>{shop.Name}</h2>
                                                <div className="flex flex-row items-center mb-2">
                                                    <FcShop className="mr-2 text-xl" />
                                                    <span className={`text-base font-semibold ${categoryStyles.textColor}`}>{shop.Name}</span>
                                                </div>
                                                <div className="flex flex-row items-center mb-2">
                                                    <CiLocationOn className="mr-2 text-lg text-blue-500" />
                                                    <span className="text-sm font-semibold text-gray-600">
                                                        {shop.Area}, {shop.City}
                                                    </span>
                                                </div>
                                                <div className="flex flex-row items-center mb-2">
                                                    <MdOutlineCategory className="mr-2 text-lg text-gray-800" />
                                                    <span className={`text-sm font-normal ${categoryStyles.textColor}`}>{shop.Category}</span>
                                                </div>
                                                <div className="flex flex-row items-center mb-2">
                                                    <FaStar className="mr-2 text-yellow-500" />
                                                    <span className={`text-sm font-normal ${categoryStyles.textColor}`}>
                                                        {shop.Rating} ({shop.Reviews} reviews)
                                                    </span>
                                                </div>
                                                <div className="flex flex-row items-center mb-4">
                                                    <FaPhoneAlt className="mr-2 text-lg text-green-500" />
                                                    <a href={`tel:${shop.Phone}`} className={`text-sm font-normal ${categoryStyles.textColor}`}>
                                                        {shop.Phone}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <Link
                                                    href={shop.Map}
                                                    target="_blank"
                                                    className="flex items-center gap-2 text-sm text-blue-600 font-semibold hover:underline"
                                                >
                                                    <IoNavigateOutline className="text-lg text-green-400" />
                                                    <span>Navigate</span>
                                                </Link>
                                                <LikeRemove uid={shop.Uid} onRemove={handleRemoveShop} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="text-center text-lg font-semibold text-gray-600">
                                No liked shops found.
                            </p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
