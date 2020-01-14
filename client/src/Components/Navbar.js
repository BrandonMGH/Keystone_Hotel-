import React, { useState } from 'react';
import styled from 'styled-components'

const StyleTest = styled.div`
display: ${props => props.showState};
justify-content: center; 
background: papayawhip;
width: 50%
z-index: 1000 
`

let Navbar = () => {

    const [reservationTab, setReservationTab] = useState(true)

    const reservationState = () => {
        if (reservationTab === true) {
            setReservationTab(false)
        } else {
            setReservationTab(true)
        }
    }

    return (
        <div>
            <div style={{margin: "auto"}}>
            <StyleTest showState={reservationTab === true ? "grid" : "None"}>Reservation Box</StyleTest>
            </div>
            <button onClick={reservationState}> Reserve a Room</button>
        </div>
    )
}

export default Navbar; 