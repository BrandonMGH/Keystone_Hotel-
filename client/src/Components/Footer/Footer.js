import React, { useState } from 'react'
import './Footer.css'

import KeystoneLogoInverse from '../../Images/KeystoneLogoInverse.png'
import API from '../../API/API'

const Footer = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const newsLetterSignUp = () => {
        let newsLetterObject = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }

        return axiosCall(newsLetterObject)
    }

    const axiosCall = (newsletterObject) => {
        API.upNewsletterInfo(newsletterObject)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <section id="footerContainer">
            <section id="footerLogoContainer">
                <p className="footerKeyStoneLogo">____</p>
                <img alt="KeystoneLogoInverse" id="footerKeyStoneLogo" src={KeystoneLogoInverse} />
                <p className="footerKeyStoneLogo">____</p>
            </section>
            <section id="footerExploreContainer">
                <h3>EXPLORE</h3>
                <p>Rooms</p>
                <p>Dining</p>
                <p>Spa</p>
                <p>Area Attraction</p>
            </section>
            <section id="footerAddressContainer">
                <h3>KEYSTONE HOTEL</h3>
                <p>5341 Huron Court, Oceanside, CA 92056</p>
                <p>760-429-4146</p>
                <p>BrandonMGH@Yahoo.com</p>
            </section>
            <section id="footerNewsletterContainer">
                <h3>NEWSLETTER SIGN UP</h3>
                <input placeholder="FirstName" className="footerNewsLetterInput" value={firstName} onChange={event => setFirstName(event.target.value)}></input>
                <input placeholder="LastName" className="footerNewsLetterInput" value={lastName} onChange={event => setLastName(event.target.value)} ></input>
                <input placeholder="Email" className="footerNewsLetterInput" value={email} onChange={event => setEmail(event.target.value)}></input>
                <button id="footerNewsLetterButton"style={{width: "40%",  margin:"2%"}} onClick={newsLetterSignUp}>-></button>
            </section>
        </section>
    )
}

export default Footer; 