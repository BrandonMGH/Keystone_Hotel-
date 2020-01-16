import React, { useState } from 'react';
import styled from 'styled-components'

import Reservations from './Reservations.js'

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
            <Reservations showState={reservationTab} />
            <button onClick={reservationState}> Reserve a Room</button>
        </div>
    )
}

export default Navbar; 