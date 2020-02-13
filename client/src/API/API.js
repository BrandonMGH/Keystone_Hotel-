import axios from 'axios';


//** FOR DEV ENVIRONMENT, USE http://localhost:3001/ */
//** FOR PROD ENVIRONMENT, USE https://keystone-hotel.herokuapp.com/ */

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
        return axios.put("https://keystone-hotel.herokuapp.com/api/reservations", {   
            resObject: inputValue,
        })
    },

}