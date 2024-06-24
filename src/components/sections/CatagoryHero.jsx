"use client"
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  "/images/f1.jpg",
  "/images/f2.png",
  "/images/f3.png",
  "/images/f4.jpg",
];

const ImageSlider = () => {


  return (
    <div className="relative mb-2 h-60 w-full overflow-hidden py-1">
      <div className="relative h-full w-full overflow-hidden">
        <Carousel
          autoPlay={true}
          interval={3000} // Change interval to 3000 milliseconds (3 seconds)
          showArrows={false}
          showStatus={true}
          showIndicators={true}
          showThumbs={false}
          dynamicHeight={true}
          infiniteLoop={true}
        >
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className="block w-full object-cover"

                width={3556} height={2000}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageSlider;
