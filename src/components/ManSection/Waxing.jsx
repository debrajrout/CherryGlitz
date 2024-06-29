"use client";
import React from "react";

import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamDemoWax() {
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
        title: "Back Wax    ",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Achieve a smooth and hair-free back with our professional back waxing service. This service is perfect for those who want a clean, polished look without the hassle of daily shaving. Our experts use high-quality wax to ensure minimal discomfort and long-lasting results.
                </p>
                <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "Body Waxing Services",
        image: "/hairstyle/crew.jpg",
    },
    {
        title: "Chest Wax",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Remove unwanted chest hair for a sleek and smooth appearance. Chest waxing provides a neat and tidy look, making it ideal for athletes, bodybuilders, or anyone looking to enhance their physique. Our gentle waxing process leaves your skin soft and hair-free.
                </p>   <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/buzz.jpg",
    },
    {
        title: "Shoulder Wax",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Keep your shoulders hair-free and smooth with our precise shoulder waxing. This service is great for maintaining a well-groomed appearance, especially for those who frequently wear tank tops or go shirtless. Our experienced staff ensures a comfortable and efficient waxing experience.
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/faded.jpeg",
    },
    {
        title: "Eyebrow Wax",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Shape and define your eyebrows for a clean, sharp look. Well-groomed eyebrows can significantly enhance your facial features. Our eyebrow waxing service carefully removes excess hair, giving you a defined and polished look that complements your style.
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/undercut.jpg",
    },
    {
        title: "Ear Wax",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Remove unwanted ear hair with our gentle ear waxing service. Ear hair can be unsightly and difficult to manage with traditional methods. Our waxing service ensures a thorough and painless removal process, leaving your ears neat and tidy.
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/pampa.jpg",
    },
    {
        title: "Nose Wax",
        description: (
            <section className="flex flex-col gap-2">
                <p>Eliminate visible nose hair with our safe and effective nose waxing. This service provides a cleaner appearance and reduces the need for frequent trimming. Our professionals use gentle techniques to ensure a comfortable experience and lasting results.
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/pampa.jpg",
    }, {
        title: "Arm Wax",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Achieve smooth, hair-free arms with our professional arm waxing service. Whether you prefer a completely hairless look or just want to manage excess hair, our waxing service provides a clean and polished appearance. Ideal for those who want to feel confident in short sleeves or tank tops.
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/pampa.jpg",
    }, {
        title: "Ear Wax",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Remove unwanted ear hair with our gentle ear waxing service. Ear hair can be unsightly and difficult to manage with traditional methods. Our waxing service ensures a thorough and painless removal process, leaving your ears neat and tidy.
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/pampa.jpg",
    }, {
        title: "Leg Wax",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Keep your legs smooth and hair-free with our expert leg waxing. Perfect for a clean and fresh look, leg waxing removes hair from the root, ensuring longer-lasting smoothness compared to shaving. Our service is suitable for athletes, swimmers, or anyone wanting to maintain hair-free legs.
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/pampa.jpg",
    }, {
        title: "Full Body Wax",
        description: (
            <section className="flex flex-col gap-2">
                <p>
                    Experience the ultimate in smoothness with our full body waxing service. This comprehensive service covers all areas of the body, providing a completely hair-free look. Perfect for special occasions, vacations, or just maintaining a high standard of grooming.
                </p>  <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                    Try now →
                </span>
            </section>
        ),
        badge: "",
        image: "/hairstyle/pampa.jpg",
    },
];
