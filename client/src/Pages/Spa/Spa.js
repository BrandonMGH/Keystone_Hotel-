import React from 'react'
import './Spa.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa, faDumbbell, faPray, faHotTub } from '@fortawesome/free-solid-svg-icons'

import SpaRocks from '../../Images/SpaRocks.png'
import spaFacial from '../../Images/spaFacial.webp'

/* COMPONENTS */
import SpaTypes from '../../Components/SpaTypes/SpaTypes.js'

const Spa = () => {
    return (
        <section>
            <section id="spaSectionOne">
                <section id="spaSectionOneTitle">
                    <h1>SPA & WELLNESS</h1>
                </section>
            </section>
            <section id="spaSectionTwo">
                <section id="spaSectionTwoTitleContainer">
                    <h1>"The Groundwork for all happiness is
                        health" - Leigh Hunt
                    </h1>
                </section>
                <section id="spaSectionTwoImageContainer">
                    <img id="spaSectionTwoImage" src={SpaRocks} />
                </section>
                <section id="spaSectionTwoDescriptionContainer">
                    <p>What a piece of junk. She'll make point five beyond the speed of light. She may not look like much, but she's got it where it counts, kid. I've added some special modifications myself. We're a little rushed, so if you'll hurry aboard we'll get out of here. Hello, sir. Which way? All right, men. Load your weapons! Stop that ship! Blast 'em! Chewie, get us out of here! Oh, my. I'd forgotten how much I hate space travel.</p>
                </section>
            </section>
            <section id="spaSectionThree">
                <section id="spaSectionThreeText">
                    <section id="spaSectionThreeTitle">
                        <h1>SPA & WELLNESS AT A GLANCE</h1>
                    </section>
                    <section id="spaSectionThreeAmenitites">
                        <section style={{marginBottom: "50px"}}>
                            <p>SPA</p>
                            <FontAwesomeIcon size='4x' icon={faSpa} />
                        </section>
                        <section style={{marginBottom: "50px"}}>
                            <p>FITNESS CENTER</p>
                            <FontAwesomeIcon size='4x' icon={faDumbbell} />
                        </section>
                        <section style={{marginBottom: "50px"}}>
                            <p>OUTDOOR YOGA</p>
                            <FontAwesomeIcon size='4x'
                            icon={faPray} />
                        </section>
                        <section style={{marginBottom: "50px"}}>
                            <p>STEAM ROOM</p>
                            <FontAwesomeIcon size='4x'
                            icon={faHotTub} />
                        </section>
                    </section>
                </section>
                <section id="spaSectionThreeImageContainer">
                    <img id="spaSectionThreeImage" src={spaFacial} />
                </section>
            </section>
            <section id="spaSectionFour">
                <SpaTypes />
            </section>
        </section>
    )
}

export default Spa; 