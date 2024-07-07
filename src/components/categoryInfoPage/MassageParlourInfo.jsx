import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdEventAvailable, MdLocationOn, MdPhone } from 'react-icons/md';

const MassageParlourInfo = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto bg-gradient-to-r from-green-400 via-blue-300 to-blue-600 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-center text-white mb-8">Massage Services</h1>

            {/* Popular Massages */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Popular Massages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        "Swedish Massage", "Deep Tissue Massage", "Aromatherapy Massage",
                        "Hot Stone Massage", "Thai Massage", "Shiatsu Massage",
                        "Prenatal Massage", "Sports Massage"
                    ].map((service, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md text-lg text-gray-800">
                            <FaCheckCircle className="text-green-500 mr-2" /> {service}
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Offered */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Services Offered</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Relaxation Massage", "Therapeutic Massage", "Couples Massage",
                        "Reflexology", "Hot Stone Therapy", "Herbal Compress Therapy",
                        "Facial Massage", "Back Massage", "Head and Neck Massage",
                        "Foot Massage", "Body Scrub", "Aromatherapy"
                    ].map((service, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <FaCheckCircle className="text-blue-500 mr-2" /> {service}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Packages */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Packages</h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-gray-800">
                    {[
                        "Wellness Packages", "Monthly Membership", "Seasonal Discounts"
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
                        "Organic Products", "Customizable Sessions", "Seasonal Offers", "Membership Discounts"
                    ].map((specialty, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <FaCheckCircle className="text-green-500 mr-2" /> {specialty}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Facilities */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Facilities</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                    {[
                        "Relaxation Lounge", "Private Rooms", "Complimentary Beverages", "Sauna"
                    ].map((facility, index) => (
                        <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                            <FaCheckCircle className="text-blue-500 mr-2" /> {facility}
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
                        "Certified Therapists", "Experienced Masseuses", "Wellness Experts"
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
                        "Amazing experience and relaxing atmosphere!",
                        "Best massage I've ever had!",
                        "Loved the professional staff and services!",
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
                        "Massage Rooms", "Spa Interior", "Relaxation Areas"
                    ].map((gallery, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md text-lg text-gray-800">
                            <div className="text-3xl text-green-600 mr-4">{gallery}</div>
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

export default MassageParlourInfo;
