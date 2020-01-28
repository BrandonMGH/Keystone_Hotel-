import React, {useState} from 'react'
import './Main.css'


import girlMountain from '../../Images/girlMountain.jpeg'
import HotelInteriorTwo from '../../Images/HotelInteriorTwo.jpeg'
import HotelLobbyTwo from '../../Images/HotelLobbyTwo.jpg'

//** COMPONENTS **//
import MainCarousel from '../../Components/MainCarousel/MainCarousel.js'



const Main = () => {

    return (
        <>
            <section id="mainTitleSection">
                <section className="sectionTextFormatting">
                    <h1>-KEYSTONE HOTEL-</h1>
                </section>
            </section>
            <section id="mainSectionDivideOne">
                <section id="mainSubSectionDivideOne">
                    <h1>Expand your comfort zone</h1>
                    <p>Good. Use your aggressive feelings, boy! Let the hate flow through you. Obi-Wan has taught you well. I will not fight you, father. You are unwise to lower your defenses. Your thoughts betray you, father. I feel the good in you...the conflict. There is no conflict. You couldn't bring yourself to kill me before, and I don't believe you'll destroy me now. You underestimate the power of the dark side. If you will not fight, then you will meet your destiny. Good. Good.</p>
                </section>
                <section id="mainSubSectionDivideTwo">
                    <img id="imgSubSectionDivideTwo" src={girlMountain} />
                </section>
            </section>
            <section id="mainSectionDivideTwo">
                <section className="sectionTextFormatting">
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
                    <img className="mainSectionImgClass"  src={HotelInteriorTwo} />
                    </div>
                </section>
            </section>
            <section id="mainSectionCarousel">
                <MainCarousel />
            </section>

        </>
    )
}

export default Main; 