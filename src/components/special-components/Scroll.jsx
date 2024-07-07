// HairCut.js
import React from 'react';
import ImageCarousel from './Carousel';

export function HairCut() {
    const images = [

        { src: "/scroll/hair2.png", alt: "Haircut 2", legend: "Haircut Style 2" },
        { src: "/scroll/hair3.png", alt: "Haircut 3", legend: "Haircut Style 2" },
    ];
    return (
        <div>

            <ImageCarousel images={images} />
        </div>
    );
}

// Spa.js



export function Spa() {
    const images = [
        { src: "/scroll/spa.png", alt: "Spa 1", legend: "Spa Treatment 1" },
        { src: "/scroll/spa2.png", alt: "Spa 2", legend: "Spa Treatment 2" }
    ];
    return (
        <div>

            <ImageCarousel images={images} />
        </div>
    );
}

// Tattoo.js


export function Tattoo() {
    const images = [
        { src: "/scroll/tattoo.png", alt: "Tattoo 1", legend: "Tattoo Design 1" },
        { src: "/scroll/tattoo2.png", alt: "Tattoo 2", legend: "Tattoo Design 2" }
    ];
    return (
        <div>

            <ImageCarousel images={images} />
        </div>
    );
}

// Beauty.js


export function Beauty() {
    const images = [
        { src: "/scroll/beauty1.png", alt: "Beauty 1", legend: "Beauty Treatment 1" },
        { src: "/scroll/beauty2.png", alt: "Beauty 2", legend: "Beauty Treatment 2" },
        { src: "/scroll/hair1.png", alt: "Haircut 1", legend: "Haircut Style 1" },
    ];
    return (
        <div>

            <ImageCarousel images={images} />
        </div>
    );
}
