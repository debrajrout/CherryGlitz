import React from 'react';
import { FaSpa, FaCheckCircle } from 'react-icons/fa';
import { MdEventAvailable, MdLocationOn, MdPhone } from 'react-icons/md';

const SpaInfo = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto bg-gradient-to-r from-green-300 via-blue-300 to-teal-300 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-center text-white mb-4">Relaxation Oasis Spa</h1>
            <p className="text-xl text-center text-white mb-8">Your sanctuary of serenity and rejuvenation. Experience holistic treatments designed to harmonize body, mind, and spirit.</p>

            {/* Popular Treatments */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Popular Treatments</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "Swedish Massage", icon: <FaSpa /> },
                        { name: "Aromatherapy", icon: <FaCheckCircle /> },
                        { name: "Deep Tissue Massage", icon: <FaCheckCircle /> },
                        { name: "Hot Stone Therapy", icon: <FaCheckCircle /> },
                        { name: "Facial Treatments", icon: <FaCheckCircle /> },
                        { name: "Body Scrubs", icon: <FaCheckCircle /> },
                        { name: "Reflexology", icon: <FaCheckCircle /> },
                        { name: "Hydrotherapy", icon: <FaCheckCircle /> }
                    ].map((treatment, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md text-lg text-gray-800">
                            <div className="text-3xl text-teal-600 mr-4">{treatment.icon}</div>
                            {treatment.name}
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Offered */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Services Offered</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Massage Therapy", "Facials", "Body Treatments", "Hydrotherapy",
                        "Manicure & Pedicure", "Spa Packages", "Wellness Programs", "Couple's Treatments",
                        "Detox Programs", "Yoga & Meditation", "Herbal Treatments", "Steam & Sauna"
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
                        "Wellness Packages", "Couple's Retreat", "Seasonal Specials"
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
                        "Holistic Treatments", "Organic Products", "Custom Packages", "Experienced Therapists"
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
                        "Relaxation Lounge", "Private Suites", "Sauna & Steam Rooms", "Jacuzzi"
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
                        "First-Time Visitor Discount", "Refer-a-Friend", "Loyalty Rewards"
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
                        "Certified Therapists", "Award-Winning Professionals", "Years of Experience"
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
                        "Incredible spa experience!",
                        "The best relaxation therapies!",
                        "Loved the holistic treatments!",
                        "Amazing customer service!"
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
                        "Serene Environments", "Luxurious Interiors", "Special Events"
                    ].map((gallery, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md text-lg text-gray-800">
                            <div className="text-3xl text-blue-600 mr-4">{gallery}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Booking */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Booking</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Easy Online Booking", "Flexible Cancellation Policy", "Walk-in Availability"
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

export default SpaInfo;
