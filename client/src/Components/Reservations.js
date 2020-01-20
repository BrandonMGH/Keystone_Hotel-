import React, { useState } from 'react';
import API from '../../API/API.js';
import styled, { keyframes } from 'styled-components'




const ModalContainer = styled.div`
display: ${props => props.showState};
position: fixed; 
z-index: 1;
justify-content: center; 
background-color: rgba(0,0,0,0.4);
width: 100%;
height: 100%; 
`

const panDown = keyframes`
from {top:-300px; opacity:0} 
to {top:25%; opacity:1}
`

const ModalContent = styled.div`
position: relative; 
background-color: red; 
height: 50%; 
top: 25%; 
animation: 1s ${panDown}
`


const Reservations = (props) => {
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [priceRange, setPriceRange] = useState("400")
    const [guestCount, setGuestCount] = useState("1")
    const [viewSelection, setViewSelection] = useState("3")
    const [petConfirmation, setPetConfirmation] = useState("2")
 

    let reservationInfoSubmit = () =>{
        if(checkIn === "" || checkOut === ""){
            alert("Please select a Check-In and a Check-Out Date")
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

    let axiosCall = (resObject) => {
        API.reservationInfo(resObject)
            .then((response) => {
                console.log(response)
                location.href = "/rooms";
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (

            <ModalContainer showState={props.showState === true ? "grid" : "None"}>
                <ModalContent>
                <span>&times;</span>
                <h1>Make a Reservation</h1>
                Check In: <input type="date" name="checkIn" onChange={ event => setCheckIn(event.target.value)} />
                Check Out: <input type="date" name="checkOut" onChange={ event => setCheckOut(event.target.value)}/>
                Price Range: ${priceRange}<input type="range" name="priceRange" min="250" max="1500" value={priceRange} onChange={ event => setPriceRange(event.target.value)} />
                <div>
                    <p>Number of Guests</p>
                    <select name="guestCount" value={guestCount}  onChange={event => setGuestCount(event.target.value)}>
                        <option value="1" >1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4 +</option>
                    </select>
                    <p>Select a View</p>
                    <select name="roomView" value={viewSelection} onChange={event => setViewSelection(event.target.value)}>
                        <option value="1">Ocean Cliffside</option>
                        <option value="2">Forest</option>
                        <option value="3">Mountain</option>
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
    )
}

export default Reservations; 