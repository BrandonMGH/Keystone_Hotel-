import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faHotel } from '@fortawesome/free-solid-svg-icons'



//** COMPONENTS **//
import MainCarousel from '../../Components/ReactCarousel/MainCarousel.js'


//** IMAGES **//
import girlMountain from '../../Images/girlMountain.jpeg'
import LakeViewRoomTwo from '../../Images/LakeViewRoomTwo.jpg'
import HotelLobbyTwo from '../../Images/HotelLobbyTwo.jpg'

const Main = () => {
    return (
        <>
            <section id="mainTitleSection">
                <section id="mainTitleSectionText">
                    <h1>KEYSTONE HOTEL</h1>
                </section>
            </section>
            <section id="mainSectionDivideOne">
                <section id="mainSubSectionDivideOne">
                    <h1>Expand your comfort zone</h1>
                    <p>The Keystone Hotel is the ultimate in mountain luxury.  Tucked away in the secluded Veiled Valley and surrounded on all sides by forest, mountains and lakes, The KeyStone Hotel is the ultimate getaway destination for those looking to escacpe the rigors of reality. </p>
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
                        <img alt="HotelLobbyTwo" className="mainSectionImgClass" src={HotelLobbyTwo} />
                    </div>

                </section>
                <section id="mainSectionRoomQuote">
                    <div id="mainSectionRoomQuoteText">
                        <h1>"Rediscover your sense of self"</h1>
                    </div>
                </section>
                <section id="mainSectionSummary">
                    <p id="mainSectionSummaryParagraph">The Keystone Hotel is a square foot luxury hotel 25 acre hotel compromised of luxury rooms and suites, 2 in-house restaurants, a bar, a spa and fitness center.  The hotel is encompassed on all sides by The Burly Mountains to the north, Lake Pristine to The west and The Shrouded Forest to the southeast.  5 miles southwest of the hotel is the mountain town of Vail, where visitors can partake in an array of activities ranging from mall shopping to ice skating. </p>
                </section>
                <section id="mainSectionSummaryBackground">
                </section>
                <section id="mainSectionRoomPicTwo" >
                    <div id="mainSectionRoomPicTwoImage">
                        <img alt="LakeViewRoomTwo" className="mainSectionImgClass" src={LakeViewRoomTwo} />
                    </div>
                </section>
            </section>
            <section id="mainSectionCarousel">
                <MainCarousel />
            </section>
            <section id="mainSectionGeneralInfo">
                <section style={{position: "relative", top:"25%"}}>
                    <h1 id="mainSectionGeneralInfoTitle">CONTACT US</h1>
                    <section id="mainSectionGenralInfoContainer">
                        <section className="mainSectionGeneralInfoSubContainer">
                            <FontAwesomeIcon id="generalPhoneIcon" icon={faPhone} />
                            <p>Call Us</p>
                            <p>760-429-4146</p>
                        </section>
                        <section className="mainSectionGeneralInfoSubContainer">
                            <FontAwesomeIcon id="generalEmailIcon" icon={faEnvelope} />
                            <p>Email Us</p>
                            <p>keystonehotelcompany@gmail.com</p>
                        </section>
                        <section className="mainSectionGeneralInfoSubContainer">
                            <FontAwesomeIcon id="generalHotelIcon" icon={faHotel} />
                            <p>Visit Us</p>
                            <p>5162 Haley Road, Vail, CO 81657</p>
                        </section>
                    </section>
                </section>
            </section>

        </>
    )
}

export default Main; 