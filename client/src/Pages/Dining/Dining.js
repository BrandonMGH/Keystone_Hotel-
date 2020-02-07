import React from 'react'
import './Dining.css'

import GrapeIcon from '../../Images/GrapeIcon.png'

/* COMPONENTS */ 
import Restaurant from '../../Components/RestaurantTypes/Restaurants.js'

const Dining = () => {
    return (
        <>
            <section id="diningSectionOne">
                <section id="diningSectionOneText">
                    <h1>DINING</h1>
                </section>
            </section>
            <section id="diningSectionTwo">
                <section id="diningSectionTwoQuote">
                    <h1>“One cannot think well, love well,
                    sleep well, if one has not dined well.
                    - Virginia Woolf”
                    </h1>
                </section>
                <section id="diningSectionTwoImg">
                    <img id="diningSectionTwoImgOne" src={GrapeIcon} />
                </section>
                <section id="diningSectionTwoDescription">
                    <p>Luke, what's wrong? Leia... do you remember your mother? Your real mother? Just a little bit. She died when I was very young. What do you remember? Just...images, really. Feelings. Tell me. She was very beautiful. Kind, but...sad. Why are you asking me all this? I have no memory of my mother. I never knew her. Luke, tell me. What's troubling you? Vader is here...now, on this moon. How do you know? I felt his presence. He's come for me. He can feel when I'm near. That's why I have to go. As long as I stay, I'm endangering the group and our mission here. I have to face him. Why? He's my father. Your father? There's more. It won't be easy for you to hear it, but you must.</p>
                </section>
            </section>
            <section>
                <Restaurant />
            </section>
        </>
    )
}

export default Dining; 