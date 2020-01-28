import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ReactCarousel.css'

import HotelInteriorFour from '../../Images/HotelInteriorFour.jpg'
import HotelRestaurantOne from '../../Images/HotelRestaurantOne.jpeg'
import HotelSpaOne from '../../Images/HotelSpaOne.jpeg'
import AreaAttractionOne from '../../Images/AreaAttractionOne.jpg'

const ReactCarousel = () => {
    return (
        <Carousel autoPlay showThumbs={false}>
            <div>
                <section className="legend" id="carouselTextOne">
                    <h1 id="carouselTitleTextOne">ROOMS</h1>
                    <p>If you would like to find out more information about the rooms, please click the link below</p>
                    <a>Read More</a>
                </section>
                <img id="carouselImgOne" src={HotelInteriorFour} />
            </div>
            <div>
                <section className="legend" id="carouselTextTwo">
                    <h1 id="carouselTitleTextTwo">DINING</h1>
                    <p>If you would like to find out more information about the rooms, please click the link below</p>
                    <a>Read More</a>
                </section>
                <img id="carouselImgTwo" src={HotelRestaurantOne} />
            </div>
            <div>
                <section className="legend" id="carouselTextThree">
                    <h1 id="carouselTitleTextThree">SPA</h1>
                    <p>If you would like to find out more information about the rooms, please click the link below</p>
                    <a>Read More</a>
                </section>
                <img id="carouselImgThree" src={HotelSpaOne} />
            </div>
            <div>
                <section className="legend" id="carouselTextFour">
                    <h1 id="carouselTitleTextFour">AREA ATTRACTION</h1>
                    <p>If you would like to find out more information about the rooms, please click the link below</p>
                    <a>Read More</a>
                </section>
                <img id="carouselImgFour" src={AreaAttractionOne} />
            </div>
        </Carousel>
    )
}

export default ReactCarousel 