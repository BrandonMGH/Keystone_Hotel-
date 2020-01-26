import React from 'react'
import './Main.css'

import ThailandBoatHoping from './Images/ThailandBoatHoping.jpg'





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
                    <img id="imgSubSectionDivideTwo" src={ThailandBoatHoping} />
                </section>

            </section>

        </>
    )
}

export default Main; 