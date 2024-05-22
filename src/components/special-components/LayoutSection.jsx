"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

export function LayoutGridDemo() {
  return (
    <div className=" -mt-[1px] flex h-48 w-full flex-row items-center gap-2 overflow-x-auto bg-black/85 px-2">
      <div className="flex h-44 w-1/3 flex-col gap-1  rounded-md bg-white/90 p-2 ">
        <div className="h-22 w-full overflow-hidden rounded-lg shadow-md  shadow-black">
          <Image
            alt=""
            src="/mancat/test.png"
            width={260}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="flex h-16 w-full flex-col p-2 ">
          <span className="text-xl font-bold">sdalsjd</span>
          <span className="text-xs">sdfeudhewdhwekb</span>
        </div>
      </div>
      <div className="flex h-44 w-1/3 flex-col gap-1  rounded-md bg-white/80 p-2 ">
        <div className="h-22 w-full overflow-hidden rounded-lg shadow-md  shadow-black">
          <Image
            alt=""
            src="/mancat/test.png"
            width={260}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="flex h-16 w-full flex-col p-2 ">
          <span className="text-xl font-bold">sdalsjd</span>
          <span className="text-xs">sdfeudhewdhwekb</span>
        </div>
      </div>{" "}
      <div className="flex h-44 w-1/3 flex-col gap-1  rounded-md bg-white/80 p-2 ">
        <div className="h-22 w-full overflow-hidden rounded-lg shadow-md  shadow-black">
          <Image
            alt=""
            src="/mancat/test.png"
            width={260}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="flex h-16 w-full flex-col p-2 ">
          <span className="text-xl font-bold">sdalsjd</span>
          <span className="text-xs">sdfeudhewdhwekb</span>
        </div>
      </div>{" "}
      <div className="flex h-44 w-1/3 flex-col gap-1  rounded-md bg-white/80 p-2 ">
        <div className="h-22 w-full overflow-hidden rounded-lg shadow-md  shadow-black">
          <Image
            alt=""
            src="/mancat/test.png"
            width={260}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="flex h-16 w-full flex-col p-2 ">
          <span className="text-xl font-bold">sdalsjd</span>
          <span className="text-xs">sdfeudhewdhwekb</span>
        </div>
      </div>{" "}
      <div className="flex h-44 w-1/3 flex-col gap-1  rounded-md bg-white/80 p-2 ">
        <div className="h-22 w-full overflow-hidden rounded-lg shadow-md  shadow-black">
          <Image
            alt=""
            src="/mancat/test.png"
            width={260}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="flex h-16 w-full flex-col p-2 ">
          <span className="text-xl font-bold">sdalsjd</span>
          <span className="text-xs">sdfeudhewdhwekb</span>
        </div>
      </div>{" "}
      <div className="flex h-44 w-1/3 flex-col gap-1  rounded-md bg-white/80 p-2 ">
        <div className="h-22 w-full overflow-hidden rounded-lg shadow-md  shadow-black">
          <Image
            alt=""
            src="/mancat/test.png"
            width={260}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="flex h-16 w-full flex-col p-2 ">
          <span className="text-xl font-bold">sdalsjd</span>
          <span className="text-xs">sdfeudhewdhwekb</span>
        </div>
      </div>
    </div>
  );
}
