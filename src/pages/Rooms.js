import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//** COMPONENTS **//
import Hero from "../components/Hero"
import Banner from '../components/Banner'

class Rooms extends Component {
    render() {
        return (
           <Hero hero="roomsHero">
               <Banner title="Rooms">
                   <Link to="/" className="btn-primary">
                   Return Home
                   </Link>
               </Banner>
           </Hero>
        )
    }
}

export default Rooms
