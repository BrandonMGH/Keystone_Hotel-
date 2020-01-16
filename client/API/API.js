import axios from 'axios';

export default {
    getRoomInfo: ()=> {
        return axios.get("http://localhost:3000/api")
    },
    reservationInfo: (inputValue) => {
       return axios.put("http://localhost:3000/api", {   //** Change this route back to a relative path when pushing project to heroku.  Only using absolute path during Dev process**//
       boolean: inputValue,
    })}


}