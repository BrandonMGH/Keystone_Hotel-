import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import HotelBarOne from '../../Images/HotelBarOne.jpeg'
import HotelBarTwo from '../../Images/HotelBarTwo.jpg'
import HotelBarThree from '../../Images/HotelBarThree.jpg'

const ReactCarousel = () => {
    return(
        <Carousel autoPlay showThumbs={false}>
                <div>
                    <img src={HotelBarOne} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={HotelBarTwo} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={HotelBarThree} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}

export default ReactCarousel 