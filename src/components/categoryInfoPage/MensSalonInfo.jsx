import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { PiHairDryer } from "react-icons/pi";
import { MdEventAvailable, MdLocationOn, MdPhone } from 'react-icons/md';

const MensSalonInfo = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-center text-white mb-8">Mens Salon Services</h1>
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Trending Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "Classic Haircut", icon: <PiHairDryer /> },
                        { name: "Beard Trim", icon: <FaCheckCircle /> },
                        { name: "Mustache Styling", icon: <FaCheckCircle /> },
                        { name: "Scalp Massage", icon: <FaCheckCircle /> },
                        { name: "Straight Razor Shave", icon: <FaCheckCircle /> },
                        { name: "Hair Coloring", icon: <FaCheckCircle /> },
                        { name: "Hot Towel Treatment", icon: <FaCheckCircle /> },
                        { name: "Men's Grooming", icon: <PiHairDryer /> }
                    ].map((service, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md text-lg text-gray-800">
                            <div className="text-3xl text-gray-800 mr-4">{service.icon}</div>
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
                        "Haircut", "Beard Styling", "Hair Coloring", "Facial",
                        "Straight Razor Shave", "Scalp Treatment", "Hair Removal", "Men's Manicure"
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
                        "Gentlemen's Package", "Monthly Membership", "Seasonal Offers"
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
                        "Traditional Barbering", "Hot Towel Shaves", "Beard Care", "Men's Skincare"
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
                        "Barber Chairs", "VIP Lounge", "Complimentary Drinks", "Gentlemen's Club Atmosphere"
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
                        "First Visit Discount", "Refer-a-Friend", "Loyalty Rewards"
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
                        "Master Barbers", "Skilled Stylists", "Men's Grooming Experts"
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
                        "Great service and friendly staff!",
                        "Best barber experience in town!",
                        "Top-notch grooming services!",
                        "Highly recommended for men's grooming needs!"
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
                        "Client Before-and-After", "Barber Shop Interior", "Events"
                    ].map((gallery, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md text-lg text-gray-800">
                            <div className="text-3xl text-gray-700 mr-4">{gallery}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Booking */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Booking</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Online Appointment", "Cancellation Policy", "Walk-ins Welcome"
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

export default MensSalonInfo;
