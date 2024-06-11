import React from "react";

import Login from "../buttons/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "../buttons/Logout";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { LuDownloadCloud } from "react-icons/lu";
import CartSection from "./CartSection";
import MenuSection from "./MenuSection";
import Link from "next/link";

const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed  left-0 right-0 top-0 z-[100] flex h-16 w-full flex-row items-center justify-between  bg-white px-3 py-3 shadow-sm shadow-black/50 ">
      <div className="flex flex-row items-center justify-center ">
        <MenuSection />
        <div className="ml-11">
          {" "}
          <span className="-mr-1 text-3xl font-semibold  text-[#8C0C0D]">
            C
          </span>
          <Link href="/">
            {" "}
            <span className="font text-base font-bold text-red-900 ">
              herry
              <span className="font-sans text-xl font-bold text-orange-400">
                Glitz
              </span>
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-5 ">
        <div className=" flex flex-row justify-center items-center rounded-full gap-1 py-[2px] px-1 -mr-2 bg-rose-200/50  ring-1 ring-rose-500/60 ">
          < LuDownloadCloud className="text-lg text-black/70  " />
          <span className="text-xs text-black/70">Our app</span>
        </div>
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
