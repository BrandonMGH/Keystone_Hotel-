import axios from 'axios';


//** FOR DEV ENVIRONMENT, USE http://localhost:3001/ */
//** FOR PROD ENVIRONMENT, USE https://keystone-hotel.herokuapp.com/ */

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
        return axios.put("http://localhost:3001/api/reservations", {   
            resObject: inputValue,
        })
    },

}