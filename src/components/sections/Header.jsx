import React from "react";

import Login from "../buttons/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "../buttons/Logout";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { IoSearchOutline } from "react-icons/io5";

import CartSection from "./CartSection";
import MenuSection from "./MenuSection";
import Link from "next/link";

const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function
  Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed  left-0 right-0 top-0 z-[100] flex h-16 w-full flex-row items-center justify-between  bg-white px-3 py-3 shadow-sm shadow-black/50 ">
      <div className="flex flex-row items-center justify-center ">
        <MenuSection />

        <span className="mb-[1px] text-3xl font-semibold  text-blue-700">
          C
        </span>
        <Link href="/"> <span className="font text-base font-bold text-blue-800 ">
          herry
          <span className="font-sans text-xl font-bold text-orange-400">
            Glitz
          </span>
        </span></Link>

      </div>

      <div className="flex flex-row items-center justify-center gap-5 ">
        <Link href="/search"><IoSearchOutline className="h-8 w-8  text-black/70 " /></Link>

        <CartSection />
        {session ? (
          <>
            <Logout url={session?.user?.image} />
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </div>
  );
}
