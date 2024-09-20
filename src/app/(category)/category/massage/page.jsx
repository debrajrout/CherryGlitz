"use client";
import Image from "next/image";
import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";

const massageData = [
  {
    name: "Swedish Massage",
    description: "A gentle, relaxing full-body massage using soft strokes.",
    image: "/subcatf/massage/swidishmasssage.jpg",
    alt: "Relaxing Swedish massage session.",
  },
  {
    name: "Deep Tissue Massage",
    description: "Targets deep muscle layers to relieve chronic tension.",
    image: "/subcatf/massage/deeptissuemassage.jpg",
    alt: "Deep tissue massage focusing on muscle tension.",
  },
  {
    name: "Thai Massage",
    description: "Traditional Thai massage combining stretching and pressure techniques.",
    image: "/subcatf/massage/thaimassage.jpg",
    alt: "Thai massage with stretching and pressure techniques.",
  },
  {
    name: "Shiatsu Massage",
    description: "A Japanese massage technique applying pressure to energy meridians.",
    image: "/subcatf/massage/shaitsumassage.jpg",
    alt: "Shiatsu massage focusing on energy points.",
  },
  {
    name: "Sports Massage",
    description: "Designed to improve athletic performance and prevent injuries.",
    image: "/subcatf/massage/sportsmassage.jpg",
    alt: "Sports massage for improving athletic performance.",
  },
  {
    name: "Aromatherapy Massage",
    description: "Massage using essential oils to enhance physical and emotional health.",
    image: "/subcatf/massage/aromamassage.jpg",
    alt: "Aromatherapy massage with essential oils.",
  },
  {
    name: "Hot Stone Massage",
    description: "Heated stones are used to relax and ease tense muscles.",
    image: "/subcatf/massage/hotstonemassage.jpg",
    alt: "Hot stone massage with heated stones on the back.",
  },
  {
    name: "Reflexology",
    description: "Focuses on pressure points in the feet to relieve tension throughout the body.",
    image: "/subcatf/massage/reflexology.jpg",
    alt: "Reflexology massage focusing on pressure points in the feet.",
  },
  {
    name: "Prenatal Massage",
    description: "Specialized massage for pregnant women to relieve discomfort.",
    image: "/subcatf/massage/prenatalmassage.jpg",
    alt: "Prenatal massage for relieving discomfort during pregnancy.",
  },
  {
    name: "Lymphatic Drainage Massage",
    description: "Gentle massage to encourage lymph flow and detoxification.",
    image: "/subcatf/massage/lymphaticdrainagemassage.jpg",
    alt: "Lymphatic drainage massage to promote detoxification.",
  },
  {
    name: "Craniosacral Therapy",
    description: "Gentle touch therapy to relieve tension in the craniosacral system.",
    image: "/subcatf/massage/craniosacraltherapy.jpg",
    alt: "Craniosacral therapy for tension relief.",
  },
  {
    name: "Trigger Point Therapy",
    description: "Focuses on relieving tight knots in muscle tissue.",
    image: "/subcatf/massage/triggertherapy.jpg",
    alt: "Trigger point therapy for relieving muscle knots.",
  },
  {
    name: "Myofascial Release",
    description: "Gentle pressure to release tightness in connective tissue.",
    image: "/subcatf/massage/myofisicaltherapy.jpg",
    alt: "Myofascial release to reduce tension in connective tissue.",
  },
  {
    name: "Ayurvedic Massage",
    description: "An ancient Indian technique using warm oils to balance body energies.",
    image: "/subcatf/massage/ayurvedicmassage.jpg",
    alt: "Ayurvedic massage using warm oils for body balance.",
  },
  {
    name: "Acupressure",
    description: "Uses finger pressure on specific points to relieve pain and promote healing.",
    image: "/subcatf/massage/acupressure.jpg",
    alt: "Acupressure massage focusing on specific pressure points.",
  },
  {
    name: "Reiki Healing",
    description: "An energy healing technique using gentle hand placements.",
    image: "/subcatf/massage/reirkihealings.jpg",
    alt: "Reiki healing with gentle hand placements for energy balance.",
  },
  {
    name: "Balinese Massage",
    description: "A full-body deep-tissue massage originating from Bali, Indonesia.",
    image: "/subcatf/massage/balinesemassage.jpg",
    alt: "Balinese massage, a deep-tissue massage from Indonesia.",
  },
  {
    name: "Hawaiian Lomi Lomi Massage",
    description: "Traditional Hawaiian massage focusing on continuous, flowing strokes.",
    image: "/subcatf/massage/hawaiianlomilomimassage.jpg",
    alt: "Lomi Lomi massage with continuous, flowing strokes.",
  },
  {
    name: "Chair Massage",
    description: "A short, seated massage focusing on the neck, shoulders, and back.",
    image: "/subcatf/massage/chairmassage.jpg",
    alt: "Chair massage focusing on the neck, shoulders, and back.",
  },
  {
    name: "Couple's Massage",
    description: "A relaxing massage for two people at the same time.",
    image: "/subcatf/massage/couplemassage.jpg",
    alt: "Couple's massage with two people receiving a massage together.",
  },
];

export default function MassagePage() {
  return (
    <div className="p-4 -mt-2">
      <h1 className="text-3xl font-bold text-center mb-4">Types of Massage</h1>
      <div className="grid grid-cols-2 gap-6">
        {massageData.map((massage, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={massage.image}
              alt={massage.alt}
              width={200}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg truncate font-semibold">{massage.name}</h2>
              <p className="text-sm text-gray-600 mb-2 truncate">{massage.description}</p>

              {/* Gender Icons */}
              <div className="flex items-center gap-1 text-gray-500 mb-4">
                <FaMale className="text-blue-500" />
                <FaFemale className="text-pink-500" />
                <span className="text-xs font-bold">Unisex</span>
              </div>

              {/* Explore Now Button */}
              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                Try it now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
