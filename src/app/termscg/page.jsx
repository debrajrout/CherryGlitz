"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInfoCircle, FaUnlockAlt, FaShieldAlt, FaUserCheck, FaExclamationTriangle, FaSyncAlt, FaPhoneAlt, FaGavel } from "react-icons/fa";
import Footer from "@/components/footer/Footer";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 mt-[50px] p-4 sm:p-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

                {/* Sidebar Navigation */}
                <aside className="lg:w-1/4 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-xl mb-8 lg:mb-0 lg:mr-8 lg:sticky lg:top-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 tracking-wide">Sections</h2>
                    <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                        <li>
                            <a
                                href="#general"
                                className="text-gray-700 hover:text-blue-700 flex items-center p-2 sm:p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-200"
                            >
                                <FaInfoCircle className="mr-2 sm:mr-3 text-blue-500" /> General Information
                            </a>
                        </li>
                        <li>
                            <a
                                href="#free-access"
                                className="text-gray-700 hover:text-blue-700 flex items-center p-2 sm:p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-200"
                            >
                                <FaUnlockAlt className="mr-2 sm:mr-3 text-blue-500" /> Free Access
                            </a>
                        </li>
                        <li>
                            <a
                                href="#data-authenticity"
                                className="text-gray-700 hover:text-blue-700 flex items-center p-2 sm:p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-200"
                            >
                                <FaShieldAlt className="mr-2 sm:mr-3 text-blue-500" /> Data Authenticity
                            </a>
                        </li>
                        <li>
                            <a
                                href="#user-responsibility"
                                className="text-gray-700 hover:text-blue-700 flex items-center p-2 sm:p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-200"
                            >
                                <FaUserCheck className="mr-2 sm:mr-3 text-blue-500" /> User Responsibility
                            </a>
                        </li>
                        <li>
                            <a
                                href="#liability"
                                className="text-gray-700 hover:text-blue-700 flex items-center p-2 sm:p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-200"
                            >
                                <FaGavel className="mr-2 sm:mr-3 text-blue-500" /> Disclaimer of Liability
                            </a>
                        </li>
                        <li>
                            <a
                                href="#endorsement"
                                className="text-gray-700 hover:text-blue-700 flex items-center p-2 sm:p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-200"
                            >
                                <FaExclamationTriangle className="mr-2 sm:mr-3 text-blue-500" /> No Endorsement
                            </a>
                        </li>
                        <li>
                            <a
                                href="#warning"
                                className="text-gray-700 hover:text-red-700 flex items-center p-2 sm:p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-200"
                            >
                                <FaExclamationTriangle className="mr-2 sm:mr-3 text-red-500" /> Warning
                            </a>
                        </li>
                        <li>
                            <a
                                href="#changes"
                                className="text-gray-700 hover:text-blue-700 flex items-center p-2 sm:p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-200"
                            >
                                <FaSyncAlt className="mr-2 sm:mr-3 text-blue-500" /> Changes to Terms
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-blue-700 flex items-center p-2 sm:p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-200"
                            >
                                <FaPhoneAlt className="mr-2 sm:mr-3 text-blue-500" /> Contact Information
                            </a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <div className="lg:w-3/4 space-y-12 sm:space-y-16">

                    {/* Section 1: General Information */}
                    <motion.section id="general"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6 flex items-center">
                            <FaInfoCircle className="mr-2 sm:mr-3" /> General Information
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            The content and information provided on this platform are sourced from various social media platforms, publicly available sources, and other third-party platforms. This information is intended solely for general informational purposes and is provided as a convenience to users. The platform does not guarantee the accuracy or completeness of the information presented.
                        </p>
                    </motion.section>

                    {/* Section 2: Free Access */}
                    <motion.section id="free-access"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 sm:p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6 flex items-center">
                            <FaUnlockAlt className="mr-2 sm:mr-3" /> Free Access
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            This platform is freely accessible to users worldwide. No fees or charges are associated with accessing the information provided on this platform.
                        </p>
                    </motion.section>

                    {/* Section 3: Data Authenticity */}
                    <motion.section id="data-authenticity"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6 flex items-center">
                            <FaShieldAlt className="mr-2 sm:mr-3" /> Data Authenticity
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            The platform does not authenticate, verify, or guarantee the accuracy, completeness, or reliability of the data sources utilized. All information is presented "as is," and the platform expressly disclaims any and all warranties, whether express or implied, regarding the accuracy, reliability, suitability, or availability of the information contained herein.
                        </p>
                    </motion.section>

                    {/* Section 4: User Responsibility */}
                    <motion.section id="user-responsibility"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 sm:p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6 flex items-center">
                            <FaUserCheck className="mr-2 sm:mr-3" /> User Responsibility
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Users are solely responsible for conducting independent verification and due diligence before engaging in any transactions, entering into agreements, or taking any actions based on the information provided on this platform. The platform disclaims any responsibility for users' reliance on the information provided.
                        </p>
                    </motion.section>

                    {/* Section 5: Disclaimer of Liability */}
                    <motion.section id="liability"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6 flex items-center">
                            <FaGavel className="mr-2 sm:mr-3" /> Disclaimer of Liability
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            The platform shall not be liable for any losses, damages, or injuries, including but not limited to direct, indirect, incidental, or consequential damages, arising out of or in connection with the use of the platform or reliance on the information provided. The platform disclaims any responsibility for any fraudulent activities, misrepresentations, inaccuracies, or omissions contained in the information provided.
                        </p>
                    </motion.section>

                    {/* Section 6: No Endorsement */}
                    <motion.section id="endorsement"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 sm:p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6 flex items-center">
                            <FaExclamationTriangle className="mr-2 sm:mr-3" /> No Endorsement
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            The inclusion of any shop, service, or entity on this platform does not constitute an endorsement, recommendation, or approval by the platform. Users are advised to exercise caution and conduct thorough due diligence when engaging with any third-party services or shops listed on the platform.
                        </p>
                    </motion.section>

                    {/* Section 7: Warning */}
                    <motion.section id="warning"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold text-red-600 mb-4 sm:mb-6 flex items-center">
                            <FaExclamationTriangle className="mr-2 sm:mr-3" /> Warning
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            WARNING: This platform is intended solely as a general information resource. The platform does not verify the legitimacy, quality, or authenticity of any shop, service, or transaction. Users are strongly advised to conduct comprehensive checks and seek additional verification before proceeding with any financial transactions or engagements with shops or service providers listed on this platform.
                            <br /><strong className="text-red-600">The platform shall not be liable for any fraud, financial loss, or damages of any kind that may result from the use of this platform.</strong>
                        </p>
                    </motion.section>

                    {/* Section 8: Changes to Terms */}
                    <motion.section id="changes"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 sm:p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6 flex items-center">
                            <FaSyncAlt className="mr-2 sm:mr-3" /> Changes to Terms
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            The platform reserves the right to modify, amend, or update these terms and conditions at any time without prior notice. Users are responsible for regularly reviewing these terms to remain informed of any changes.
                        </p>
                    </motion.section>

                    {/* Section 9: Contact Information */}
                    <motion.section id="contact"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
                        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4 sm:mb-6 flex items-center">
                            <FaPhoneAlt className="mr-2 sm:mr-3" /> Contact Information
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            For any issues, concerns, or inquiries, users may contact us via email at <a href="mailto:care@cherryglitz.com" className="text-blue-600 underline">care@cherryglitz.com</a> or by phone at <a href="tel:9776042942" className="text-blue-600 underline">9776042942</a>. The platform is available to assist with any questions or concerns.
                        </p>
                    </motion.section>

                </div>
            </div>

            {/* Final Notice */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
                className="text-center mt-12 mb-4"
            >
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    By using this platform, you agree to be bound by these terms and conditions. If you do not agree, please refrain from using the platform.
                </p>
            </motion.section>
            <Footer />
        </div>
    );
}
