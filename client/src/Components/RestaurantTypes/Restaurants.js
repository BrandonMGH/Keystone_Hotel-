import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

/* COMPONENTS */
import RestaurantTypeData from '../../Components/RestaurantTypes/RestaurantTypeData/RestaurantTypeData.js'

const ModalContainer = styled.div`
z-index: 1000; 
display: ${props => props.showState};
position: fixed;
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.4);
top: 0%; 
justify-items: center; 
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
animation: 1s ${panDown};
@media (max-width: 900px){
  width: 80%; 
}
`

const Restaurant = () => {
    const [modalState, setModalState] = useState(false)
    const [restaurantMenuId, setRestaurantMenuId] = useState(RestaurantTypeData.Restaurants[0])

    const modalStateChange = () => {
        if (modalState === false) {
            setModalState(true)
        } else {
            setModalState(false)
        }
    }

    const test = (event) => {
        let restaurantId = parseInt(event.target.id)
        console.log(restaurantId)
        if(restaurantId=== 1){
            setRestaurantMenuId(RestaurantTypeData.Restaurants[0])
        }else if(restaurantId === 2){
            setRestaurantMenuId(RestaurantTypeData.Restaurants[1])
        }else {
            setRestaurantMenuId(RestaurantTypeData.Restaurants[2])
        }
        modalStateChange();
    }

    return (
        <>
            <ModalContainer showState={modalState === true ? "grid" : "none"}>
                <ModalContent>
                    <span className="modalContentClose" onClick={modalStateChange}>&times;</span>
                    <p>{restaurantMenuId.restaurantTitle}</p>
                </ModalContent>
            </ModalContainer>
            {RestaurantTypeData.Restaurants.map(properties => (
                <section key={properties.restaurantId}>

                    <button id={properties.restaurantId} onClick={test}>Modal State Change Button</button>
                </section>
            ))}
        </>
    )
}

export default Restaurant