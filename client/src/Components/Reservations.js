import React, { useState } from 'react';
import API from '../../API/API.js';


const Reservations = () => {
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
            <label>Test Input</label>
            <input id="title" onChange={event => setInputValue(event.target.value)}></input>
            <button onClick={axiosCall}>Submit Button</button>

        </div>
    )
}

export default Reservations; 