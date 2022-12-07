import React from 'react'
import { Carousel, Slide } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute w-full h-10 bg-gradient-to-t from-white to-transparent bottom-0 z-20' />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}

            >
                <div>
                    <img src='https://m.media-amazon.com/images/I/51ytZoBT55L._SX1500_.jpg' />
                </div>
                <div>
                    <img src='https://m.media-amazon.com/images/I/51ytZoBT55L._SX1500_.jpg' />
                </div>
                <div>
                    <img src='https://m.media-amazon.com/images/I/51ytZoBT55L._SX1500_.jpg' />
                </div>

            </Carousel>
        </div>

    )
}

export default Banner