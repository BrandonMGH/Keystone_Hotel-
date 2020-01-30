const express = require("express")
const app = express(); 
const cors = require("cors")
const nodemailer = require("nodemailer");
const PORT = 3000

require('dotenv').config()


app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservationObject = {}
let newsletterObject = {}

const transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  }

const transporter = nodemailer.createTransport(transport)


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
    res.send(reservationObject)
})

app.post('/api/newsletter', (req, res) => {
    newsletterObject = req.body.newsletterObject
    console.log(newsletterObject)
    res.send(newsletterObject)
    let firstName = newsletterObject.firstName
    let lastName = newsletterObject.lastName
    let email = newsletterObject.email
    const mail = {
        from: email,
        to: process.env.EMAIL,  //Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: `Dear ${firstName} ${lastName}.  Thank you for signing up for our Newsletter!`
      }
    transporter.sendMail(mail, (err, data) =>{
        if(err){
            console.log(err)
        }else{
            res.send(newsletterObject)
        }
    })

})

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})