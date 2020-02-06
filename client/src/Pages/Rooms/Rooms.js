import React, { useState } from "react"
import './Rooms.css'

//** COMPONENTS **//
import LakeViewRoom from "../../Components/RoomViewTypes/LakeViewRoom.js"
import MountainViewRoom from '../../Components/RoomViewTypes/MountainViewRoom.js'
import ForestViewRoom from '../../Components/RoomViewTypes/ForestViewRoom.js'

import PadlockIcon from '../../Images/PadlockIcon.png'


const Rooms = () => {
    const [viewType, setViewType] = useState(<LakeViewRoom />)
    return (
        <>
            <section id="roomsSectionOne">
                <section id="roomSectionOneText">
                    <h1>ROOMS</h1>
                </section>
            </section>
            <section id="roomsSectionTwo">
                <section id="roomSectionTwoQuote">
                    <h1>“Home is not a place…it’s a feeling.” - anonymous</h1>
                </section>
                <section id="roomSectionTwoImg">
                    <img id="roomSectionTwoImgOne" src={PadlockIcon} />
                </section>
                <section id="roomSectionTwoDescription">
                    <p>Luke, what's wrong? Leia... do you remember your mother? Your real mother? Just a little bit. She died when I was very young. What do you remember? Just...images, really. Feelings. Tell me. She was very beautiful. Kind, but...sad. Why are you asking me all this? I have no memory of my mother. I never knew her. Luke, tell me. What's troubling you? Vader is here...now, on this moon. How do you know? I felt his presence. He's come for me. He can feel when I'm near. That's why I have to go. As long as I stay, I'm endangering the group and our mission here. I have to face him. Why? He's my father. Your father? There's more. It won't be easy for you to hear it, but you must.</p>
                </section>
            </section>
            <section>
                <button onClick={() => setViewType(<LakeViewRoom />)}>LAKEVIEW</button>
                <button onClick={() => setViewType(<MountainViewRoom />)}>MOUNTAINVIEW</button>
                <button onClick={() => setViewType(<ForestViewRoom />)}>FORESTVIEW</button>
                <section id="roomSectionThree">
                    {viewType}
                </section>
            </section>
        </>
    )
}

export default Rooms 