import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import './Reservations.css'
import API from '../../API/API.js'


//** COMPONENTS **//

import RoomViewData from '../../Components/RoomViewTypes/RoomViewData/RoomViewData.js'



const ModalContainer = styled.div`
z-index: 1000; 
display: ${props => props.showState};
position: fixed; 
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
z-index: 50;
display: grid;
text-align: center; 
justify-items: center; 
background-color: white; 
border: solid 2px black;
width: 50%; 
height: 95%; 
animation: 1s ${panDown};
@media (max-width: 900px){
  width: 80%; 
}
@media(max-height: 650px){
  height: 100%;
}
@media (max-height: 500px){
  height: 100%;
}
`



const RoomShowState = styled.section`
display: ${props => props.showState === true ? "Grid" : "None"};
position: relative; 
z-index: 0; 
margin-bottom: -3%; 
@media(min-height: 200px){
  z-index: 10; 
};
@media(max-width: 900px){
  margin-bottom: -10%; 
}
`
const DefaultShowState = styled.section`
text-align: center; 
font-size: 18px; 
position: relative; 
padding-top: 3%; 
top: -25px; 
z-index: 1;
@media(max-width: 900px){
  padding-top: 6%; 
  font-size: 12px; 
}
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
    if (modalFirstName === "" || modalLastName === "" || modalEmail === "") {
      alert("First Name, Last Name and/or Email fields cannot be empty")
    } else {
      alert("Your Room has been booked!  Check the email that you provided for your reservation details!")
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

  const modalStateChange = () => {
    if (modalState === true) {
      setModalState(false)
    } else {
      setModalState(true)
    }
  };

  const roomSelection = (event) => {
    let roomId = parseInt(event.target.value)
    console.log(roomId)
    if (roomId === 1) {
      setModalRoom(RoomViewData.LakeView[0])
    } else if (roomId === 2) {
      setModalRoom(RoomViewData.LakeView[1])
    } else if (roomId === 3) {
      setModalRoom(RoomViewData.LakeView[2])
    } else if (roomId === 4) {
      setModalRoom(RoomViewData.MountainView[0])
    } else if(roomId === 5){
      setModalRoom(RoomViewData.MountainView[1])
    } else if(roomId === 6){
      setModalRoom(RoomViewData.MountainView[2])
    } else if(roomId === 7){
      setModalRoom(RoomViewData.ForestView[0])
    } else if(roomId === 8){
      setModalRoom(RoomViewData.ForestView[1])
    } else if(roomId === 9){
      setModalRoom(RoomViewData.ForestView[2])
    }
    modalStateChange();
  };
  return (
    <>
      <ModalContainer showState={modalState === true ? "grid" : "None"}>
        <ModalContent>
            <span className="modalContentClose" onClick={modalStateChange}>&times;</span>
          <h1 className="modalContentTitleText">{modalRoom.RoomTitle}</h1>
          <img className="modalImage" src={modalRoom.RoomImage} />
          <hr className="modalContentLine" />
          <h3 className="modalContentTitleText">ROOM INFO</h3>
          <p className="modalContentText">View Type: {modalRoom.RoomInfo.view}</p>
          <p className="modalContentText">Nightly Rate: {modalRoom.RoomInfo.price}</p>
          <p className="modalContentText">Maximum Occupancy: {modalRoom.RoomInfo.guestCount}</p>
          <p className="modalContentText">Check-In Date: {checkInDate}</p>
          <p className="modalContentText">Check-Out Date: {checkOutDate}</p>
          <hr className="modalContentLine" />
          <h3 className="modalContentTitleText">ENTER RESERVATION INFO</h3>
          <input className="modalContentInput" placeholder="First Name" value={modalFirstName} onChange={(event) => setModalFirstName(event.target.value)} />
          <input className="modalContentInput" placeholder="Last Name" value={modalLastName} onChange={(event) => setModalLastName(event.target.value)} />
          <input className="modalContentInput" placeholder="Email" value={modalEmail} onChange={(event) => setModalEmail(event.target.value)} />
          <hr className="modalContentLine" />
          <button className="modalContentInput" id="modalContentButton" onClick={axiosCall}>RESERVE ROOM</button>
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
          <RoomShowState key={properties.id} showState={properties.RoomInfo.guestCount < guestNumber || properties.RoomInfo.viewChoice !== viewNumber || properties.RoomInfo.petNumber !== petNumber || properties.RoomInfo.price > priceNumber ? false: true}>
            <section className="roomContainer">
            <section className="roomTitleContainer">
                <p className="roomTitle">{properties.RoomTitle}</p>
                <p>{properties.RoomInfo.view}</p>
              </section>
              <section className="roomImageContainer">
                <img className="roomImage" src={properties.RoomImage} />
                <button className="roomButton" value={properties.reservationId} onClick={roomSelection}>RESERVE ROOM</button>
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
        {RoomViewData.MountainView.map(properties => (
          <RoomShowState key={properties.id} showState={properties.RoomInfo.guestCount < guestNumber || properties.RoomInfo.viewChoice !== viewNumber || properties.RoomInfo.petNumber !== petNumber || properties.RoomInfo.price > priceNumber ? false : true}>
            <section className="roomContainer">
            <section className="roomTitleContainer">
                <p className="roomTitle">{properties.RoomTitle}</p>
                <p>{properties.RoomInfo.view}</p>
              </section>
              <section className="roomImageContainer">
                <img className="roomImage" src={properties.RoomImage} />
                <button className="roomButton" value={properties.reservationId} onClick={roomSelection}>RESERVE ROOM</button>
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
        {RoomViewData.ForestView.map(properties => (
          <RoomShowState key={properties.id} showState={properties.RoomInfo.guestCount < guestNumber || properties.RoomInfo.viewChoice !== viewNumber || properties.RoomInfo.petNumber !== petNumber || properties.RoomInfo.price > priceNumber ? false : true }>
            <section className="roomContainer">
            <section className="roomTitleContainer">
                <p className="roomTitle">{properties.RoomTitle}</p>
                <p>{properties.RoomInfo.view}</p>
              </section>
              <section className="roomImageContainer">
                <img className="roomImage" src={properties.RoomImage} />
                <button className="roomButton" value={properties.reservationId} onClick={roomSelection}>RESERVE ROOM</button>
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
      </section>
        <DefaultShowState>-THERE ARE CURRENTLY NO ROOMS AVAILABLE THAT MATCH YOUR SEARCH CRITERIA-</DefaultShowState>
    </>
  )
}

export default Reservations; 