"use client";
import { useEffect, useState } from "react";
import { fetchShopById } from "@/actions/fetchAll";
import { fetchAllImages } from "@/actions/aws";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { CiLocationOn } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { HiArrowTrendingUp } from "react-icons/hi2";
import {
    GiCutDiamond,
    GiHairStrands,
    GiPalmTree,
    GiScalpel,
    GiHealing,
} from "react-icons/gi";
import { FiCopy, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp, FaDirections, FaShareAlt, FaPen } from "react-icons/fa";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { DialogDemo } from "@/components/Reviews/ReviewPopover";
import { getShopReviews } from "@/actions/fetchReviews";
import ReviewCard from "@/components/Reviews/ReviewCard";

export default function ShopPage({ params }) {
    const id = params.shopId;
    const [shop, setShop] = useState(null);
    const [allImages, setAllImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState("");
    const [copied, setCopied] = useState(false);
    const [reviews, setReviews] = useState([]);
    const categoryIcons = {
        "Beauty Parlour": <GiCutDiamond className="text-base text-red-600" />,
        "Men's Salon": <GiHairStrands className="text-base text-blue-600" />,
        Massage: <GiHealing className="text-base text-green-600" />,
        Tattoo: <GiScalpel className="text-base text-black" />,
        Spa: <GiPalmTree className="text-base text-purple-600" />,
    };

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const shopData = await fetchShopById(id);
                    const imageUrls = await fetchAllImages(shopData.Uid);
                    const reviewsData = await getShopReviews(id);
                    console.log("Shop Data:", shopData);
                    console.log("Image URLs:", imageUrls);
                    console.log("Reviews Data:", reviewsData);
                    setShop(shopData);
                    setAllImages(imageUrls);
                    setMainImage(imageUrls[0]); // Set the first image as the main image initially
                    setReviews(reviewsData.reviews);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching shop data:", error);
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <Skeleton className="h-32 w-32" />
            </div>
        );
    }

    if (!shop) {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <p>Shop not found</p>
            </div>
        );
    }

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const today = new Date().getDay();
    let openingTimes = [];
    let todayOpeningTime = "Closed";

    if (shop.Time) {
        openingTimes = shop.Time.split("|");
        todayOpeningTime =
            openingTimes.find((time) => time.startsWith(daysOfWeek[today])) ||
            "Closed";
    }

    const handlePhoneClick = () => {
        window.location.href = `tel:${shop.Phone}`;
    };

    const handleWhatsAppClick = async () => {
        const phoneNumber = shop.Phone.replace(/[^\d]/g, "");
        try {
            window.open(
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello")}`,
                "_blank",
            );
        } catch (error) {
            toast.error("Whatsapp not found");
        }
    };

    const handleShareClick = () => {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: "Check out this shop!",
                url,
            });
        } else {
            navigator.clipboard.writeText(url);
            alert("URL copied to clipboard");
        }
    };

    const handleCopy = () => {
        navigator.clipboard
            .writeText(shop.Address)
            .then(() => {
                setCopied(true);
                toast.success("Address copied to clipboard");
                setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
            })
            .catch((err) => {
                toast.error("Failed to copy address");
            });
    };

    return (
        <section className="container mx-auto mt-[45px] px-3 py-8 md:px-6">
            <div className="grid items-start gap-4 lg:grid-cols-2">
                <div>
                    {mainImage && (
                        <Image
                            src={mainImage}
                            alt="Product Image"
                            width={600}
                            height={600}
                            className="h-80 w-full cursor-pointer rounded-lg object-cover"
                        />
                    )}
                    <div className="mt-4 flex h-32 flex-row gap-2 overflow-x-auto py-1">
                        {allImages.map((imageUrl, index) => (
                            <Image
                                key={index}
                                src={imageUrl}
                                alt={`Product Thumbnail ${index + 1}`}
                                width={200}
                                height={200}
                                className="aspect-square w-full cursor-pointer rounded-lg object-cover"
                                onClick={() => setMainImage(imageUrl)}
                            />
                        ))}
                    </div>
                </div>
                <div className="-mt-2">
                    <span className="text-xl font-bold text-black/80">{shop.Name}</span>
                    <div className="flex flex-row  items-center gap-2">
                        <div className="duration-2000 mt-1 flex h-6 w-14 transform animate-shimmer flex-row items-center justify-center gap-[3px] rounded-md bg-gradient-to-r from-primary via-slate-500 to-blue-950 bg-[length:200%_200%] shadow-md transition-shadow ease-in-out hover:scale-105 hover:shadow-lg">
                            <IoIosStar className="animate-pulse text-lg text-white" />
                            <span className="mt-[2px] text-sm font-bold text-white">
                                {shop.Rating}
                            </span>
                        </div>
                        {shop.Reviews > 0 && (
                            <span className="mt-1 text-sm font-semibold text-primary transition-colors duration-200 ease-in-out hover:text-secondary">
                                {shop.Reviews} + Reviews
                            </span>
                        )}
                        <DialogDemo uid={id} />
                    </div>
                    <div className="flex flex-row items-center justify-start">
                        <CiLocationOn className="mt-1 text-sm" />
                        <span className="mt-1 text-sm font-semibold text-black/50">
                            {shop.Area}, {shop.City}
                        </span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="mt-1 flex flex-row items-center justify-start gap-1">
                            {categoryIcons[shop.Category] || (
                                <HiArrowTrendingUp className="text-base text-red-600" />
                            )}
                            <span className="text-base">{shop.Category}</span>
                        </div>
                        <div className="mt-2 h-1 w-1 rounded-full bg-black/70"></div>
                        {shop.Service && (
                            <span className="mt-1 text-sm font-semibold text-blue-600/50">
                                {shop.Service} years of service
                            </span>
                        )}
                    </div>
                    <span>{shop.Category2}</span>

                    {shop.Time && (
                        <div className="mt-1">
                            <div className="flex flex-row gap-2">
                                <p className="font-semibold text-cyan-600">
                                    Opens at: {todayOpeningTime}
                                </p>
                                <Drawer>
                                    <DrawerTrigger className="flex flex-row items-center font-bold text-black/50">
                                        <span className="text-xs">openings</span>{" "}
                                        <MdOutlineKeyboardArrowDown />
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader>
                                            <DrawerTitle>Opening Times</DrawerTitle>
                                            <DrawerDescription>
                                                Full list of opening times
                                            </DrawerDescription>
                                        </DrawerHeader>
                                        <div className="mt-2 space-y-1">
                                            {openingTimes.map((time, index) => (
                                                <div key={index} className="flex justify-between">
                                                    <span>{time}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <DrawerFooter>
                                            <Button variant="outline">
                                                <DrawerClose>Close</DrawerClose>
                                            </Button>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-4 flex flex-row items-center gap-8 px-3 py-1">
                <div
                    className="flex cursor-pointer flex-col items-center justify-center rounded-xl p-3 ring-1"
                    onClick={handlePhoneClick}
                >
                    <FiPhoneCall className="text-3xl text-blue-600 hover:text-blue-800" />
                    <span className="mt-1 text-xs font-semibold">CallNow</span>
                </div>
                <div
                    className="flex cursor-pointer flex-col items-center justify-center rounded-xl p-3 ring-1"
                    onClick={handleWhatsAppClick}
                >
                    <FaWhatsapp className="text-3xl text-green-600 hover:text-green-800" />
                    <span className="mt-1 text-xs font-semibold">Whatsapp</span>
                </div>

                <div
                    className="flex cursor-pointer flex-col items-center justify-center rounded-xl p-3 ring-1"
                    onClick={handleWhatsAppClick}
                >
                    <FaWhatsapp className="text-3xl text-green-600 hover:text-green-800" />
                    <span className="mt-1 text-xs font-semibold">Whatsapp</span>
                </div>
                <div
                    className="flex w-[70px] cursor-pointer flex-col  items-center justify-center rounded-xl p-3 ring-1"
                    onClick={handleShareClick}
                >
                    <FaShareAlt className="text-3xl text-yellow-600 hover:text-yellow-800" />
                    <span className="mt-1 text-xs font-semibold">Share</span>
                </div>
            </div>
            <Link
                href={shop.Map}
                target="_blank"
                className="mt-3 flex h-11 w-full flex-row items-center justify-center gap-2 rounded-lg bg-blue-600 "
            >
                <span className="text-base font-normal text-white ">Visit Now</span>
                <FaDirections className=" ml-1 text-xl" />
            </Link>

            {/* Add the Tab Section here */}
            <Tabs defaultValue="overview" className="mt-6">
                <TabsList className="flex  w-full justify-around border-b bg-white">
                    <TabsTrigger value="overview" className="py-2">
                        Details
                    </TabsTrigger>
                    <TabsTrigger value="reviews" className="py-2">
                        Reviews
                    </TabsTrigger>
                    <TabsTrigger value="services" className="py-2">
                        Services
                    </TabsTrigger>
                    <TabsTrigger value="photos" className="py-2">
                        Photos
                    </TabsTrigger>
                </TabsList>
                <Separator className="bg-black/60" />
                <TabsContent value="overview">
                    <div className="flex w-full flex-col gap-2">
                        <div className="flex flex-col">
                            <span className="text-lg font-bold">Full address</span>
                            <div className="flex flex-col items-start gap-2">
                                <span className="text-sm font-semibold text-black/70">
                                    {shop.Address}
                                </span>
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center p-1 text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
                                    title="Copy to clipboard"
                                >
                                    <FiCopy className="text-lg" />
                                    <span className="ml-1">{copied ? "Copied!" : "Copy"}</span>
                                </button>
                            </div>
                        </div>
                        <Separator className="bg-black/60" />
                        <div className="flex flex-col">
                            <span className="text-lg font-bold">Ratings and Reviews</span>
                            <div>
                                <span className="text-base font-bold text-blue-800">
                                    {shop.Reviews}+ reviews with{" "}
                                </span>

                                <span className="text-base font-bold text-pink-700">
                                    {shop.Rating} star ratting
                                </span>
                            </div>
                        </div>
                        <Separator className="bg-black/30" />
                        <div className="flex flex-col">
                            <span className="text-lg font-bold">Ratings and Reviews</span>
                            <div>
                                <span className="text-base font-bold text-blue-800">
                                    {shop.Reviews}+ reviews with{" "}
                                </span>

                                <span className="text-base font-bold text-pink-700">
                                    {shop.Rating} star ratting
                                </span>
                            </div>
                        </div>
                        <Separator className="bg-black/30" />
                    </div>
                </TabsContent>
                <TabsContent value="reviews">
                    <div className="w-full ">
                        <h2 className="text-xl font-bold text-black/80">
                            Reviews of -{" "}
                            <span className="font-semibold text-slate-800">{shop.Name}</span>
                        </h2>

                        <div className="mx-auto mt-2">
                            <button className=" relative flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/90 px-8 py-2 text-sm text-white transition duration-200 hover:shadow-2xl hover:shadow-white/[0.1]">
                                <div className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-teal-500 to-transparent shadow-2xl" />
                                <FaPen className="relative z-20" />
                                <DialogDemo uid={id} />
                            </button>
                        </div>

                        <section className="bg-white mt-6">
                            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:py-16 lg:px-8">
                                <div className="mx-auto max-w-3xl text-center">
                                    <h2 className="text-3xl font-bold text-gray-900">What Our Customers Are Saying</h2>
                                    <p className="mt-4 text-gray-500 sm:text-xl">
                                        Read the reviews from our satisfied customers. Your feedback helps us improve and provide better service.
                                    </p>
                                </div>

                                <div className="mt-8 sm:mt-12">
                                    <div className="flex flex-col sm:flex-row justify-center gap-8">
                                        <div className="flex flex-col items-center rounded-lg bg-blue-50 p-8 text-center shadow-lg">
                                            <dt className="text-lg font-medium text-gray-500">{shop.Reviews} Google Reviews</dt>
                                            <dd className="mt-2 text-4xl font-extrabold text-blue-600 md:text-5xl">{shop.GoogleRating}</dd>
                                            <dd className="mt-1 text-lg text-gray-500">5-star average rating</dd>
                                        </div>

                                        <div className="flex flex-col items-center rounded-lg bg-blue-50 p-8 text-center shadow-lg">
                                            <dt className="text-lg font-medium text-gray-500">Cherry Glitz Reviews</dt>
                                            <dd className="mt-2 text-4xl font-extrabold text-blue-600 md:text-5xl">{shop.CherryGlitzRating}</dd>
                                            <dd className="mt-1 text-lg text-gray-500">4.5-star average rating</dd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Separator className="my-4" />

                        <div>
                            {reviews.length > 0 ? (
                                reviews.map((review, index) => (
                                    <ReviewCard key={index} review={review} />
                                ))
                            ) : (
                                <p>No reviews yet. Be the first to add a review!</p>
                            )}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="services">
                    <div className="h-96 w-full bg-slate-400">hi</div>
                </TabsContent>
                <TabsContent value="photos">
                    <div className="h-96 w-full bg-slate-400">hi</div>
                </TabsContent>
            </Tabs>
        </section>
    );
}
