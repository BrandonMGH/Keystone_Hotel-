import React, { useState } from 'react';
import styled from 'styled-components'

import Reservations from './Reservations.js'

let MainNav = styled.div`
display: grid; 
grid-template-columns: 25% 50% 25%
justify-content: center; 
`

let NavTitle = styled.div`
display: grid;
grid-template-rows: 75% 25%;
justify-content: center; 
`

let Navbar = () => {

    const [reservationTab, setReservationTab] = useState(false)

    const reservationState = () => {
        if (reservationTab === true) {
            setReservationTab(false)
        } else {
            setReservationTab(true)
        }
    }

    return (
        <div>
            <div>
                <Reservations showState={reservationTab} />
            </div>
            <MainNav>
                <p>Logo area</p>
                <NavTitle >
                    <h1>-Keystone Hotel-</h1>
                    <p>Link area</p>
                </NavTitle>
                <div>
                <button onClick={reservationState}> Reserve a Room</button>
                </div>
            </MainNav>
        </div>
    )
}

export default Navbar; 