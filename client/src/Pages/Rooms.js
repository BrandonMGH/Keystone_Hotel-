import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import API from '../../API/API.js';

let ammenity = styled.div`
display
`
const Rooms = () => {
    const [ammenity, setAmmenity] = useState(true)
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

        </div>
    )
}

export default Rooms; 