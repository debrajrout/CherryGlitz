"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const images = [
    "/images/f1.jpg",
    "/images/f2.png",
    "/images/f3.png",
    "/images/f4.jpg",
  ];
  let currentIndex = 0;
  let slideInterval;

  const slideNext = () => {
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    animateSlider();
  };

  const slidePrev = () => {
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex--;
    }
    animateSlider();
  };

  const animateSlider = () => {
    gsap.to(sliderRef.current, {
      x: -currentIndex * 100 + "%",
      duration: 0.7,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    slideInterval = setInterval(slideNext, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative mt-2 h-52 w-full overflow-hidden rounded-lg shadow-md shadow-black/50">
      <div
        ref={sliderRef}
        className="circ.out flex transition-transform duration-500"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slide h-52 w-full flex-shrink-0 object-cover"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            width={450}
            height={250}
          />
        ))}
      </div>
      <button
        onClick={slidePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-md  px-3 py-1 text-white"
      >
        <FaAnglesLeft className="h-6 w-8 text-white" />
      </button>
      <button
        onClick={slideNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-md  px-3 py-1 text-white"
      >
        <FaAnglesRight className="h-6 w-8 text-white" />
      </button>
    </div>
  );
};

export default ImageSlider;
