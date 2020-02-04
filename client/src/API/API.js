import axios from 'axios';

export default {
    getRoomInfo: () => {
        return axios.get("http://localhost:3001/api/reservations")
    },
    upNewsletterInfo: (inputValue) => {
        return axios.post("http://localhost:3001/api/newsletter", {
            newsletterObject: inputValue
        })
    },
    reservationConfirmation: (roomInfoObject, reservationInfoObject) => {
        return axios.post("http://localhost:3001/api/reservations/confirmation", {
            roomConfirmObject: roomInfoObject,
            resConfirmObject: reservationInfoObject, 
        })
    },
    reservationInfo: (inputValue) => {
        return axios.put("http://localhost:3001/api/reservations", {   //** Change this route back to a relative path when pushing project to heroku.  Only using absolute path during Dev process**//
            resObject: inputValue,
        })
    },

}