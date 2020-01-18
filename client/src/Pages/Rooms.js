import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import API from '../../API/API.js';

let roomObject = {
       
    roomName: "Placeholder Name 1",
    guestCount: 2,
    bedCount: 1,
    view: "Bay View",
    squareFootage: "1000 sq. ft.",
    specialAmmenities: [""]

}

const Rooms = () => {
    const [ammenity, setAmmenity] = useState(true);
    const [roomInfo, setRoomInfo] = useState([roomObject])

    useEffect (() =>{
        API.getRoomInfo()
        .then((response)=>{
            setAmmenity(response.data.boolean)
        })
    })

 
    return(
        <div>
            <h1>Rooms</h1>
            <p>Rooms:{ammenity === true ? "Yay" : "Nay"} </p>
            {roomInfo.map(key => (
                        
                     <p>{key.roomName}</p>
                    
                    ))}
            <p>All Rooms come with call service to the kitchen inside our in house luxury Restaurant, The </p>

        </div>
    )
}

export default Rooms; 