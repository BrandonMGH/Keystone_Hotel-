
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//** COMPONENTS **//
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import Services from '../components/Services'



class Home extends Component {
    render() {
        return (
            <>
          <Hero>
              <Banner title="Luxury rooms" subtitle="deluxe rooms starting at $299" >
                  <Link to='/rooms' className="btn-primary">
                      Our Rooms
                  </Link>
                </Banner>
          </Hero>
          <Services />
          </>
        )
    }
}

export default Home
