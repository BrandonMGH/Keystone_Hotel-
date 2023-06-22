import React, { useState } from 'react';

import API from '../../API/API.js';
import styled, { keyframes } from 'styled-components'
import './Navbar.css'
import KeystoneLogo from '../../Images/KeystoneLogo.jpg'


const ModalContainer = styled.div`
display: ${props => props.showState};
position: fixed; 
z-index: 25;
justify-items: center; 
background-color: rgba(0,0,0,0.4);
width: 100%;
height: 100%; 
margin-top: -2%; 
`

const panDown = keyframes`
from {top: -300px; opacity:0} 
to {top:2.5%; opacity:1}
`
const navPanDown = keyframes`
from {top: -300px; opacity:0} 
to {top:10%; opacity:1}
`

const ModalContent = styled.div`
position: relative; 
display: grid; 
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows:  1fr 1fr 1fr 1fr 1fr 1fr; 
grid-template-areas: 
"resModalTitle resModalTitle resModalTitle"
"resModalCheckIn resModalCheckOut resModalPrice"
"resModalGuests resModalGuests resModalGuests"
"resModalView resModalView resModalView"
"resModalPets resModalPets resModalPets"
"resModalButton resModalButton resModalButton";
text-align: center; 
justify-items: center; 
align-items: center; 
background-color: white; 
border: 2px black solid; 
height: 70%;
width: 50%; 
top: 2.5%;
animation: 1s ${panDown};
@media (max-width: 900px){
    width: 80%; 
    height: 85%; 
    grid-template-rows:1.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-areas: 
    "resModalTitle resModalTitle resModalTitle"
    "resModalCheckIn resModalCheckIn resModalCheckIn"
    "resModalCheckOut resModalCheckOut resModalCheckOut"
    "resModalPrice resModalPrice resModalPrice"
    "resModalGuests resModalGuests resModalGuests"
    "resModalView resModalView resModalView"
    "resModalPets resModalPets resModalPets"
    "resModalButton resModalButton resModalButton";
}
@media (max-height: 500px){
    height: 375px; 
    grid-template-rows:1.5fr 1fr 1fr 1fr; 
    grid-template-areas: 
    "resModalTitle resModalTitle resModalTitle"
    "resModalCheckIn resModalCheckOut resModalPrice"
    "resModalGuests resModalView resModalPets"
    "resModalButton resModalButton resModalButton";
    }
`

const NavigationModalContainer = styled.div`
display: ${props => props.navShowState};
position: fixed; 
justify-items: center; 
z-index: 100;
height: 100%;
width: 100%;
margin-top: -2%;
background-color: rgba(0,0,0,0.4);
@media (min-width: 900px){
    display: none; 
}
`
const NavigationModalContent = styled.div`
position: relative; 
height: 80%;
width: 40%; 
top: 10%; 
background-color: white; 
border: solid 2px black; 
animation: 1s ${navPanDown};
`
const Navbar = () => {
    const [modalState, setModalState] = useState(false);
    const [navModalState, setNavModalState] = useState(false);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [priceRange, setPriceRange] = useState("400");
    const [guestCount, setGuestCount] = useState("1");
    const [viewSelection, setViewSelection] = useState("3");
    const [petConfirmation, setPetConfirmation] = useState("2");



    const reservationInfoSubmit = () => {
        if (checkIn === "" || checkOut === "") {
            alert("Please select a Check-In and a Check-Out Date")
        } else {
            let updatedCheckIn = parseInt(checkIn.replace(/-/g, ''))
            let updatedCheckOut = parseInt(checkOut.replace(/-/g, ''))
            if (updatedCheckIn >= updatedCheckOut) {
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

    const ResModalStateChange = () => {
        if (modalState === true) {
            setModalState(false)
        } else {
            setModalState(true)
        }
    }

    const navModalStateChange = () => {
        if (navModalState === true) {
            setNavModalState(false)
        } else {
            setNavModalState(true)
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
                    <section id="resModalTitle">
                        <span id="resModalClose" onClick={ResModalStateChange}>&times;</span>
                        <section id="resModalTitleText">
                            <p>MAKE A RESERVATION</p>
                        </section>                    </section>
                    <section id="resModalCheckIn">
                        <p>Check In:</p> <input type="date" name="checkIn" onChange={event => setCheckIn(event.target.value)} />
                    </section>
                    <section id="resModalCheckOut">
                        <p>Check Out:</p> <input type="date" name="checkOut" onChange={event => setCheckOut(event.target.value)} />
                    </section>
                    <section id="resModalPrice">
                        <p>Price Range: ${priceRange} </p>
                        <input style={{ width: "100%" }} type="range" name="priceRange" min="250" max="1500" value={priceRange} onChange={event => setPriceRange(event.target.value)} />
                    </section>
                    <section id="resModalGuestCount">
                        <p>Number of Guests</p>
                        <select name="guestCount" value={guestCount} onChange={event => setGuestCount(event.target.value)}>
                            <option value="2" >2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                        </select>
                    </section>
                    <section id="resModalView">
                        <p>Select a View</p>
                        <select name="roomView" value={viewSelection} onChange={event => setViewSelection(event.target.value)}>
                            <option value="1">Lake View</option>
                            <option value="2">Mountain View</option>
                            <option value="3">Forest View</option>
                            <option value="3">No Preference</option>
                        </select>
                    </section>
                    <section id="resModalPet">
                        <p>Bringing a Pet?</p>
                        <select name="petSelection" value={petConfirmation} onChange={event => setPetConfirmation(event.target.value)}>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select>
                    </section>
                    <section id="resModalSubmitButton">
                        <button onClick={reservationInfoSubmit} > SELECT ROOM </button>
                    </section>
                </ModalContent>
            </ModalContainer>
            <NavigationModalContainer navShowState={navModalState === true ? "grid" : "none"}>
                <NavigationModalContent>
                    <span id="navModalClose" onClick={navModalStateChange}>&times;</span>
                    <section id="modalNavLinks">
                        <p><a className="navLink" href="/hotel">THE HOTEL</a></p>
                        <p><a className="navLink" href="/rooms">ROOMS</a></p>
                        <p><a className="navLink" href="/dining">DINING</a></p>
                        <p><a className="navLink" href="/spa">SPA & WELLNESS</a></p>
                        <p><a className="navLink" href="/areaAttractions">AREA ATTRACTIONS</a></p>
                    </section>
                </NavigationModalContent>
            </NavigationModalContainer>
            <section id="mainNav">
                <section id="navLogo">
                    <a href="/"><img id="KeystoneLogo" src={KeystoneLogo} /></a>
                </section>
                <section id="navTitle">
                    <h1>KEYSTONE HOTEL</h1>
                </section>
                <section id="navLinks">
                    <p>|</p>
                    <p><a className="navLink" href="/hotel">THE HOTEL</a></p>
                    <p>|</p>
                    <p><a className="navLink" href="/rooms">ROOMS</a></p>
                    <p>|</p>
                    <p><a className="navLink" href="/dining">DINING</a></p>
                    <p>|</p>
                    <p><a className="navLink" href="/spa">SPA & WELLNESS</a></p>
                    <p>|</p>
                    <p><a className="navLink" href="/areaAttractions">AREA ATTRACTIONS</a></p>
                    <p>|</p>
                </section>
                <section id="navReservations">
                    <button id="navMenuButton" onClick={navModalStateChange}>Navigation</button>
                    <button id="navResButton" onClick={ResModalStateChange}> Make a Reservation</button>
                </section>
            </section>
        </div>


    )
}

export default Navbar; 