"use client";
import React, { useState, useEffect } from "react";
import { IoNavigateOutline, IoRemoveCircleOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { fetchUser } from "@/actions/getUser";
import { fetchLiked } from "@/actions/fetchAll";
import { fetchFirstImage } from "@/actions/aws";

export default function CartSection() {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const session = await getSession();
            if (session) {
                const userData = await fetchUser();
                const likedShops = await fetchLiked(userData.liked);

                // Fetch images for each liked shop
                const shopsWithImages = await Promise.all(
                    likedShops.map(async (shop) => {
                        const imageUrl = await fetchFirstImage(shop.City, shop.Uid);
                        return { ...shop, imageUrl };
                    })
                );

                setUser(userData);
                setCartItems(shopsWithImages);
            }
        };
        fetchData();
    }, []);

    const handleRemoveItem = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.Uid !== itemId));
    };

    return (
        <div className="flex flex-col mt-6 px-2">
            <div className="flex flex-col items-start justify-end  font-semibold px-1 mb-2">
                <span className="px-1 text-2xl font-semibold text-black">Your Cart</span>
                <span className="text-sm px-2">Explore your liked shop</span>
            </div>

            <div className="-mt-2 flex flex-row overflow-x-auto">
                {cartItems && cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div
                            key={item.Uid}
                            className="block w-64 flex-shrink-0 rounded-lg p-4 shadow-sm shadow-indigo-100 bg-white"
                        >
                            <div className="w-full h-32 rounded-md overflow-hidden mb-4">
                                <Image
                                    alt={item.Name}
                                    src={item.imageUrl || "/default-image.jpg"}
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-gray-800 mb-2 truncate">{item.Name}</h2>
                                <div className="text-sm text-gray-500 mb-1">
                                    {item.Area}, {item.City}
                                </div>
                                <div className="text-sm font-medium text-gray-700 mb-2">
                                    Category: {item.Category}
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs mt-4">
                                <div className="flex items-center gap-2">
                                    <IoNavigateOutline className="text-indigo-700" />
                                    <Link
                                        href={item.Map}
                                        target="_blank"
                                        className="text-sm font-semibold text-blue-600"
                                    >
                                        Navigate
                                    </Link>
                                </div>
                                <div
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => handleRemoveItem(item.Uid)}
                                >
                                    <IoRemoveCircleOutline className="text-red-500" />
                                    <span className="text-sm font-semibold text-red-500">Remove</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
}
