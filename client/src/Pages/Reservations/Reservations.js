import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'

import API from '../../../API/API.js'
import './Reservations.css'

//** COMPONENTS **//

import RoomViewData from '../../Components/RoomViewTypes/RoomViewData/RoomViewData.js'
import { set } from 'mongoose';


const ModalContainer = styled.div`
display: ${props => props.showState};
position: fixed; 
z-index: 1;
justify-content: center; 
background-color: rgba(0,0,0,0.4);
width: 100%;
height: 100%; 
top: 0%; 
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


const RoomShowState = styled.section`
display: ${props => props.showState === true ? "Grid" : "None"};
position: relative; 
`
const DefaultShowState = styled.section`
z-index: -1;
position: relative; 
top: -25px; 
text-align: center; 
`


const Reservations = () => {
  const [guestNumber, setGuestNumber] = useState("")
  const [viewNumber, setViewNumber] = useState("")
  const [petNumber, setPetNumber] = useState("")
  const [priceNumber, setPriceNumber] = useState("")
  const [modalState, setModalState] = useState(false)
  const [modalRoom, setModalRoom] = useState(RoomViewData.LakeView[0])
  const [modalFirstName, setModalFirstName] = useState("")
  const [modalLastName, setModalLastName] = useState("")
  
  useEffect(() => {
    API.getRoomInfo()
      .then((response) => {
        console.log(response)
        setGuestNumber(parseInt(response.data.guestCount))
        setViewNumber(parseInt(response.data.viewSelection))
        setPetNumber(parseInt(response.data.petConfirmation))
        setPriceNumber(parseInt(response.data.priceRange))
      })
  });

  const axiosCall = () => {
    if(modalFirstName === "" || modalLastName === ""){
      alert("First and Last name fields cannot be empty")
    } else {
      alert("Your Room has been booked!")
        modalStateChange(); 
      API.reservationConfirmation(modalRoom, modalFirstName, modalLastName)
      .then((response) => {
          console.log(response)
      })
      .catch((error) => {
          console.log(error)
      })
    }
};

  let modalStateChange = () => {
    if (modalState === true) {
      setModalState(false)
    } else {
      setModalState(true)
    }
  };

  let roomSelection = () => {
    let roomId = parseInt(event.target.value)
    console.log(roomId)
    if (roomId === 1) {
      setModalRoom(RoomViewData.LakeView[0])
    } else if (roomId === 2) {
      setModalRoom(RoomViewData.LakeView[1])
    } else if (roomId === 3)
      setModalRoom(RoomViewData.LakeView[2])

    if (modalState === true) {
      setModalState(false)
    } else {
      setModalState(true)
    }
  };
  return (
    <div>
      <ModalContainer showState={modalState === true ? "grid" : "None"}>
        <ModalContent>
          <span onClick={modalStateChange}>&times;</span>
          <h1>{modalRoom.RoomTitle}</h1>
          <img style={{width: "30%", height: "45%" }} src={modalRoom.RoomImage} />
          <p>View Type: {modalRoom.RoomInfo.view}</p>
          <p>Nightly Rate: {modalRoom.RoomInfo.price}</p>
          <input value={modalFirstName} onChange={()=> setModalFirstName(event.target.value)} />
          <input value={modalLastName} onChange={()=> setModalLastName(event.target.value)} />
          <button onClick={axiosCall}>CLICK ME</button>
        </ModalContent>
      </ModalContainer>
      <h1>Reservations</h1>
      <div>
        {RoomViewData.LakeView.map(objectKey => (
          <RoomShowState key={objectKey.id} showState={objectKey.RoomInfo.guestCount < guestNumber || objectKey.RoomInfo.viewChoice !== viewNumber || objectKey.RoomInfo.petNumber !== petNumber || objectKey.RoomInfo.price > priceNumber ? false : true}>
            <section className="roomContainer">
              <section className="roomImageContainer">
                <img className="roomImage" src={objectKey.RoomImage} />
                <button value={objectKey.reservationId} onClick={roomSelection}>RESERVE ROOM</button>
              </section>
              <section className="roomTitle">
                <h1>Room Title</h1>
              </section>
              <section className="roomSummary">
                <p>Room Summary</p>
              </section>
              <section className="roomAmenities">
                <p>Room Amenities</p>
              </section>
              <section className="roomDescription">
                <p>Room Description</p>
              </section>
  
            </section>
          </RoomShowState>
        ))}
        <DefaultShowState>No Rooms our currently available that match your search criteria</DefaultShowState>
      </div>
    </div>
  )
}

export default Reservations; 