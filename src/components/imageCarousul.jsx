// ImageCarousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const ImageCarousel2 = ({ images }) => {
    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={3000}>
            {images.map((image, index) => (
                <div key={index} className='h-[400px] flex items-center justify-center'>
                    <Image src={image} alt={`Image ${index + 1}`} height={200} width={200} />
                </div>
            ))}
        </Carousel>
    );
}

export default ImageCarousel2;
