import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import './Restaurants.css'

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
align-items: center; 
`
const panDown = keyframes`
from {top: -300px; opacity:0} 
to {top:25%; opacity:1}
`

const ModalContent = styled.div`
z-index: 50;
display: grid;
grid-template-rows: 20px 200px 500px; 
text-align: center; 
justify-items: center; 
align-items: center; 
background-color: white; 
border: solid 2px black;
width: 50%; 
height: 90%; 
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

    const restaurantMenuSelect = (event) => {
        let restaurantId = parseInt(event.target.value)
        console.log(restaurantId)
        if (restaurantId === 1) {
            setRestaurantMenuId(RestaurantTypeData.Restaurants[0])
        } else if (restaurantId === 2) {
            setRestaurantMenuId(RestaurantTypeData.Restaurants[1])
        } else {
            setRestaurantMenuId(RestaurantTypeData.Restaurants[2])
        }
        modalStateChange();
    }

    return (
        <>
            <ModalContainer showState={modalState === true ? "grid" : "none"}>
                <ModalContent>
                    <span id="restaurantModalClose" onClick={modalStateChange}>&times;</span>
                    <section id="restaurantMoelTextContainer" style={{backgroundImage: `url(${restaurantMenuId.restaurantMenuInfo.menuImage})`}}>
                        <h1 id="restaurantModelText" >{restaurantMenuId.restaurantTitle}</h1>
                    </section>
                    <section id="restaurantModelMenuContainer">
                        <section className="restaurantModelMenuItems">
                            <div>
                                <p>{restaurantMenuId.restaurantMenuInfo.menuItemOneTitle}</p>
                            </div>
                            <div>
                                {restaurantMenuId.restaurantMenuInfo.menuItemOneDescription}
                            </div>
                            <div>
                               <p>{restaurantMenuId.restaurantMenuInfo.menuItemOnePrice}</p>
                            </div>
                        </section>
                        <section className="restaurantModelMenuItems">
                            <div>
                            <p>{restaurantMenuId.restaurantMenuInfo.menuItemOneTitle}</p>
                            </div>
                            <div>
                                {restaurantMenuId.restaurantMenuInfo.menuItemOneDescription}
                            </div>
                            <div>
                            <p>{restaurantMenuId.restaurantMenuInfo.menuItemOnePrice}</p>
                            </div>
                        </section>
                        <section className="restaurantModelMenuItems">
                            <div>
                            <p>{restaurantMenuId.restaurantMenuInfo.menuItemOneTitle}</p>
                            </div>
                            <div>
                                {restaurantMenuId.restaurantMenuInfo.menuItemOneDescription}
                            </div>
                            <div>
                            <p>{restaurantMenuId.restaurantMenuInfo.menuItemOnePrice}</p>
                            </div>
                        </section>
                        <section className="restaurantModelMenuItems">
                            <div>
                            <p>{restaurantMenuId.restaurantMenuInfo.menuItemOneTitle}</p>
                            </div>
                            <div>
                                {restaurantMenuId.restaurantMenuInfo.menuItemOneDescription}
                            </div>
                            <div>
                            <p>{restaurantMenuId.restaurantMenuInfo.menuItemOnePrice}</p>
                            </div>
                        </section>
                    </section>
                </ModalContent>
            </ModalContainer>
            {RestaurantTypeData.Restaurants.map(properties => (
                <section id="restaurantsContainer" key={properties.restaurantId}>
                    <section id="restaurantsImageContainer">
                        <img id="restaurantsImage" src={properties.restaurantImage} />
                    </section>
                    <section id="restaurantTitleAndDescriptionContainer">
                        <section id="restaurantTitleContainer">
                            <h1>{properties.restaurantTitle}</h1>
                        </section>
                        <section id="restaurantDescriptionOne">
                            <p>{properties.restaurantDescriptionOne}</p>
                        </section>
                        <section id="restaurantDescriptionTwo">
                            <p>{properties.restaurantDescriptionTwo}</p>
                            <button id="restaurantMenuModal" value={properties.restaurantId} onClick={restaurantMenuSelect}>View the Menu</button>
                        </section>
                    </section>
                </section>
            ))}
        </>
    )
}

export default Restaurant