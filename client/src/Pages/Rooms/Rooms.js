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
                    <p>There are three room types (Standard, Junior Suite, and Deluxe Suite) and each room comes with a specific view type (Lake View, Mountain View, Forest View).</p>
                </section>
            </section>
            <section id="roomSectionThree">
                <section id="roomSectionThreeButtons">
                    <button id="roomSectionThreeButtonOne"  onClick={() => setViewType(<LakeViewRoom />)}>LAKEVIEW</button>
                    <button id="roomSectionThreeButtonTwo"  onClick={() => setViewType(<MountainViewRoom />)}>MOUNTAINVIEW</button>
                    <button id="roomSectionThreeButtonThree"  onClick={() => setViewType(<ForestViewRoom />)}>FORESTVIEW</button>
                </section>
                <section id="roomSectionThreeRoomsContainer">
                    {viewType}
                </section>
            </section>
        </>
    )
}

export default Rooms 