"use client";
import { useEffect, useState } from 'react';
import { fetchShopById } from '@/actions/fetchAll';
import { fetchAllImages } from '@/actions/aws';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from "@/components/ui/button";
import { CiLocationOn } from 'react-icons/ci';
import { IoIosStar } from 'react-icons/io';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { GiCutDiamond, GiHairStrands, GiPalmTree, GiScalpel, GiHealing } from "react-icons/gi";
import { FiCopy, FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp, FaDirections, FaShareAlt } from 'react-icons/fa';
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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { toast } from "sonner";

export default function ShopPage({ params }) {
    const id = params.shopId;
    const [shop, setShop] = useState(null);
    const [allImages, setAllImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState('');
    const [copied, setCopied] = useState(false);
    const categoryIcons = {
        "Beauty Parlour": <GiCutDiamond className="text-base text-red-600" />,
        "Men's Salon": <GiHairStrands className="text-base text-blue-600" />,
        "Massage": <GiHealing className="text-base text-green-600" />,
        "Tattoo": <GiScalpel className="text-base text-black" />,
        "Spa": <GiPalmTree className="text-base text-purple-600" />
    };

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const shopData = await fetchShopById(id);
                    const imageUrls = await fetchAllImages(shopData.Uid);
                    console.log('Shop Data:', shopData);
                    console.log('Image URLs:', imageUrls);
                    setShop(shopData);
                    setAllImages(imageUrls);
                    setMainImage(imageUrls[0]); // Set the first image as the main image initially
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching shop data:', error);
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [id]);

    if (loading) {
        return (
            <div className='h-screen w-screen flex items-center justify-center'>
                <Skeleton className='h-32 w-32' />
            </div>
        );
    }

    if (!shop) {
        return (
            <div className='h-screen w-screen flex items-center justify-center'>
                <p>Shop not found</p>
            </div>
        );
    }

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    let openingTimes = [];
    let todayOpeningTime = "Closed";

    if (shop.Time) {
        openingTimes = shop.Time.split('|');
        todayOpeningTime = openingTimes.find(time => time.startsWith(daysOfWeek[today])) || "Closed";
    }

    const handlePhoneClick = () => {
        window.location.href = `tel:${shop.Phone}`;
    };

    const handleWhatsAppClick = async () => {
        const phoneNumber = shop.Phone.replace(/[^\d]/g, '');
        try {
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello")}`, '_blank');
        } catch (error) {
            toast.error("Whatsapp not found")
        }
    };

    const handleShareClick = () => {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: 'Check out this shop!',
                url,
            });
        } else {
            navigator.clipboard.writeText(url);
            alert('URL copied to clipboard');
        }
    };



    const handleCopy = () => {
        navigator.clipboard.writeText(shop.Address).then(() => {
            setCopied(true);
            toast.success("Address copied to clipboard")
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        }).catch(err => {

            toast.error("Failed to copy address")

        });
    };

    return (
        <section className="container mt-[45px] mx-auto px-3 md:px-6 py-8">
            <div className="grid lg:grid-cols-2 gap-4 items-start">
                <div>
                    {mainImage && (
                        <Image
                            src={mainImage}
                            alt="Product Image"
                            width={600}
                            height={600}
                            className="rounded-lg object-cover h-80 w-full cursor-pointer"
                        />
                    )}
                    <div className="flex flex-row overflow-x-auto gap-2 py-1 h-32 mt-4">
                        {allImages.map((imageUrl, index) => (
                            <Image
                                key={index}
                                src={imageUrl}
                                alt={`Product Thumbnail ${index + 1}`}
                                width={200}
                                height={200}
                                className="rounded-lg object-cover w-full aspect-square cursor-pointer"
                                onClick={() => setMainImage(imageUrl)}
                            />
                        ))}
                    </div>
                </div>
                <div className='-mt-2'>
                    <span className="text-xl font-bold text-black/80">{shop.Name}</span>
                    <div className="flex flex-row items-center gap-2">
                        <div className="mt-1 flex h-6 w-14 flex-row items-center justify-center gap-[3px] rounded-md bg-gradient-to-r from-primary via-slate-500 to-blue-950 bg-[length:200%_200%] animate-shimmer shadow-md hover:shadow-lg transition-shadow duration-2000 ease-in-out transform hover:scale-105">
                            <IoIosStar className="text-lg text-white animate-pulse" />
                            <span className="mt-[2px] text-sm text-white font-bold">
                                {shop.Rating}
                            </span>
                        </div>
                        {shop.Reviews > 0 && (
                            <span className="mt-1 text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200 ease-in-out">
                                {shop.Reviews} + Reviews
                            </span>
                        )}
                    </div>
                    <div className="flex flex-row items-center justify-start">
                        <CiLocationOn className="text-sm mt-1" />
                        <span className="text-sm mt-1 font-semibold text-black/50">
                            {shop.Area}, {shop.City}
                        </span>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className="flex flex-row items-center gap-1 mt-1 justify-start">
                            {categoryIcons[shop.Category] || <HiArrowTrendingUp className="text-base text-red-600" />}
                            <span className='text-base'>{shop.Category}</span>
                        </div>
                        <div className='bg-black/70 mt-2 w-1 h-1 rounded-full'></div>
                        {shop.Service && (
                            <span className="text-sm font-semibold mt-1 text-blue-600/50">
                                {shop.Service} years of service
                            </span>
                        )}

                    </div>
                    <span>
                        {shop.Category2}
                    </span>

                    {shop.Time && (
                        <div className="mt-1">
                            <div className='flex flex-row gap-2'>
                                <p className='font-semibold text-cyan-600'>Opens at: {todayOpeningTime}</p>
                                <Drawer>
                                    <DrawerTrigger className='flex flex-row font-bold text-black/50 items-center'>
                                        <span className='text-xs'>openings</span> <MdOutlineKeyboardArrowDown />
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader>
                                            <DrawerTitle>Opening Times</DrawerTitle>
                                            <DrawerDescription>Full list of opening times</DrawerDescription>
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

            <div className="flex flex-row gap-8 px-3 py-1 mt-4 items-center">
                <div className="flex flex-col items-center justify-center rounded-xl ring-1 p-3 cursor-pointer" onClick={handlePhoneClick}>
                    <FiPhoneCall className="text-3xl text-blue-600 hover:text-blue-800" />
                    <span className='text-xs mt-1 font-semibold'>CallNow</span>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer rounded-xl ring-1 p-3" onClick={handleWhatsAppClick}>
                    <FaWhatsapp className="text-3xl text-green-600 hover:text-green-800" />
                    <span className='text-xs mt-1 font-semibold'>Whatsapp</span>
                </div>


                <div className="flex flex-col justify-center items-center cursor-pointer rounded-xl ring-1 p-3" onClick={handleWhatsAppClick}>
                    <FaWhatsapp className="text-3xl text-green-600 hover:text-green-800" />
                    <span className='text-xs mt-1 font-semibold'>Whatsapp</span>
                </div>
                <div className="flex flex-col w-[70px] justify-center  items-center cursor-pointer rounded-xl ring-1 p-3" onClick={handleShareClick}>
                    <FaShareAlt className="text-3xl text-yellow-600 hover:text-yellow-800" />
                    <span className='text-xs mt-1 font-semibold'>Share</span>
                </div>
            </div>
            <Link href={shop.Map} target='_blank' className='w-full h-11 bg-blue-600 rounded-lg mt-3 flex flex-row justify-center items-center gap-2 '><span className='text-white font-normal text-base '>Visit Now</span><FaDirections className=' text-xl ml-1' /></Link>

            {/* Add the Tab Section here */}
            <Tabs defaultValue="overview" className="mt-6">
                <TabsList className="flex  justify-around w-full border-b bg-white">
                    <TabsTrigger value="overview" className="py-2">Details</TabsTrigger>
                    <TabsTrigger value="reviews" className="py-2">Reviews</TabsTrigger>
                    <TabsTrigger value="services" className="py-2">Services</TabsTrigger>
                    <TabsTrigger value="photos" className="py-2">Photos</TabsTrigger>
                </TabsList>
                <Separator className="bg-black/60" />
                <TabsContent value="overview">
                    <div className='w-full flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold'>
                                Full address
                            </span>
                            <div className='flex flex-col items-start gap-2'>
                                <span className='text-sm font-semibold text-black/70'>
                                    {shop.Address}
                                </span>
                                <button
                                    onClick={handleCopy}
                                    className='flex items-center p-1 text-sm text-blue-500 hover:text-blue-700 focus:outline-none'
                                    title="Copy to clipboard"
                                >
                                    <FiCopy className='text-lg' />
                                    <span className='ml-1'>{copied ? 'Copied!' : 'Copy'}</span>
                                </button>
                            </div>
                        </div>
                        <Separator className="bg-black/60" />
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold'>
                                Ratings and Reviews
                            </span>
                            <div >
                                <span className='text-base font-bold text-blue-800'>
                                    {shop.Reviews}+ reviews with{" "}
                                </span>

                                <span className='text-base font-bold text-pink-700'>
                                    {shop.Rating} star ratting
                                </span>
                            </div>



                        </div>
                        <Separator className="bg-black/30" />
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold'>
                                Ratings and Reviews
                            </span>
                            <div >
                                <span className='text-base font-bold text-blue-800'>
                                    {shop.Reviews}+ reviews with{" "}
                                </span>

                                <span className='text-base font-bold text-pink-700'>
                                    {shop.Rating} star ratting
                                </span>
                            </div>



                        </div>
                        <Separator className="bg-black/30" />
                    </div>
                </TabsContent>
                <TabsContent value="reviews">
                    <div className='w-full h-96 bg-slate-400'>hi</div>
                </TabsContent>
                <TabsContent value="services">
                    <div className='w-full h-96 bg-slate-400'>hi</div>
                </TabsContent>
                <TabsContent value="photos">
                    <div className='w-full h-96 bg-slate-400'>hi</div>
                </TabsContent>
            </Tabs>


        </section>
    );
}
