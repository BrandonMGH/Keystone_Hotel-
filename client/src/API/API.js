import axios from 'axios';

export default {
    getRoomInfo: () => {
        return axios.get("/reservations")
    },
    upNewsletterInfo: (inputValue) => {
        return axios.post("/api/newsletter", {
            newsletterObject: inputValue
        })
    },
    reservationConfirmation: (roomInfoObject, reservationInfoObject) => {
        return axios.post("/reservations/confirmation", {
            roomConfirmObject: roomInfoObject,
            resConfirmObject: reservationInfoObject, 
        })
    },
    reservationInfo: (inputValue) => {
        return axios.put("/reservations", {   //** Change this route back to a relative path when pushing project to heroku.  Only using absolute path during Dev process**//
            resObject: inputValue,
        })
    },

}