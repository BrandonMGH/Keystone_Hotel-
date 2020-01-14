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
    let axiosCall = () => {
        API.postTest(inputValue)
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
            <input id="title" onChange={event => setInputValue(event.target.value)}></input>
            <button onClick={axiosCall} >Submit Button</button>
            <a onClick={axiosCall} href='/rooms'>CLICK ME</a>
            </StyleTest>

        </div>
    )
}

export default Reservations; 