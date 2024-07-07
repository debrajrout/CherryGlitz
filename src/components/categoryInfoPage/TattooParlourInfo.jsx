import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdEventAvailable, MdLocationOn, MdPhone } from 'react-icons/md';

const TattooParlourInfo = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">Tattoo Ink Masters</h1>
            <p className="text-center text-gray-400 mb-8">Explore the art of tattooing with our skilled artists and premium services.</p>

            {/* Trending Services */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Trending Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "Black and Gray Tattoos" },
                        { name: "Watercolor Tattoos" },
                        { name: "Portrait Tattoos" },
                        { name: "Geometric Tattoos" },
                        { name: "Traditional Tattoos" },
                        { name: "Sleeve Tattoos" },
                        { name: "Cover-Up Tattoos" },
                        { name: "Fine Line Tattoos" }
                    ].map((service, index) => (
                        <div key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md text-lg text-gray-200">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> {service.name}
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Offered */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Services Offered</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-200">
                    {[
                        "Custom Tattoos", "Tattoo Removal", "Tattoo Aftercare", "Piercings",
                        "Consultations", "Flash Tattoos", "Microblading", "Scar Cover-Up",
                        "Color Tattoos", "Tribal Tattoos", "Japanese Tattoos", "Realism Tattoos"
                    ].map((service, index) => (
                        <li key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> {service}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Packages */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Packages</h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-gray-200">
                    {[
                        "Full Sleeve Package", "Back Piece Package", "Tattoo Membership"
                    ].map((packageItem, index) => (
                        <li key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> {packageItem}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Specialties */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Specialties</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-200">
                    {[
                        "Custom Designs", "Award-Winning Artists", "Sterile Environment", "Vegan Ink Options"
                    ].map((specialty, index) => (
                        <li key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> {specialty}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Facilities */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Facilities</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-200">
                    {[
                        "Private Rooms", "Relaxing Waiting Area", "Sterilization Station", "Complimentary Beverages"
                    ].map((facility, index) => (
                        <li key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> {facility}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Promotions */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Promotions</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-200">
                    {[
                        "First-Time Client Discount", "Refer-a-Friend", "Loyalty Rewards"
                    ].map((promotion, index) => (
                        <li key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> {promotion}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Team */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Meet Our Team</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-200">
                    {[
                        "Renowned Artists", "Certified Professionals", "Years of Experience"
                    ].map((expertise, index) => (
                        <li key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> {expertise}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Customer Testimonials */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Customer Testimonials</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-200">
                    {[
                        "Amazing artists and clean environment!",
                        "Best place for custom tattoos!",
                        "Highly professional and friendly staff!",
                        "Love their vegan ink options!"
                    ].map((review, index) => (
                        <li key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> {review}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Gallery */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        "Tattoo Artworks", "Studio Interior", "Tattoo Conventions"
                    ].map((gallery, index) => (
                        <div key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md text-lg text-gray-200">
                            <div className="text-3xl text-yellow-500 mr-4">{gallery}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Booking */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Booking</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-200">
                    {[
                        "Easy Online Booking", "Cancellation Policy", "Walk-in Availability"
                    ].map((booking, index) => (
                        <li key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
                            <MdEventAvailable className="text-yellow-500 mr-2" /> {booking}
                        </li>
                    ))}
                </ul>
            </section>


        </div>
    );
};

export default TattooParlourInfo;
