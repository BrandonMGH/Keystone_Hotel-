import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import HotelBarOne from '../../Images/HotelBarOne.jpeg'
import HotelBarTwo from '../../Images/HotelBarTwo.jpg'
import HotelBarThree from '../../Images/HotelBarThree.jpg'

const ReactCarousel = () => {
    return (
        <Carousel autoPlay showThumbs={false}>
            <div>
                <h1 className="legend" style={{fontSize: "50px", position: "relative", top: "300px"}}>Test</h1>
                <img src={HotelBarOne} />
            </div>
            <div>
                <h1 className="legend">Test</h1>
                <img src={HotelBarTwo} />
            </div>
            <div>
                <h1 className="legend">Test</h1>
                <img src={HotelBarThree} />
            </div>
            <div>
                <h1 className="legend">Test</h1>
                <img src={HotelBarThree} />
            </div>
        </Carousel>
    )
}

export default ReactCarousel 