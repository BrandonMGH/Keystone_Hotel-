import React, { useState } from 'react';
import styled from 'styled-components'

const StyleTest = styled.div`
display: ${props => props.showState}

`

let Navbar = () => {

const [reservationTab, setReservationTab] = useState(true)

const reservationState = () => {
    if(reservationTab === true){
        setReservationTab(false)
    } else{
        setReservationTab(true)
    }
}

    return (
        <div>
            <StyleTest showState={reservationTab === true ? "Block" : "None"}>
                <p>NavBar</p>
            </StyleTest>
            <button onClick={reservationState}> Reserve a Room</button>
        </div>
    )
}

export default Navbar; 