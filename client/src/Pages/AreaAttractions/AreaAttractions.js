import React from 'react'
import './AreaAttractions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faMountain, faTree } from '@fortawesome/free-solid-svg-icons'

import Pinecone from '../../Images/Pinecone.png'

/* COMPONENETS */
import AreaAttractionTypes from '../../Components/AreaAttractionTypes/AreaAttractionTypes.js'

const AreaAttractions = () => {
    return (
        <section>
            <section id="areaAttractionsSectionOne">
                <section id="areaAttractionsSectionOneTitle">
                    <h1>AREA ATTRACTIONS</h1>
                </section>
            </section>
            <section id="areaAttractionsSectionTwo">
                <section id="areaAttractionsSectionTwoQuote">
                    <h1>"In all things of nature there is
                        something of the marvelous" -
                    Aristotle
                    </h1>
                </section>
                <section id="areaAttractionsSectionTwoImageContainer">
                    <img id="areaAttractionsSectionTwoImage" src={Pinecone} />
                </section>
                <section id="areaAttractionsSectionTwoDescription">
                    <p>What a piece of junk. She'll make point five beyond the speed of light. She may not look like much, but she's got it where it counts, kid. I've added some special modifications myself. We're a little rushed, so if you'll hurry aboard we'll get out of here. Hello, sir. Which way? All right, men. Load your weapons! Stop that ship! Blast 'em! Chewie, get us out of here! Oh, my. I'd forgotten how much I hate space travel.</p>
                </section>
            </section>
            <section id="areaAttractionsSectionThree">
                <section id="areaAttractionsSectionThreeBackground">
                    <section className="areaAttractionsSectionThreeIcons">
                        <h3>LAKE PRISTINE</h3>
                        <FontAwesomeIcon size='4x' id="lakeIcon" icon={faWater} />
                        <p>Aren't you a little short to be a stormtrooper? What? Oh...the uniform. I'm Luke Skywalker. I'm here to rescue you. You're who? I'm here to rescue you. I've got your R2 unit. I'm here with Ben Kenobi. Ben Kenobi is here! Where is he? Come on!</p>
                    </section>
                    <section className="areaAttractionsSectionThreeIcons">
                        <h3>BURLY MOUNTAINS</h3>
                        <FontAwesomeIcon id="mountainIcon" size='4x' icon={faMountain} />
                        <p>Aren't you a little short to be a stormtrooper? What? Oh...the uniform. I'm Luke Skywalker. I'm here to rescue you. You're who? I'm here to rescue you. I've got your R2 unit. I'm here with Ben Kenobi. Ben Kenobi is here! Where is he? Come on!</p>
                    </section>
                    <section className="areaAttractionsSectionThreeIcons">
                        <h3>THE SHROUDED FOREST</h3>
                        <FontAwesomeIcon id="forestIcon" size='4x' icon={faTree} />
                        <p>Aren't you a little short to be a stormtrooper? What? Oh...the uniform. I'm Luke Skywalker. I'm here to rescue you. You're who? I'm here to rescue you. I've got your R2 unit. I'm here with Ben Kenobi. Ben Kenobi is here! Where is he? Come on!</p>
                    </section>
                </section>
            </section>
            <section id="areaAttractionsSectionFour">
                <AreaAttractionTypes />
            </section>
        </section>
    )
}

export default AreaAttractions; 