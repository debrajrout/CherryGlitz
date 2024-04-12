import React from "react";
import { CgProfile } from "react-icons/cg";
import Login from "../buttons/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "../buttons/Logout";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex  h-16 w-full flex-row items-center justify-between  rounded-sm  bg-transparent px-3 py-3  shadow-lg shadow-zinc-800/30 ">
      <div className="text-3xl font-bold text-slate-900">
        Cherry<span className="text-base font-light">Glitz</span>
      </div>

      <div className="mr-1 flex flex-row items-center justify-center gap-3 ">
        {session ? (
          <>
            <span className="text-sm font-medium text-slate-800">
              {session?.user?.name}
            </span>
            <Logout url={session?.user?.image} />
          </>
        ) : (
          <>
            <CgProfile className="h-6 w-6" />
            <Login />
          </>
        )}

        <div className="hidden h-8 w-8 rounded-full bg-black"></div>
      </div>
    </div>
  );
}
