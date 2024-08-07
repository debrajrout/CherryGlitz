"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { likeShop } from "@/actions/LikeShop";
import { FcClock, FcShop } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { PiHeartStraightBold, PiPlusLight, PiShareFatDuotone } from "react-icons/pi";
import { fetchFirstImage } from "@/actions/aws";
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { MdPeople } from "react-icons/md";

const ShopListing = ({ shopResults }) => {
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
        const url = `http://localhost:3000/search/${shopId}`;
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
        <div className="mt-2 w-full">
            {shopResults.map((shop) => (
                <div
                    key={shop._id}
                    className="mb-2 flex w-full flex-col justify-between rounded-lg bg-blue-50/10 p-2 shadow-lg"
                >
                    {/* Image Section */}
                    <Link href={`/search/${shop._id}`} className="flex ">
                        <div className="mr-4 h-[132px] w-24 overflow-hidden rounded-md shadow-md shadow-black/20">
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
                                    width={96}
                                    height={96}
                                    className="h-full w-full object-cover"
                                />
                            )}
                        </div>

                        {/* Shop Details */}
                        <div className="flex w-[70%] flex-col py-1">
                            <div className="flex flex-row items-center justify-start gap-1">
                                <FcShop />
                                <span className="w-5/6 truncate text-lg font-bold">
                                    {shop.Name}
                                </span>
                            </div>

                            <div className="flex flex-row items-center justify-start ">
                                <CiLocationOn className="text-sm " />
                                <span className=" text-sm font-semibold text-black/50">
                                    {shop.Area}, {shop.City}
                                </span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <div className="mt-1 flex h-5 w-11 flex-row items-center justify-center gap-[2px] rounded-md bg-green-700">
                                    <IoIosStar className="text-sm text-white" />
                                    <span className="mt-[1px] text-sm text-white">
                                        {shop.Rating}
                                    </span>
                                </div>

                                <span className="mt-1 text-xs font-semibold text-black/80">
                                    {shop.Reviews} + Reviews
                                </span>

                            </div>
                            {shop.Service && (
                                <div className="flex flex-row items-center gap-1 mt-1 justify-start ">
                                    <HiArrowTrendingUp className="text-base text-red-600" />
                                    <span className="text-sm font-semibold text-blue-600/60">
                                        {shop.Service} years of service
                                    </span>
                                </div>
                            )}

                            {shop.visitCount && (
                                <div className="flex flex-row items-center gap-1 mt-1 justify-start ">

                                    <span className="text-sm font-semibold text-black flex flex-row items-center content-start">
                                        <FcClock className="text-base text-blue-600 mr-1" />   Responds in {shop.responseTime} mins  <MdPeople className="text-base text-blue-600 ml-3 mr-1" /> {shop.visitCount} visits...
                                    </span>
                                </div>
                            )}
                        </div>
                    </Link>
                    {/* Action Buttons */}
                    <div className="w-full flex justify-between flex-row gap-2 mt-3">
                        <button className="flex flex-row h-9 w-40 items-center justify-center gap-1 rounded-md border border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_100%] animate-shimmer px-6 transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2">
                            <GrLocation className="text-white text-lg" />
                            <span className="text-sm font-medium text-white">
                                Visit Now
                            </span>
                        </button>

                        <button className="flex flex-row gap-2 justify-center items-center h-9 w-[150px] rounded-lg tracking-widest uppercase font-bold text-black bg-transparent border-2 border-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                            <LuPhoneCall className="text-xl" />
                            <span className="text-xs">
                                Contact
                            </span>
                        </button>

                        <button onClick={() => handleShareClick(shop._id)} className="w-9 h-9 flex items-center justify-center rounded-md ring-1 ring-gray-500 transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-white hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300">
                            <PiShareFatDuotone className="text-xl text-gray-500" />
                        </button>

                        <button onClick={() => likeShop(shop.Uid)} className="w-9 h-9 flex items-center justify-center rounded-md ring-1 ring-red-500 transition-all duration-300 ease-in-out hover:bg-red-100 hover:text-white hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300">
                            <PiHeartStraightBold className="text-xl text-red-500" />
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ShopListing;
