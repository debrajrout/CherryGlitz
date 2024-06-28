import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

export default function ManHeader() {
    return (
        <div className="fixed z-50 flex h-14 w-full flex-row  items-center gap-6 bg-zinc-800/95 px-5">
            {" "}
            <div className="ml-6 flex flex-row items-center gap-1">
                {" "}
                <span className=" text-2xl font-semibold  text-[#8C0C0D]">C</span>
                <Link href="/" className="-ml-1">
                    {" "}
                    <span className="font text-base  font-bold text-red-900 ">
                        herry
                        <span className="ml-1 font-sans text-xl font-bold text-orange-400">
                            Glitz
                        </span>
                    </span>
                </Link>
            </div>
            <AiOutlineHome className="text-2xl text-white" />
        </div>
    );
}
