"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const images = [
  "/images/f1.jpg",
  "/images/f2.png",
  "/images/f3.png",
  "/images/f4.jpg",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  }),
};

const ImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  let slideInterval;

  const imageIndex = (page) =>
    ((page % images.length) + images.length) % images.length;

  const slideNext = () => {
    setPage([page + 1, 1]);
  };

  const slidePrev = () => {
    setPage([page - 1, -1]);
  };

  useEffect(() => {
    slideInterval = setInterval(slideNext, 4000);
    return () => clearInterval(slideInterval);
  }, [page]);

  return (
    <div className="relative mt-2 h-52 w-full overflow-hidden rounded-lg shadow-md shadow-black/50">
      <div className="relative h-52 w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute left-0 top-0 h-full w-full"
          >
            <Image
              src={images[imageIndex(page)]}
              alt={`Slide ${imageIndex(page)}`}
              className="h-full w-full object-cover"
              layout="fill"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={slidePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-md  px-3 py-1 "
      >
        <motion.div
          animate={{
            translateX: [0, -3, 0],
          }}
          transition={{
            duration: 0.7,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <FaAnglesLeft className="h-6 w-6 text-yellow-400" />
        </motion.div>
      </button>
      <button
        onClick={slideNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-md  px-3 py-1 "
      >
        <motion.div
          animate={{
            translateX: [0, 3, 0],
          }}
          transition={{
            duration: 0.7,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <FaAnglesRight className="h-6 w-6 text-yellow-400" />
        </motion.div>
      </button>
    </div>
  );
};

export default ImageSlider;
