"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { likeShop } from "@/actions/LikeShop";
import { FcClock, FcShop } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { PiHeartStraightBold, PiShareFatDuotone } from "react-icons/pi";
import { fetchFirstImage } from "@/actions/aws";
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { MdPeople } from "react-icons/md";

const ShopListing = ({ shopResults, cityName, lastShopElementRef }) => {
    const [shopImages, setShopImages] = useState({});
    const [loadingImages, setLoadingImages] = useState({});

    useEffect(() => {
        const fetchImages = async () => {
            const images = {};
            const loading = {};
            for (const shop of shopResults) {
                loading[shop.Uid] = true;
                const imageUrl = await fetchFirstImage(shop.City, shop.Uid);
                images[shop.Uid] = imageUrl || null; // Null if no image found
                loading[shop.Uid] = false;
            }
            setShopImages(images);
            setLoadingImages(loading);
        };

        fetchImages();
    }, [shopResults]);

    const handleShareClick = (shopId) => {
        const url = `http://localhost:3000/${cityName}/${shopId}`;
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: "Check out this shop!",
                url,
            }).catch((error) => console.error("Error sharing:", error));
        } else {
            navigator.clipboard.writeText(url).then(() => {
                alert("URL copied to clipboard");
            }).catch((error) => console.error("Error copying to clipboard:", error));
        }
    };

    if (shopResults.length === 0) {
        return (
            <div className="flex w-full flex-col space-y-3 mt-5">
                {[...Array(5)].map((_, idx) => (
                    <div
                        key={idx}
                        className="flex h-32 w-full flex-row items-start gap-3 px-2 py-1 shadow-md shadow-violet-200"
                    >
                        <div>
                            <Skeleton className="h-28 w-24" />
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <Skeleton className="h-6 w-56" />
                            <Skeleton className="h-2 w-40" />
                            <Skeleton className="h-2 w-32" />
                            <Skeleton className="h-2 w-32" />
                            <div className="mt-3 flex flex-row gap-4">
                                <Skeleton className="h-6 w-32" />
                                <Skeleton className="h-6 w-32" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="mt-2 w-full space-y-4">
            {shopResults.map((shop, index) => (
                <div
                    key={`${shop._id}-${index}`} // Use a combination of _id and index to ensure uniqueness
                    ref={index === shopResults.length - 1 ? lastShopElementRef : null}
                    className="relative mb-4 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    {/* Image and Shop Details */}
                    <Link href={`/${cityName}/${shop._id}`} className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="relative h-36 w-28 rounded-md overflow-hidden shadow-md">
                                {loadingImages[shop.Uid] ? (
                                    <Skeleton className="h-full w-full" />
                                ) : (
                                    <Image
                                        priority={true}
                                        alt=""
                                        src={
                                            shopImages[shop.Uid] ||
                                            (shop.Category === "Beauty Parlour" ? "/noimg/1.jpg" :
                                                shop.Category === "Men’s Salon" ? "/noimg/8.jpg" :
                                                    shop.Category === "Massage" ? "/noimg/3.jpg" :
                                                        shop.Category === "Spa" ? "/noimg/10.jpg" :
                                                            shop.Category === "Tattoo" ? "/noimg/5.jpg" : "/default.jpg") // fallback to a default image
                                        }
                                        layout="fill"
                                        className="object-cover"
                                    />
                                )}
                            </div>
                        </div>
                        {/* Shop Details */}
                        <div className="flex -mt-1 flex-col justify-between w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <FcShop />
                                        <span className="text-lg font-bold text-gray-900 truncate">
                                            {shop.Name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <CiLocationOn />
                                        <span className="truncate">
                                            {shop.Address ? (
                                                (() => {
                                                    const addressParts = shop.Address.split(",").map(part => part.trim());
                                                    if (addressParts.length >= 4) {
                                                        return addressParts.slice(-4, -2).join(", ");
                                                    } else if (addressParts.length === 3) {
                                                        return addressParts.slice(-3, -1).join(", ");
                                                    } else {
                                                        return addressParts.join(", ");
                                                    }
                                                })()
                                            ) : (
                                                `${shop.Area}, ${shop.City}`
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center px-2 py-0.5 bg-green-700 rounded-md">
                                        <IoIosStar className="text-sm text-white" />
                                        <span className="ml-1 text-sm text-white">
                                            {shop.Rating}
                                        </span>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-700">
                                        {shop.Reviews} + Reviews
                                    </span>
                                </div>
                                {shop.Service && (
                                    <div className="flex items-center gap-2 text-sm text-green-700">
                                        <HiArrowTrendingUp />
                                        <span className="font-semibold">
                                            {shop.Service} years of service
                                        </span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center text-sm font-semibold text-gray-700">
                                        {shop.responseTime && (
                                            <span className="w-40 flex flex-row items-center truncate">
                                                <FcClock className="mr-1" />
                                                <span>Responds in {shop.responseTime} mins</span>
                                            </span>
                                        )}
                                        {shop.responseTime && shop.visitCount && (
                                            <span className="mx-1">|</span>
                                        )}
                                        {shop.visitCount && (
                                            <>
                                                {shop.visitCount} visits...
                                            </>
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* Action Buttons */}
                    <div className="flex  gap-4 items-center mt-3">
                        <div className="flex gap-3 ">
                            <button className="flex items-center gap-2 h-9 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white rounded-md px-4 py-2 transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                                <GrLocation className="text-lg" />
                                <span className="text-sm font-medium">
                                    Visit Now
                                </span>
                            </button>
                            <button className="flex items-center gap-2 h-9 w-32 bg-transparent border border-gray-700 text-gray-700 rounded-md px-4 py-2 transition-transform duration-200 ease-in-out hover:bg-gray-700 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-700">
                                <LuPhoneCall className="text-lg" />
                                <span className="text-sm font-medium">
                                    Contact
                                </span>
                            </button>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => handleShareClick(shop._id)} className="h-9 w-9 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full transition-transform duration-200 ease-in-out hover:bg-gray-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300">
                                <PiShareFatDuotone className="text-xl" />
                            </button>
                            <button onClick={() => likeShop(shop.Uid)} className="h-9 w-9 flex items-center justify-center bg-red-100 text-red-500 rounded-full transition-transform duration-200 ease-in-out hover:bg-red-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300">
                                <PiHeartStraightBold className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default ShopListing;
