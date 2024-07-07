import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { GiHairStrands } from 'react-icons/gi';
import { MdEventAvailable, MdLocationOn, MdPhone } from 'react-icons/md';

const BeautyParlourInfo = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-center text-white mb-8">Beauty Parlour Services</h1>

            {/* Trending Services */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Trending Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "Korean Skincare", icon: <GiHairStrands /> },
                        { name: "Permanent Makeup", icon: <FaCheckCircle /> },
                        { name: "Lash Extensions", icon: <FaCheckCircle /> },
                        { name: "Hot Stone Massage", icon: <FaCheckCircle /> },
                        { name: "Aromatherapy", icon: <FaCheckCircle /> },
                        { name: "Microblading", icon: <FaCheckCircle /> },
                        { name: "LED Light Therapy", icon: <FaCheckCircle /> },
                        { name: "Dermaplaning", icon: <FaCheckCircle /> }
                    ].map((service, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md text-lg text-gray-800">
                            <div className="text-3xl text-purple-600 mr-4">{service.icon}</div>
                            {service.name}
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Offered */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Services Offered</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Haircut", "Hair Styling", "Hair Coloring", "Facial",
                        "Manicure", "Pedicure", "Bridal Makeup", "Regular Makeup",
                        "Waxing", "Threading", "Body Polishing", "Scalp Treatment"
                    ].map((service, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <FaCheckCircle className="text-green-500 mr-2" /> {service}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Packages */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Packages</h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-gray-800">
                    {[
                        "Bridal Packages", "Monthly Membership", "Seasonal Discounts"
                    ].map((packageItem, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> {packageItem}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Specialties */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Specialties</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Organic Products", "Bridal Packages", "Seasonal Offers", "Membership Discounts"
                    ].map((specialty, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> {specialty}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Facilities */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Facilities</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Relaxation Lounge", "VIP Rooms", "Complimentary Beverages", "Children's Play Area"
                    ].map((facility, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <FaCheckCircle className="text-green-500 mr-2" /> {facility}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Promotions */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Promotions</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "First-Time Visit Discount", "Refer-a-Friend", "Loyalty Points"
                    ].map((promotion, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <FaCheckCircle className="text-green-500 mr-2" /> {promotion}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Team */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Meet Our Team</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Certified Stylists", "Award-Winning Artists", "Years of Experience"
                    ].map((expertise, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <FaCheckCircle className="text-blue-500 mr-2" /> {expertise}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Customer Testimonials */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Customer Testimonials</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Excellent service and friendly staff!",
                        "Best bridal makeup in town!",
                        "Loved the organic products and ambiance!",
                        "Great offers and membership discounts!"
                    ].map((review, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <FaCheckCircle className="text-green-500 mr-2" /> {review}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Gallery */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        "Before-and-After Photos", "Salon Interior", "Events"
                    ].map((gallery, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md text-lg text-gray-800">
                            <div className="text-3xl text-purple-600 mr-4">{gallery}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Booking */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Booking</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Easy Online Booking", "Cancellation Policy", "Walk-in Availability"
                    ].map((booking, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <MdEventAvailable className="text-blue-500 mr-2" /> {booking}
                        </li>
                    ))}
                </ul>
            </section>


        </div>
    );
};

export default BeautyParlourInfo;
