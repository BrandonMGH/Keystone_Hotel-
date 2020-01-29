const express = require("express")
const app = express(); 
const cors = require("cors")
const PORT = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservationObject = {}
let newsletterObject = {}

// **  GET ROUTES ** // 

app.get('/api/reservations', (req,res)=>{
    res.send(reservationObject)
})

app.get('/api/newsletter', (req,res) =>{
    res.send(newsletterObject)
})



// ** PUT ROUTES ** // 

app.put('/api/reservations', (req,res) =>{
    reservationObject = req.body.resObject
    console.log(reservationObject)
    res.send(reservationObject)
})

app.post('/api/newsletter', (req, res) => {
    newsletterObject = req.body.newsletterObject
    res.send(newsletterObject)
})

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})