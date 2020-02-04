import React, {useState} from 'react'
import './Footer.css'

import KeystoneLogoInverse from '../../Images/KeystoneLogoInverse.png'
import API from '../../../API/API'

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
        .then((response)=> {
            console.log(response)
        }).catch((error)=> {
            console.log(error)
        })
    }
    return (
        <div>
            <section id="footerContainer">
                <section id="footerLogoContainer">
                <p className="footerKeyStoneLogo">____</p>
                <img className="footerKeyStoneLogo" src={KeystoneLogoInverse} />
                <p className="footerKeyStoneLogo">____</p>
                </section>
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
                    <section>
                        <h3>KEYSTONE HOTEL</h3>
                        <p>5341 Huron Court, Oceanside, CA 92056</p>
                        <p>760-429-4146</p>
                        <p>BrandonMGH@Yahoo.com</p>
                    </section>
                    <section>
                        <h2>Sign Up for our Newsletter!</h2>
                        <input placeholder="FirstName" value={firstName} onChange={event => setFirstName(event.target.value)}></input>
                        <input placeholder="LastName" value={lastName} onChange={event => setLastName(event.target.value)} ></input>
                        <input placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}></input>
                        <button onClick={newsLetterSignUp}>-></button>
                    </section>
                </section>

            </section>
        </div>
    )
}

export default Footer; 