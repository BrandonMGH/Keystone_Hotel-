require('dotenv').config()

const express = require("express")
const app = express(); 
const cors = require("cors")
const nodemailer = require("nodemailer");
const PORT = 3000
const transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  }
const transporter = nodemailer.createTransport(transport)

let reservationObject = {}
let reservationConfirmationObect = {}
let newsletterObject = {}

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });



// **  GET ROUTES ** // 

app.get('/api/reservations', (req,res)=>{
    res.send(reservationObject)
})

app.get('/api/newsletter', (req,res) =>{
    res.send(newsletterObject)
})

app.get('/api/reservations/confirmation', (req,res) =>{
  res.send(reservationConfirmationObect)
})

// ** POST ROUTES ** // 

app.post('/api/newsletter', (req, res) => {
  newsletterObject = req.body.newsletterObject
  res.send(newsletterObject)
  let firstName = newsletterObject.firstName
  let lastName = newsletterObject.lastName
  let email = newsletterObject.email
  const mail = {
      from: process.env.EMAIL,
      to: email,  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: `Dear ${firstName} ${lastName}.  Thank you for signing up for our Keystone Hotel Newsletter!  Unfortunately, this is a fictious newsletter service, so we won't actually be sending you monthly newsletters, but thank you for signing up all the same!`
    }
  transporter.sendMail(mail, (err, data) =>{
      if(err){
          console.log(err)
      }else{
          res.send(newsletterObject)
      }
  })

})

app.post('/api/reservations/confirmation', (req, res) =>{
  reservationConfirmationObect = req.body.resConfirmObject
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  console.log(firstName, lastName)
})


// ** PUT ROUTES ** // 

app.put('/api/reservations', (req,res) =>{
    reservationObject = req.body.resObject
    res.send(reservationObject)
})


app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})