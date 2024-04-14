import React from "react";
import { CgProfile } from "react-icons/cg";
import Login from "../buttons/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "../buttons/Logout";
import Image from "next/image";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg  mt-1  flex h-16 w-full flex-row  items-center   justify-between bg-white px-3 py-3   ">
      <div className="relative flex h-full flex-row items-center ">
        <Image
          width={47}
          height={45}
          alt="Logo"
          src="/images/logof.png"
          className="absolute mb-2"
        />
        <span className="ml-10 mt-[5px] text-base font-semibold text-pink-600 ">
          herry <span className="text-black">Glitz</span>
        </span>
      </div>

      <div className="mr-1 flex flex-row items-center justify-center gap-3 ">
        {session ? (
          <>
            <span className="text-sm font-medium text-slate-600">
              {session?.user?.name}
            </span>
            <Logout url={session?.user?.image} />
          </>
        ) : (
          <>
            <CgProfile className="h-6 w-6 text-white" />
            <Login />
          </>
        )}

        <div className="hidden h-8 w-8 rounded-full bg-black"></div>
      </div>
    </div>
  );
}
