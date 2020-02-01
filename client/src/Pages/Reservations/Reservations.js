import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import API from '../../../API/API.js'
import './Reservations.css'

//** COMPONENTS **//

import RoomViewData from '../../Components/RoomViewTypes/RoomViewData/RoomViewData.js'


const RoomShowState = styled.section`
display: ${props => props.showState === true ? "Grid" : "None"};
position: relative; 
`
const DefaultShowState = styled.section`
z-index: -1;
position: relative; 
top: -25px; 
text-align: center; 
`


const Reservations = () => {
    const [guestNumber, setGuestNumber] = useState("")
    const [viewNumber, setViewNumber] = useState("")
    const [petNumber, setPetNumber] = useState("")
    const [priceNumber, setPriceNumber] = useState("")
    const [displayState, setDisplayState] = useState(false)


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
            <h1>Reservations</h1>
            <div>
            {RoomViewData.LakeView.map(objectKey => (
                    <RoomShowState key={objectKey.id} showState={objectKey.RoomInfo.guestCount < guestNumber || objectKey.RoomInfo.viewChoice !== viewNumber || objectKey.RoomInfo.petNumber !== petNumber  || objectKey.RoomInfo.price > priceNumber? false : true}>
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
                    <DefaultShowState>No Rooms our currently available that match your search criteria</DefaultShowState>
                  </div>
            <p>All Rooms come with call service to the kitchen inside our in house luxury Restaurant, The </p>

        </div>
    )
}

export default Reservations; 