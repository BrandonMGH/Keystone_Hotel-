import React, { useState } from 'react';
import API from '../../API/API.js';
import styled from 'styled-components'

const StyleTest = styled.div`
display: ${props => props.showState};
justify-content: center; 
background: papayawhip;
width: 50%
z-index: 1000 
`


const Reservations = (props) => {
    const [booleanValue, setBooleanValue] = useState(false)
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [priceRange, setPriceRange] = useState("400")
    const [guestCount, setGuestCount] = useState("1")
    const [viewSelection, setViewSelection] = useState("4")
    const [petConfirmation, setPetConfirmation] = useState("1")
 

    let newtest = () =>{
        if(checkIn === "" || checkOut === ""){
            alert("Please select a Check-In and a Check-Out Date")
        } else {
            let resObject = {
                checkIn: checkIn,
                checkOut: checkOut,
                priceRange: priceRange,
                guestCount: guestCount,
                viewSelection: viewSelection,
                petConfirmation: petConfirmation, 
            }
            return axiosCall(resObject)
        }
    
    }

    let axiosCall = (resObject) => {
        API.reservationInfo(resObject)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>
            <StyleTest showState={props.showState === true ? "grid" : "None"}>
                <h1>Make a Reservation</h1>
                Check In: <input type="date" name="checkIn" onChange={ event => setCheckIn(event.target.value)} />
                Check Out: <input type="date" name="checkOut" onChange={ event => setCheckOut(event.target.value)}/>
                Price Range<input type="range" name="priceRange" min="400" max="1000" value={priceRange} onChange={ event => setPriceRange(event.target.value)} />
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
                        <option value="4">No Preference</option>
                    </select>
                    <p>Bringing a Pet?</p>
                    <select name="petSelection" value={petConfirmation} onChange={event => setPetConfirmation(event.target.value)}>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                </div>
               <button onClick={newtest}>Test Button</button>
                <a onClick={newtest} href='/rooms'>CLICK ME</a>
            </StyleTest>

        </div>
    )
}

export default Reservations; 