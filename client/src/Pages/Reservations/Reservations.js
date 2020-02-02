import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'

import API from '../../../API/API.js'
import './Reservations.css'

//** COMPONENTS **//

import RoomViewData from '../../Components/RoomViewTypes/RoomViewData/RoomViewData.js'



const ModalContainer = styled.div`
display: ${props => props.showState};
position: fixed; 
z-index: 1;
justify-items: center; 
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
background-color: white; 
height: 50%; 
width: 50%; 
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
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")
  const [modalState, setModalState] = useState(false)
  const [modalRoom, setModalRoom] = useState(RoomViewData.LakeView[0])
  const [modalFirstName, setModalFirstName] = useState("")
  const [modalLastName, setModalLastName] = useState("")
  const [modalEmail, setModalEmail] = useState("")

  useEffect(() => {
    API.getRoomInfo()
      .then((response) => {
        console.log(response)
        setGuestNumber(parseInt(response.data.guestCount))
        setViewNumber(parseInt(response.data.viewSelection))
        setPetNumber(parseInt(response.data.petConfirmation))
        setPriceNumber(parseInt(response.data.priceRange))
        setCheckInDate(response.data.checkIn)
        setCheckOutDate(response.data.checkOut)
      })
  });

  const axiosCall = () => {
    let modalReservationInfo = {
      modalFirstName: modalFirstName,
      modalLastName: modalLastName,
      modalEmail: modalEmail,
      modalCheckin: checkInDate,
      modalCheckOut: checkOutDate,
    }
    if (modalFirstName === "" || modalLastName === "") {
      alert("First and Last name fields cannot be empty")
    } else {
      alert("Your Room has been booked!")
      modalStateChange();
      API.reservationConfirmation(modalRoom, modalReservationInfo)
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

    modalStateChange();
  };
  return (
    <section>
      <ModalContainer showState={modalState === true ? "grid" : "None"}>
        <ModalContent>
          <span onClick={modalStateChange}>&times;</span>
          <h1>{modalRoom.RoomTitle}</h1>
          <img style={{ width: "30%", height: "45%" }} src={modalRoom.RoomImage} />
          <p>View Type: {modalRoom.RoomInfo.view}</p>
          <p>Nightly Rate: {modalRoom.RoomInfo.price}</p>
          <input value={modalFirstName} onChange={() => setModalFirstName(event.target.value)} />
          <input value={modalLastName} onChange={() => setModalLastName(event.target.value)} />
          <input value={modalEmail} onChange={() => setModalEmail(event.target.value)} />
          <button onClick={axiosCall}>CLICK ME</button>
        </ModalContent>
      </ModalContainer>
      <section id="reservationSectionOne">
        <section id="reservationSectionText">
          <h1>
            RESERVATIONS
          </h1>
        </section>
      </section>
      <section>
        {RoomViewData.LakeView.map(properties => (
          <RoomShowState key={properties.id} showState={properties.RoomInfo.guestCount < guestNumber || properties.RoomInfo.viewChoice !== viewNumber || properties.RoomInfo.petNumber !== petNumber || properties.RoomInfo.price > priceNumber ? false : true}>
            <section className="roomContainer">
              <section className="roomImageContainer">
                <img className="roomImage" src={properties.RoomImage} />
                <button className="roomButton" value={properties.reservationId} onClick={roomSelection}>RESERVE ROOM</button>
              </section>
              <section className="roomTitleContainer">
                <p className="roomTitle">{properties.RoomTitle}</p>
                <p>{properties.RoomInfo.view}</p>
              </section>
              <section className="roomSummaryContainer">
                <p className="roomSummary">{properties.RoomDescription}</p>
              </section>
              <section className="roomAmenitiesContainer">
              <section className="roomAmenities">
                <h3>Room Amenities</h3>
                <p>{properties.RoomInfoAndAmenities.BedType}</p>
                <p>{properties.RoomInfoAndAmenities.Internet}</p>
                <p>{properties.RoomInfoAndAmenities.Television}</p>
                <p>{properties.RoomInfoAndAmenities.Bathroom}</p>
                <p>{properties.RoomInfoAndAmenities.CoffeeMaker}</p>
                <p>{properties.RoomInfoAndAmenities.Fridge}</p>
                <p>{properties.RoomInfoAndAmenities.Robes}</p>
                </section>
              </section>
              <section className="roomDescriptionContainer">
                <section className="roomDescription">
                <h3>Room Description</h3>
                <p>{properties.RoomInfoAndAmenities.Size}</p>
                <p>{properties.RoomInfo.bedcount}</p>
                <p>{properties.RoomInfo.view}</p>
                <p>{properties.RoomInfo.pet}</p>
                <p>{properties.RoomInfo.price}</p>
                </section>
              </section>
            </section>
          </RoomShowState>
        ))}
        <DefaultShowState>No Rooms our currently available that match your search criteria</DefaultShowState>
      </section>
    </section>
  )
}

export default Reservations; 