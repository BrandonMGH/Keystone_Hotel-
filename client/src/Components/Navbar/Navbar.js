import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

import API from '../../API/API.js';
import styled, { keyframes } from 'styled-components'
import './Navbar.css'
import KeystoneLogo from '../../Images/KeystoneLogo.jpg'


const ModalContainer = styled.div`
display: ${props => props.showState};
position: fixed; 
z-index: 25;
justify-content: center; 
background-color: rgba(0,0,0,0.4);
width: 100%;
height: 100%; 
`

const panDown = keyframes`
from {top: -300px; opacity:0} 
to {top:25%; opacity:1}
`

const ModalContent = styled.div`
position: relative; 
background-color: red; 
height: 50%; 
top: 25%
animation: 1s ${panDown}
`



const Navbar = () => {
    const [modalState, setModalState] = useState(false)
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [priceRange, setPriceRange] = useState("400")
    const [guestCount, setGuestCount] = useState("1")
    const [viewSelection, setViewSelection] = useState("3")
    const [petConfirmation, setPetConfirmation] = useState("2")



    const reservationInfoSubmit = () => {
        if (checkIn === "" || checkOut === "") {
            alert("Please select a Check-In and a Check-Out Date")
        } else {
            let updatedCheckIn = parseInt(checkIn.replace(/-/g, ''))
            let updatedCheckOut = parseInt(checkOut.replace(/-/g, ''))
            if(updatedCheckIn >= updatedCheckOut){
                alert("Please select a proper Check-Out Date")
            } else {
                let resObject = {
                            checkIn: checkIn,
                            checkOut: checkOut,
                            guestCount: guestCount,
                            viewSelection: viewSelection,
                            petConfirmation: petConfirmation,
                            priceRange: priceRange,
                        }
                        return axiosCall(resObject)
            }
        }
    };

    const modalStateChange = () => {
        if (modalState === true) {
            setModalState(false)
        } else {
            setModalState(true)
        }
    }

    const axiosCall = (resObject) => {
        API.reservationInfo(resObject)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
            window.location.replace("/reservations")
      
    }


    return (
        <div>
            <ModalContainer showState={modalState === true ? "grid" : "None"}>
                <ModalContent>
                    <span onClick={modalStateChange}>&times;</span>
                    <h1>Make a Reservation</h1>
                    Check In: <input type="date" name="checkIn" onChange={event => setCheckIn(event.target.value)} />
                    Check Out: <input type="date" name="checkOut" onChange={event => setCheckOut(event.target.value)} />
                    Price Range: ${priceRange}<input type="range" name="priceRange" min="250" max="1500" value={priceRange} onChange={event => setPriceRange(event.target.value)} />
                    <div>
                        <p>Number of Guests</p>
                        <select name="guestCount" value={guestCount} onChange={event => setGuestCount(event.target.value)}>
                            <option value="2" >2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                        </select>
                        <p>Select a View</p>
                        <select name="roomView" value={viewSelection} onChange={event => setViewSelection(event.target.value)}>
                            <option value="1">Lake View</option>
                            <option value="2">Mountain View</option>
                            <option value="3">Forest View</option>
                            <option value="3">No Preference</option>
                        </select>
                        <p>Bringing a Pet?</p>
                        <select name="petSelection" value={petConfirmation} onChange={event => setPetConfirmation(event.target.value)}>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                    <button onClick={reservationInfoSubmit} > SELECT ROOM </button>
                </ModalContent>
            </ModalContainer>
            <section id="mainNav">
                <section id="navLogo">
                   <a href="/"><img id="KeystoneLogo" src={KeystoneLogo} /></a> 
                </section>
                <section id="navTitle">
                    <h1>-KEYSTONE HOTEL-</h1>
                </section>
                <section id="navLinks">
                    <p>|</p>    
                    <p className="navLink">The Hotel</p>
                    <p>|</p>
                    <p className="navLink">Rooms</p>
                    <p>|</p>
                    <p className="navLink">Dining</p>
                    <p>|</p>
                    <p className="navLink">Spa & Wellness</p>
                    <p>|</p>
                    <p className="navLink">Area Attractions</p>
                    <p>|</p>
                </section>
                <section id="navReservations">
                    <button id="navHamburgerMenu">NavMenu</button>
                    <button id="navResButton" onClick={modalStateChange}> Reserve a Room</button>
                </section>
            </section>
        </div>


    )
}

export default Navbar; 