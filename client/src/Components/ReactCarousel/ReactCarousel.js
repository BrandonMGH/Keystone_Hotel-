import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ReactCarousel.css'

import HotelBarOne from '../../Images/HotelBarOne.jpeg'
import HotelBarTwo from '../../Images/HotelBarTwo.jpg'
import HotelBarThree from '../../Images/HotelBarThree.jpg'

const ReactCarousel = () => {
    return (
        <Carousel autoPlay showThumbs={false}>
            <div>
                <section id="carouselTextOne">
                    <h1 id="carouselTitleTextOne">ROOMS</h1>
                    <p>If you would like to find out more information about the rooms, please click the link below</p>
                    <a>Read More</a>
                </section>
                <img id="carouselImgOne" src={HotelBarOne} />
            </div>
            <div>
                <section id="carouselTextTwo">
                    <h1 id="carouselTitleTextTwo">DINING</h1>
                    <p>If you would like to find out more information about the rooms, please click the link below</p>
                    <a>Read More</a>
                </section>
                <img id="carouselImgTwo" src={HotelBarTwo} />
            </div>
            <div>
                <section id="carouselTextThree">
                    <h1 id="carouselTitleTextThree">SPA</h1>
                    <p>If you would like to find out more information about the rooms, please click the link below</p>
                    <a>Read More</a>
                </section>
                <img id="carouselImgThree" src={HotelBarThree} />
            </div>
            <div>
                <section id="carouselTextFour">
                    <h1 id="carouselTitleTextFour">AREA ATTRACTION</h1>
                    <p>If you would like to find out more information about the rooms, please click the link below</p>
                    <a>Read More</a>
                </section>
                <img id="carouselImgFour" src={HotelBarThree} />
            </div>
        </Carousel>
    )
}

export default ReactCarousel 