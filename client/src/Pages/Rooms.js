import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import API from '../../API/API.js';

const Rooms = () => {
    const [ammenity, setAmmenity] = useState(true);
    const [roomInfo, setRoomInfo] = useState(roomObject.roomOne.roomName)
    useEffect (() =>{
        API.getRoomInfo()
        .then((response)=>{
            setAmmenity(response.data.boolean)
        })
    })

    let roomObject = {
        roomOne:{
            roomName: "Placeholder Name 1",
            guestCount: 2,
            bedCount: 1,
            view: "Bay View",
            squareFootage: "1000 sq. ft.",
            specialAmmenities: [""]
        },
        roomTwo:{
            roomName: "Placeholder Name 2",
            guestCount: 3,
            bedCount: 2,
            view: "Bay View",
            squareFootage: "1000 sq. ft.",
            specialAmmenities: ["complimentary mini bar access"]
        }
    }


    return(
        <div>
            <h1>Rooms</h1>
            <p>Rooms:{ammenity === true ? "Yay" : "Nay"} </p>
            {roomInfo}
            <p>All Rooms come with call service to the kitchen inside our in house luxury Restaurant, The </p>

        </div>
    )
}

export default Rooms; 