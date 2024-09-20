"use client";
import Footer from "@/components/footer/Footer";
import React from "react";

export default function CareerGrowth() {
    return (
        <>
            <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-5">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

                        {/* Information Section */}
                        <div className="lg:col-span-2 lg:py-12">
                            <h2 className="text-4xl font-bold text-gray-800">Join Our Team</h2>
                            <p className="max-w-xl mt-4 text-lg text-gray-600">
                                At Cherry Glitz, we believe in empowering our team members to achieve their best and grow professionally. If you're passionate, driven, and ready to contribute to a dynamic team, we'd love to hear from you. Explore our career opportunities and take the next step in your professional journey with us.
                            </p>

                            <h3 className="text-3xl font-bold text-gray-800 mt-8">Why Work With Us?</h3>
                            <ul className="list-disc pl-5 mt-4 space-y-2 text-lg text-gray-600">
                                <li>Competitive salary and benefits.</li>
                                <li>Flexible working hours and remote work options.</li>
                                <li>Opportunities for growth and professional development.</li>
                                <li>Inclusive and collaborative work environment.</li>
                                <li>Access to top-notch tools and resources.</li>
                            </ul>

                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-pink-600">Get in Touch</h3>
                                <p className="mt-2 text-lg text-gray-700">If you have any questions, feel free to reach out to us:</p>
                                <p className="mt-2 text-lg text-gray-800">Phone: <a href="tel:01514754450" className="text-pink-600">0151 475 4450</a></p>
                                <address className="mt-2 not-italic text-lg text-gray-800">Address: 282 Kevin Brook, Imogeneborough, CA 58517</address>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Apply Now</h2>
                            <form action="#" className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <label
                                            htmlFor="Option1"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black hover:bg-black hover:text-white transition"
                                            tabIndex="0"
                                        >
                                            <input className="sr-only" id="Option1" type="radio" name="job-type" required />
                                            <span className="text-sm"> Full-Time </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="Option2"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black hover:bg-black hover:text-white transition"
                                            tabIndex="0"
                                        >
                                            <input className="sr-only" id="Option2" type="radio" name="job-type" />
                                            <span className="text-sm"> Part-Time </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="Option3"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black hover:bg-black hover:text-white transition"
                                            tabIndex="0"
                                        >
                                            <input className="sr-only" id="Option3" type="radio" name="job-type" />
                                            <span className="text-sm"> Internship </span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>
                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Tell us about yourself and why you'd like to join Cherry Glitz"
                                        rows="6"
                                        id="message"
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="resume">Upload Resume</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        type="file"
                                        id="resume"
                                        accept=".pdf,.doc,.docx"
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-pink-600 px-5 py-3 font-medium text-white sm:w-auto transition hover:bg-pink-700"
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Testimonials */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">What Our Team Says</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <p className="text-lg text-gray-600 mb-4">"Working at Cherry Glitz has been a game-changer for my career. The supportive environment and the opportunities for growth are unparalleled."</p>
                            <p className="text-gray-800 font-bold">- Jane Doe, Senior Stylist</p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <p className="text-lg text-gray-600 mb-4">"The culture at Cherry Glitz is incredibly inclusive. I feel valued and appreciated every single day."</p>
                            <p className="text-gray-800 font-bold">- John Smith, Spa Therapist</p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <p className="text-lg text-gray-600 mb-4">"I love the flexibility and the work-life balance that Cherry Glitz offers. It's the perfect place to grow both personally and professionally."</p>
                            <p className="text-gray-800 font-bold">- Emily Johnson, Marketing Manager</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}
