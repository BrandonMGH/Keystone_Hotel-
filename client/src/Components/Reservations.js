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
    const [inputValue, setInputValue] = useState("")
    const [booleanValue, setBooleanValue] = useState(false)

    let test =  () =>  {
        if(booleanValue===false){
            setBooleanValue(true)
        } else {
            setBooleanValue(false)
        }
           
    }
    let newTest = () => {
        console.log(booleanValue)
    }
    let axiosCall = () => {
        API.reservationInfo(inputValue)
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
            <label>Test Input</label>
            <input type="checkbox" checked={booleanValue} onChange={test}></input>
            <button onClick={newTest} >Submit Button</button>
            <a onClick={axiosCall} href='/rooms'>CLICK ME</a>
            </StyleTest>

        </div>
    )
}

export default Reservations; 