import React from "react";
import { Meteors } from "../ui/meteors";

export function MeteorsDemo() {
    return (
        <div className="flex flex-col gap-7  ">
            <div className=" w-full relative max-w-xs">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-2 w-2 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                        Blowout
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                        Achieve a sleek and voluminous finish with our expert blowout service. Perfect for adding body and shine to your hair, giving you a polished look.
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                        Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
            <div className=" w-full relative max-w-xs">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-2 w-2 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                        Curls (if desired)
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                        Add definition and bounce with perfectly styled curls. Our curling service enhances your natural curl pattern or creates new curls for a vibrant look.
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                        Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
            <div className=" w-full relative max-w-xs">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-2 w-2 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                        Straightening (if desired)
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                        Smooth and straighten your hair for a sleek and polished look. Our straightening service tames frizz and leaves your hair looking smooth and glossy.
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                        Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
            <div className=" w-full relative max-w-xs">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-2 w-2 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                        Hair Styling Product Application
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                        Perfect your look with the application of premium styling products for hold and finish. Our experts use the best products to ensure your hair stays styled and healthy.
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                        Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}
