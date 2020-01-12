import React, { useState } from 'react';
const axios = require('axios');

const App = () => {
    const [inputValue, setInputValue] = useState("")
    let axiosCall = () => {
        axios.post("http://localhost:3000/api", {
            testValue: inputValue,
        })
        .then((response) =>{
            console.log(response)
        })
        .catch((error) =>{
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

export default App; 