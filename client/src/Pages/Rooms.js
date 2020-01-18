import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import API from '../../API/API.js';

let roomObject = {
    id: 1, 
    roomName: "Placeholder Name 1",
    guestCount: 2,
    bedCount: 1,
    view: "Bay View",
    squareFootage: "1000 sq. ft.",
    specialAmmenities: [""]

}
let roomObjectTwo = {
    id: 2, 
    roomName: "Placeholder Name 2",
    guestCount: 3,
    bedCount: 1,
    view: "Bay View",
    squareFootage: "1000 sq. ft.",
    specialAmmenities: [""]
}

const RoomStyles = styled.div`
display: ${props => props.showState};
justify-content: center; 
background: papayawhip;
width: 50%
z-index: 1000 
`

const Rooms = () => {
    const [ammenity, setAmmenity] = useState(true);
    const [reservationInfo, setReservationInfo] =useState([])
    const [roomInfo, setRoomInfo] = useState([roomObject, roomObjectTwo])

    useEffect (() =>{
        API.getRoomInfo()
        .then((response)=>{
            setAmmenity(response.data.boolean)
            setReservationInfo(response.data)
        })
    })

 
    return(
        <div>
            <h1>Rooms</h1>
            <p>Rooms:{ammenity === true ? "Yay" : "Nay"} </p>
            {roomInfo.map(objectKey => (
                    <RoomStyles key={objectKey.id} showState={objectKey.guestCount < 3 ? "None" : "Grid"}>
                       <p>{objectKey.roomName}</p>  
                    </RoomStyles>
                    
                    ))}
            <p>All Rooms come with call service to the kitchen inside our in house luxury Restaurant, The </p>

        </div>
    )
}

export default Rooms; 