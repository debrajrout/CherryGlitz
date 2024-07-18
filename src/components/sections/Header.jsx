import React from "react";
import Login from "../buttons/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "../buttons/Logout";
import { LuDownloadCloud } from "react-icons/lu";
import CartSection from "./CartSection";
import MenuSection from "./MenuSection";
import Link from "next/link";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed px-5 left-0 right-0 top-0 z-[100] flex h-14 w-full flex-row items-center justify-between  bg-neutral-200/95 py-3  ">
      <div className="flex flex-row items-center justify-center ">
        <MenuSection />
        <div className=" flex flex-row items-center gap-1">
          {" "}
          <span className=" text-2xl font-semibold  text-[#8C0C0D]">
            C
          </span>
          <Link href="/" className="-ml-1">
            {" "}
            <span className="font text-base  font-bold text-red-900 ">
              herry
              <span className="font-sans text-xl ml-1 font-bold text-orange-400">
                Glitz
              </span>
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-5 ">
        <div className=" flex flex-row justify-center items-center rounded-full gap-1 py-[2px] px-1 -mr-2 bg-rose-200/50  ring-1 ring-rose-500/60 ">
          < LuDownloadCloud className="text-base text-black/70  " />
          <span className="text-[10px] font-semibold text-black/70">Our app</span>
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
