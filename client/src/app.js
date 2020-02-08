import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//* PAGES  *//
import Main from './Pages/Main/Main.js'
import TheHotel from './Pages/TheHotel/TheHotel.js'
import Rooms from './Pages/Rooms/Rooms.js'
import Dining from './Pages/Dining/Dining.js'
import Spa from './Pages/Spa/Spa.js'
import AreaAttractions from './Pages/AreaAttractions/AreaAttractions.js'
import Reservations from './Pages/Reservations/Reservations.js'

//* COMPONENETS *//
import Navbar from './Components/Navbar/Navbar.js'
import Footer from './Components/Footer/Footer.js'

const App = () => {
    return (
        <div>
        <Navbar />
        <Router>
            <Route path="/" exact component={Main} />
            <Route path="/hotel" exact component={TheHotel} />
            <Route path="/rooms" exact component={Rooms} />
            <Route path="/dining" exact component={Dining} />
            <Route path="/spa" exact component={Spa} />
            <Route path="/areaAttractions" exact component={AreaAttractions} /> 
            <Route path="/reservations" exact component={Reservations} /> 
           
        </Router>
        <Footer />
        </div>
    )
}

export default App; 