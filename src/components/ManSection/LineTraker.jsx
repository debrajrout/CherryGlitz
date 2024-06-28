"use client";
import React from "react";

import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6">
            <div className="relative mx-auto max-w-2xl pt-4 antialiased">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10 px-3">
                        {item.badge && (
                            <h2 className="mb-4 w-fit rounded-lg bg-black/40 px-4 py-1 text-sm text-white">
                                {item.badge}
                            </h2>
                        )}

                        <p className="mb-4 text-xl text-white">{item.title}</p>

                        <div className="prose prose-sm dark:prose-invert text-sm text-white">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="mb-10 rounded-lg object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "Crew Cut",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    A classic, low-maintenance cut perfect for a clean, sharp look. This
                    short haircut is ideal for those who prefer simplicity without
                    sacrificing style.
                </p>
                <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "Hair Cutting Services",
        image: "/hairstyle/crew.jpg",
    },
    {
        title: "Buzz Cut",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    The ultimate in simplicity and style, ideal for those who prefer a
                    no-fuss haircut. This uniform short length cut is perfect for a fresh,
                    easy-to-maintain look.
                </p>   <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/buzz.jpg",
    },
    {
        title: "Fade Haircut (Low, Mid, High)",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Seamlessly blended fades tailored to your preference, adding a modern
                    twist to any look. Choose between low, mid, or high fades to
                    complement your personal style.
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/faded.jpeg",
    },
    {
        title: "Undercut",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Edgy and versatile, the undercut adds a bold statement to your style.
                    This cut features shorter sides and back, with longer hair on top for
                    a striking contrast.
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/undercut.jpg",
    },
    {
        title: "Pompadour",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Elevate your look with a voluminous pompadour, exuding confidence and
                    class. This iconic hairstyle adds height and shape, perfect for making
                    a statement.{" "}
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/pampa.jpg",
    },
];
