import React from 'react'

export default function Kids() {
    return (
        <section className="text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">


                <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <a
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"

                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">Child Haircuts</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Our skilled stylists provide gentle and precise haircuts for children, ensuring a comfortable and enjoyable experience. We cater to all hair types and styles, keeping your childs hair neat and trendy.
                        </p>
                        <span className="rounded-xl   text-base font-semibold  text-yellow-400">
                            Try now →
                        </span>
                    </a>

                    <a
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"

                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">Child Hair Styling</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            From braids and updos to everyday styles, our experts create fun and fashionable hairdos for kids. Whether its for a special occasion or just a fresh look, we have got your childs hair styling covered.
                        </p>
                        <span className="rounded-xl   text-base font-semibold  text-lime-500">
                            Try now →
                        </span>
                    </a>

                    <a
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-500/10"

                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-yellow-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">Child Ear Piercing</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Cherry Glitch offers safe and hygienic ear piercing for children. Our professional team ensures a quick and painless process, using high-quality, hypoallergenic materials for your childs safety and comfort.
                        </p>
                        <span className="rounded-xl   text-base font-semibold  text-sky-700">
                            Try now →
                        </span>
                    </a>
                </div>

                <div className="mt-12 text-center">
                    <a

                        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Book an Appointment Today
                    </a>
                </div>
            </div>
        </section>

    )
}
