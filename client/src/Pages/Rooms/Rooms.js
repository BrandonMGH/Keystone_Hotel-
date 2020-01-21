import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import API from '../../../API/API.js';
import './Rooms.css'

let roomObject = {
    id: 1, 
    roomName: "Placeholder Name 1",
    guestCount: 2,
    bedCount: 1,
    viewChoice: 1,
    view: "Ocean Cliffside",
    squareFootage: "1000 sq. ft.",
    petNumber: 1,
    pet: "Yes",
    additionalAmmenities: [""],
    price: 400

}
let roomObjectTwo = {
    id: 2, 
    roomName: "Placeholder Name 2",
    guestCount: 3,
    bedCount: 1,
    viewChoice: 2, 
    view: "Forest View",
    squareFootage: "1000 sq. ft.",
    petNumber: 1,
    pet: "Yes",
    additionalAmmenities: [""],
    price: 800
}

let roomObjectThree = {
    id: 3, 
    roomName: "Placeholder Name 3",
    guestCount: 4,
    bedCount: 2,
    viewChoice: 3, 
    view: "Mountain View",
    squareFootage: "1000 sq. ft.",
    petNumber: 2,
    pet: "No",
    additionalAmmenities: [""],
    price: 1250
}

const RoomShowState = styled.section`
display: ${props => props.showState};
`

const Rooms = () => {
    const [guestNumber, setGuestNumber] = useState("")
    const [viewNumber, setViewNumber] = useState("")
    const [petNumber, setPetNumber] = useState("")
    const [priceNumber, setPriceNumber] = useState("")
    const [roomInfo, setRoomInfo] = useState([roomObject, roomObjectTwo, roomObjectThree])

    useEffect (() =>{
        API.getRoomInfo()
        .then((response)=>{
            console.log(response)
            setGuestNumber(parseInt(response.data.guestCount))
            setViewNumber(parseInt(response.data.viewSelection))
            setPetNumber(parseInt(response.data.petConfirmation))
            setPriceNumber(parseInt(response.data.priceRange))            
        })
    })

 
    return(
        <div>
            <h1>Rooms</h1>
            {roomInfo.map(objectKey => (
                    <RoomShowState key={objectKey.id} showState={objectKey.guestCount < guestNumber || objectKey.viewChoice !== viewNumber || objectKey.petNumber !== petNumber  || objectKey.price > priceNumber? "None" : "Grid"}>
                      <section id="roomContainer">
                          <section id="roomImage">
                             <p>Room Image</p>
                          </section>
                          <section id="roomTitle">
                            <h1>Room Title</h1>
                          </section>
                          <section id="roomSummary">
                            <p>Room Summary</p>
                          </section>
                          <section id="roomAmenities">
                            <p>Room Amenities</p>
                          </section>
                          <section id="roomDescription">
                            <p>Room Description</p>
                          </section>
                      </section>
                    </RoomShowState>
                    ))}
            <p>All Rooms come with call service to the kitchen inside our in house luxury Restaurant, The </p>

        </div>
    )
}

export default Rooms; 