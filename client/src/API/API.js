import axios from 'axios';

export default {
    postTest: (inputValue) => {
       return axios.post("http://localhost:3000/api", {   //** Change this route back to a relative path when pushing project to heroku.  Only using absolute path during Dev process**//
        testValue: inputValue,
    })
} 
}