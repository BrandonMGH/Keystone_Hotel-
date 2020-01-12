import axios from 'axios';

export default {
    postTest: (inputValue) => {
       return axios.post("/api", {
        testValue: inputValue,
    })
} 
}