import React from "react";
import { CgProfile } from "react-icons/cg";
import Login from "../buttons/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "../buttons/Logout";
import Image from "next/image";
import { Pacifico } from "next/font/google";

import CartSection from "./CartSection";

const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed  left-0 right-0 top-0 z-50 flex h-16 w-full flex-row items-center justify-between bg-black px-3 py-3 shadow-sm shadow-white/50  ">
      <div className="flex flex-row items-center justify-center ">
        <span className="mb-[1px] text-3xl font-semibold  text-blue-700">
          C
        </span>
        <span className="font text-base font-bold text-blue-800 ">
          herry
          <span className="font-sans text-xl font-bold text-orange-400">
            Glitz
          </span>
        </span>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 ">
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
