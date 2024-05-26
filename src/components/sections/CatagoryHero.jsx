"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const images = [
  "/images/f1.jpg",
  "/images/f2.png",
  "/images/f3.png",
  "/images/f4.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let slideInterval;

  const slideNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    slideInterval = setInterval(slideNext, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative  mb-2 h-60 w-full overflow-hidden bg-white py-1">
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center gap-3 overflow-hidden   p-0">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className="mx-[1px] box-content h-2 w-2  cursor-pointer rounded-full   border-transparent bg-white"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative h-full w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="flex transition-transform ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 overflow-hidden ">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className="block h-full w-full object-cover"
                width={450}
                height={250}
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">{`Slide ${index + 1} label`}</h5>
                <p>{`Some representative placeholder content for slide ${index + 1}.`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
