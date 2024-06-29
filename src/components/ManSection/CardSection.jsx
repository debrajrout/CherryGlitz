"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function ThreeDCardDemo() {
    return (
        <div className="flex gap-7 flex-col px-2 items-center justify-center ">
            {" "}
            <CardContainer className="inter-var">
                <CardBody className=" group/card relative  h-auto w-auto rounded-xl border  border-white/[0.2]  bg-black p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]  ">
                    <CardItem translateZ="50" className="text-xl font-bold  text-white">
                        Beard Trim
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className=" mt-2 max-w-sm text-sm   text-neutral-300"
                    >
                        Achieve a perfectly groomed beard with our precise trimming service. Whether you prefer a full beard or a stylish stubble, we will shape it to perfection.
                    </CardItem>
                    <CardItem translateZ="100" className="mt-4 w-full">
                        <Image
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            height="1000"
                            width="1000"
                            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="mt-10 flex items-center justify-between">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="rounded-xl px-4 py-2 text-xs font-normal text-white"
                        >
                            Try now →
                        </CardItem>

                    </div>
                </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
                <CardBody className=" group/card relative  h-auto w-auto rounded-xl border  border-white/[0.2]  bg-black p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]  ">
                    <CardItem translateZ="50" className="text-xl font-bold  text-white">
                        Mustache Trim
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className=" mt-2 max-w-sm text-sm   text-neutral-300"
                    >
                        Keep your mustache neat and defined with our expert trimming. We ensure your mustache complements your overall look with precise shaping.
                    </CardItem>
                    <CardItem translateZ="100" className="mt-4 w-full">
                        <Image
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            height="1000"
                            width="1000"
                            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="mt-10 flex items-center justify-between">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="rounded-xl px-4 py-2 text-xs font-normal text-white"
                        >
                            Try now →
                        </CardItem>

                    </div>
                </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
                <CardBody className=" group/card relative  h-auto w-auto rounded-xl border  border-white/[0.2]  bg-black p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]  ">
                    <CardItem translateZ="50" className="text-xl font-bold  text-white">
                        Neck Shave
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className=" mt-2 max-w-sm text-sm   text-neutral-300"
                    >
                        Experience a clean and smooth finish with our neck shave service. We remove unwanted neck hair to maintain a sharp and polished appearance.
                    </CardItem>
                    <CardItem translateZ="100" className="mt-4 w-full">
                        <Image
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            height="1000"
                            width="1000"
                            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="mt-10 flex items-center justify-between">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="rounded-xl px-4 py-2 text-xs font-normal text-white"
                        >
                            Try now →
                        </CardItem>

                    </div>
                </CardBody>
            </CardContainer>
        </div>
    );
}
