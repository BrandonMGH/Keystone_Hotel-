import React from 'react'
import './Footer.css'

import KeystoneLogoInverse from '../../Images/KeystoneLogoInverse.png'

const Footer = () => {
    return (
        <div>
            <section id="footerContainer">
             <img id="footerKeyStoneLogo" src={KeystoneLogoInverse} />
                <section id="footerInfoContainer">
                    <section id="footerExploreContainer">
                        <h3>EXPLORE</h3>
                        <section id="footerExploreButtonss">
                        <button>Rooms</button>
                        <button>Dining</button>
                        <button>Spa</button>
                        <button>Area Attraction</button>
                        </section>
                    </section>
                    <section><p>Address</p></section>
                    <section><p>NewsLetter</p></section>
                </section>

            </section>
        </div>
    )
}

export default Footer; 