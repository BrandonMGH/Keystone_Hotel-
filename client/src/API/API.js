import axios from 'axios';

export default {
    getRoomInfo: () => {
        return axios.get("https://keystone-hotel.herokuapp.com/api/reservations")
    },
    upNewsletterInfo: (inputValue) => {
        return axios.post("https://keystone-hotel.herokuapp.com/api/newsletter", {
            newsletterObject: inputValue
        })
    },
    reservationConfirmation: (roomInfoObject, reservationInfoObject) => {
        return axios.post("https://keystone-hotel.herokuapp.com/api/reservations/confirmation", {
            roomConfirmObject: roomInfoObject,
            resConfirmObject: reservationInfoObject, 
        })
    },
    reservationInfo: (inputValue) => {
        return axios.put("https://keystone-hotel.herokuapp.com/api/reservations", {   //** Change this route back to a relative path when pushing project to heroku.  Only using absolute path during Dev process**//
            resObject: inputValue,
        })
    },

}