import axios from 'axios';

export default {
    getRoomInfo: () => {
        return axios.get("http://localhost:3000/api/reservations")
    },
    upNewsletterInfo: (inputValue) => {
        return axios.post("http://localhost:3000/api/newsletter", {
            newsletterObject: inputValue
        })
    },
    reservationConfirmation: (inputValue) => {
        return axios.post("http://localhost:3000/api/reservations/confirmation", {
            resConfirmObject: inputValue
        })
    },
    reservationInfo: (inputValue) => {
        return axios.put("http://localhost:3000/api/reservations", {   //** Change this route back to a relative path when pushing project to heroku.  Only using absolute path during Dev process**//
            resObject: inputValue,
        })
    },

}