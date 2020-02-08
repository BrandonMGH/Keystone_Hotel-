import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faHotel } from '@fortawesome/free-solid-svg-icons'



//** COMPONENTS **//
import MainCarousel from '../../Components/ReactCarousel/MainCarousel.js'


//** IMAGES **//
import girlMountain from '../../Images/girlMountain.jpeg'
import HotelInteriorTwo from '../../Images/HotelInteriorTwo.jpeg'
import HotelLobbyTwo from '../../Images/HotelLobbyTwo.jpg'

const Main = () => {
    return (
        <>
            <section id="mainTitleSection">
                <section id="mainTitleSectionText">
                    <h1>-KEYSTONE HOTEL-</h1>
                </section>
            </section>
            <section id="mainSectionDivideOne">
                <section id="mainSubSectionDivideOne">
                    <h1>Expand your comfort zone</h1>
                    <p>Good. Use your aggressive feelings, boy! Let the hate flow through you. Obi-Wan has taught you well. I will not fight you, father. You are unwise to lower your defenses. Your thoughts betray you, father. I feel the good in you...the conflict. There is no conflict. You couldn't bring yourself to kill me before, and I don't believe you'll destroy me now. You underestimate the power of the dark side. If you will not fight, then you will meet your destiny. Good. Good.</p>
                </section>
                <section id="mainSubSectionDivideTwo">
                    <img alt="" id="imgSubSectionDivideTwo" src={girlMountain} />
                </section>
            </section>
            <section id="mainSectionDivideTwo">
                <section id="mainSectionDivideTwoText">
                    <h1>“A mind that is stretched by a new experience can never go back to its old dimensions.” - Oliver Wendell Holmes</h1>
                </section>
            </section>
            <section id="mainSectionRoomDescription">
                <section id="mainSectionRoomPicOne">
                    <div >
                        <img className="mainSectionImgClass" src={HotelLobbyTwo} />
                    </div>

                </section>
                <section id="mainSectionRoomQuote">
                    <div id="mainSectionRoomQuoteText">
                        <h1>"Rediscover your sense of self"</h1>
                    </div>
                </section>
                <section id="mainSectionSummary">
                    Good. Use your aggressive feelings, boy! Let the hate flow through you. Obi-Wan has taught you well. I will not fight you, father. You are unwise to lower your defenses. Your thoughts betray you, father. I feel the good in you...the conflict. There is no conflict. You couldn't bring yourself to kill me before, and I don't believe you'll destroy me now. You underestimate the power of the dark side. If you will not fight, then you will meet your destiny. Good. Good
                </section>
                <section id="mainSectionRoomPicTwo" >
                    <div id="mainSectionRoomPicTwoImage">
                        <img className="mainSectionImgClass" src={HotelInteriorTwo} />
                    </div>
                </section>
            </section>
            <section id="mainSectionCarousel">
                <MainCarousel />
            </section>
            <section id="mainSectionGeneralInfo">
                <section style={{position: "relative", top:"25%"}}>
                    <h1>CONTACT US</h1>
                    <section id="mainSectionGenralInfoContainer">
                        <section className="mainSectionGeneralInfoSubContainer">
                            <FontAwesomeIcon id="generalPhoneIcon" icon={faPhone} />
                            <p>Call Us</p>
                            <p>760-429-4146</p>
                        </section>
                        <section className="mainSectionGeneralInfoSubContainer">
                            <FontAwesomeIcon id="generalEmailIcon" icon={faEnvelope} />
                            <p>Email Us</p>
                            <p>BrandonMGH@Yahoo.com</p>
                        </section>
                        <section className="mainSectionGeneralInfoSubContainer">
                            <FontAwesomeIcon id="generalHotelIcon" icon={faHotel} />
                            <p>Visit Us</p>
                            <p>5341 Huron Court, Oceanside, CA 92056</p>
                        </section>
                    </section>
                </section>
            </section>

        </>
    )
}

export default Main; 