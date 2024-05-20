"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import Image from "next/image";

export function MovingBorderDemo() {
  return (
    <div className="mt-4 flex w-full flex-row justify-between bg-transparent">
      <div className="flex flex-col items-center justify-center">
        <Button borderRadius="1.55rem">
          <Image
            src="/category/hairdresser.png"
            alt=""
            width={50}
            height={50}
          />
        </Button>
        <span className="text-white">Salon</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button borderRadius="1.55rem">
          <Image src="/category/makeup.png" alt="" width={50} height={50} />
        </Button>
        <span className="text-white">Salon</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button borderRadius="1.55rem">
          <Image
            src="/category/tattoo-studio.png"
            alt=""
            width={50}
            height={50}
          />
        </Button>
        <span className="text-white">Salon</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button borderRadius="1.55rem">
          <Image src="/category/massage.png" alt="" width={50} height={50} />
        </Button>
        <span className="text-white">Salon</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button borderRadius="1.55rem">
          <Image src="/category/spa.png" alt="" width={50} height={50} />
        </Button>
        <span className="text-white">Salon</span>
      </div>
    </div>
  );
}
