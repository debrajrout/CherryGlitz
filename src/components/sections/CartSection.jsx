"use client";
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { GrLike } from "react-icons/gr";
import { IoNavigateOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartButton from "../buttons/CartButton";
import { fetchUser } from "@/actions/getUser";
import { fetchLiked } from "@/actions/fetchAll";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FcShop } from "react-icons/fc";
import { MdOutlineCategory } from "react-icons/md";
import Link from "next/link";
import LikeRemove from "../ui/LikeRemove";

export default function CartSection() {
  const [user, setUser] = useState(null);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      if (session) {
        const userData = await fetchUser();
        const initialShops = await fetchLiked(userData.liked);
        setUser(userData);
        setShops(initialShops);
      }
    };
    fetchData();
  }, []);

  const handleRemoveShop = (shopId) => {
    setShops((prevShops) => prevShops.filter(shop => shop.Uid !== shopId));
  };

  return (
    <Sheet>
      <SheetTrigger>
        <CartButton />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="ml-4 flex w-full flex-row items-center gap-2">
            <span className="text-xl font-normal text-blue-500">Liked List</span>{" "}
            <GrLike className="text-base text-blue-500" />
          </SheetTitle>
          <span className="ml-4 text-start text-xs font-semibold text-black/60 ">
            {user?.name}
          </span>
          <div className="flex h-[800px] w-full flex-col gap-2 overflow-y-auto">
            {shops && shops.length > 0 ? (
              shops.map((shop) => (
                <div
                  key={shop._id}
                  className="flex flex-row items-center justify-start p-2 shadow-sm shadow-black/30"
                >
                  <div className="mr-4 h-[100px] w-20 overflow-hidden rounded-md shadow-md">
                    <Image
                      alt=""
                      src="/city/agra.png"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex w-[70%] flex-col py-1">
                    <div className="flex flex-row items-center justify-start gap-1">
                      <FcShop />
                      <span className="w-5/6 truncate text-base font-semibold">
                        {shop.Name}
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <CiLocationOn className="text-sm" />
                      <span className="text-sm font-semibold text-black/50">
                        {shop.Area}, {shop.City}
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1">
                      <MdOutlineCategory className="text-sm text-black/90" />
                      <span className="text-base font-normal text-black/70">
                        {shop.Category}
                      </span>
                    </div>
                    <div className="flex w-full flex-row justify-between pr-2 font-semibold">
                      <div>
                        <Link
                          href={shop.Map}
                          target="_blank"
                          className="flex items-center gap-1 text-black/70"
                        >
                          <IoNavigateOutline className="text-green-400" />
                          <span>Navigate</span>
                        </Link>
                      </div>
                      <LikeRemove uid={shop.Uid} onRemove={handleRemoveShop} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No liked shops found.</p>
            )}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
