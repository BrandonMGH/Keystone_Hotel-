import axios from 'axios';

export default {
    postTest: (inputValue) => {
       return axios.post("http://localhost:3000/api", {
        testValue: inputValue,
    })
} 
}