// ImageCarousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const ImageCarousel = ({ images }) => {
    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={3000}>
            {images.map((image, index) => (
                <div key={index} className='h-28'>
                    <Image src={image.src} alt={image.alt} height={200} width={950} />

                </div>
            ))}
        </Carousel>
    );
}

export default ImageCarousel;
