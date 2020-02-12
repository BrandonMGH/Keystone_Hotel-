import React from 'react'
import './Spa.css'
import SpaRocks from '../../Images/SpaRocks.png'
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
        </section>
    )
}

export default Spa; 