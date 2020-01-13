import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//* PAGES  *//
import Main from './Pages/Main.js'
import Rooms from './Pages/Rooms.js'
import Dining from './Pages/Dining.js'
import Spa from './Pages/Spa.js'
import AreaAttractions from './Pages/AreaAttractions.js'

//* COMPONENETS *//
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'

const App = () => {
    return (
        <div>
        <Navbar />
        <Router>
            <Route path="/" exact component={Main} />
            <Route path="/Rooms" exact component={Rooms} />
            <Route path="/Dining" exact component={Dining} />
            <Route path="/Spa" exact component={Spa} />
            <Route path="/AreaAttractions" exact component={AreaAttractions} />  
        </Router>
        <Footer />
        </div>
    )
}

export default App; 