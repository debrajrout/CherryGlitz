"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { likeShop } from "@/actions/LikeShop";
import { FcShop } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { PiHeartStraightBold, PiPlusLight } from "react-icons/pi";
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
                            {loadingImages[shop.Uid] || !shopImages[shop.Uid] ? (
                                <Skeleton className="h-full w-full" />
                            ) : (
                                <Image
                                    alt=""
                                    src={shopImages[shop.Uid]}
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
                                    <MdPeople className="text-base text-blue-600" />
                                    <span className="text-sm font-medium text-black">
                                        {shop.visitCount} inquires from last month
                                    </span>
                                </div>
                            )}
                        </div>
                    </Link>
                    {/* Action Buttons */}
                    <div className="w-full flex flex-row gap-3 mt-3 ">

                        <button className=" flex flex-row h-9  w-44 animate-shimmer items-center justify-center gap-1 rounded-md border border-slate-300 bg-[linear-gradient(110deg,#6366f1,45%,#818cf8,55%,#6366f1)] bg-[length:200%_100%] px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-indigo-600">
                            <GrLocation className="text-white text-lg" />
                            <span className="text-sm font-medium text-white">
                                Visite Now
                            </span>
                        </button>

                        <button className="gap-2 shadow-[inset_0_0_0_2px_#616467] flex flex-row justify-center items-center text-black  h-9  w-44 rounded-lg tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">

                            <LuPhoneCall className="text-xl" />
                            <span className="text-xs">
                                Contact Now
                            </span>
                        </button>



                        <button onClick={() => likeShop(shop.Uid)} className="w-9 h-9 ring-black ring-1  flex items-center justify-center rounded-md">
                            <PiHeartStraightBold className="text-xl text-black/50 " />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShopListing;
