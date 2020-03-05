import React from 'react'
import './TheHotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUtensils, faSpa, faMountain } from '@fortawesome/free-solid-svg-icons'

import HotelExteriorTwo from '../../Images/HotelExteriorTwo.jpg'
import AreaPicture from '../../Images/AreaPicture.jpg'

const TheHotel = () => {
    return (
        <section>
            <section id="hotelSectionOne">
                <section id="hotelSectionOneTitle">
                    <h1>THE HOTEL</h1>
                </section>
            </section>
            <section id="hotelSectionTwo">
                <section id="hotelSectionTwoTitle">
                    <h1>
                        History of the Hotel
                    </h1>
                </section>
                <section id="hotelSectionTwoText">
                    <p>
                        Aren't you a little short to be a stormtrooper? What? Oh...the uniform. I'm Luke Skywalker. I'm here to rescue you. You're who? I'm here to rescue you. I've got your R2 unit. I'm here with Ben Kenobi. Ben Kenobi is here! Where is he? Come on!
                        You know, I think that R2 unit we bought might have been stolen. What makes you think that? Well, I stumbled across a recording while I was cleaning him. He says he belongs to someone called Obi-Wan Kenobi. I thought he might have meant old Ben. Do you know what he's talking about? Well, I wonder if he's related to Ben. That old man's just a crazy old wizard. Tomorrow I want you to take that R2 unit into Anchorhead and have its memory flushed. That'll be the end of it. It belongs to us now. But what if this Obi-Wan comes looking for him? He won't, I don't think he exists any more. He died about the same time as your father. He knew my father? I told you to forget it. Your only concern is to prepare the new droids for tomorrow. In the morning I want them on the south ridge working out those condensers.
                    </p>
                </section>
                <section id="hotelSectionTwoImageContainer">
                    <img id="hotelSectionTwoImage" src={HotelExteriorTwo} />
                </section>
            </section>
            <section id="hotelSectionThree">
                <section id="hotelSectionThreeTitle">
                    <h1>
                        History of the Area
                    </h1>
                </section>
                <section id="hotelSectionThreeText">
                    <p>
                        Aren't you a little short to be a stormtrooper? What? Oh...the uniform. I'm Luke Skywalker. I'm here to rescue you. You're who? I'm here to rescue you. I've got your R2 unit. I'm here with Ben Kenobi. Ben Kenobi is here! Where is he? Come on!
                        Aren't you a little short to be a stormtrooper? What? Oh...the uniform. I'm Luke Skywalker. I'm here to rescue you. You're who? I'm here to rescue you. I've got your R2 unit. I'm here with Ben Kenobi. Ben Kenobi is here! Where is he? Come on!
                    </p>
                </section>
                <section id="hotelSectionThreeImageContainer">
                    <img id="hotelSectionThreeImage" src={AreaPicture} />
                </section>
            </section>
            <section id="hotelSectionFour">
                <section id="hotelSectionFourBackgroundLayer">
                    <section id="hotelSectionFourAmenititesContainer">
                        <section id="hotelSectionFourTitle">
                            <p>HOTEL AMENITIES AT A GLANCE</p>
                        </section>
                        <section id="hotelSectionFourAmenityOne" className="hotelSectionFourAmenitites">
                            <section className="hotelSectionFontAwesomeIcon">
                                <h3 className="hotelSectionFontAwesomeIconTitle">ROOMS</h3>
                                <FontAwesomeIcon icon={faBed} size='5x' />
                            </section>
                        </section>
                        <section id="hotelSectionFourAmenityTwo" className="hotelSectionFourAmenitites">
                            <section className="hotelSectionFontAwesomeIcon">
                                <h3 className="hotelSectionFontAwesomeIconTitle">DINING</h3>
                                <FontAwesomeIcon icon={faUtensils} size='5x' />
                            </section>

                        </section>
                        <section id="hotelSectionFourAmenityThree" className="hotelSectionFourAmenitites">
                            <section className="hotelSectionFontAwesomeIcon">
                                <h3 className="hotelSectionFontAwesomeIconTitle">SPA</h3>
                                <FontAwesomeIcon icon={faSpa} size='5x' />
                            </section>
                        </section>
                        <section id="hotelSectionFourAmenityFour" className="hotelSectionFourAmenitites">
                            <section className="hotelSectionFontAwesomeIcon">
                                <h3 className="hotelSectionFontAwesomeIconTitle">AREA ATTRACTIONS</h3>
                                <FontAwesomeIcon icon={faMountain} size='5x' />
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default TheHotel