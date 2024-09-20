import React from "react";
import {
    FaUser,
    FaCreditCard,
    FaMapMarkerAlt,
    FaLanguage,
    FaBell,
    FaClipboardList,
    FaQuestionCircle,
    FaStore,
    FaInfoCircle,
    FaFileAlt,
} from "react-icons/fa";

export default function MyAccount() {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen py-8">
            <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
                <div className="p-6">

                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">My Account</h1>
                        <p className="text-gray-600">Manage your account settings and preferences</p>
                    </div>

                    {/* Account Settings */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition">
                                <div className="flex items-center">
                                    <FaUser className="text-blue-600 text-xl mr-3" />
                                    <span>Edit Profile</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition">
                                <div className="flex items-center">
                                    <FaCreditCard className="text-blue-600 text-xl mr-3" />
                                    <span>Saved payment methord</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition">
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="text-blue-600 text-xl mr-3" />
                                    <span>Saved Addresses</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition">
                                <div className="flex items-center">
                                    <FaLanguage className="text-blue-600 text-xl mr-3" />
                                    <span>Select Language</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition">
                                <div className="flex items-center">
                                    <FaBell className="text-blue-600 text-xl mr-3" />
                                    <span>Notification Settings</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </li>
                        </ul>
                    </section>

                    <hr className="my-8" />

                    {/* My Activity */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">My Activity</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition">
                                <div className="flex items-center">
                                    <FaClipboardList className="text-blue-600 text-xl mr-3" />
                                    <span>Reviews</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition">
                                <div className="flex items-center">
                                    <FaQuestionCircle className="text-blue-600 text-xl mr-3" />
                                    <span>Questions & Answers</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </li>
                        </ul>
                    </section>

                    <hr className="my-8" />

                    {/* Earn with Cherry Glitz */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Earn with Cherry Glitz</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition">
                                <div className="flex items-center">
                                    <FaStore className="text-blue-600 text-xl mr-3" />
                                    <span>List on Cherry Glitz</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </li>
                        </ul>
                    </section>

                    <hr className="my-8" />

                    {/* Feedback & Information */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Feedback & Information</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition">
                                <div className="flex items-center">
                                    <FaInfoCircle className="text-blue-600 text-xl mr-3" />
                                    <span>Terms, Policies and Licenses</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-50 transition">
                                <div className="flex items-center">
                                    <FaFileAlt className="text-blue-600 text-xl mr-3" />
                                    <span>Browse FAQs</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
