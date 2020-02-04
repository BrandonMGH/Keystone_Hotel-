require('dotenv').config()

const express = require("express")
const app = express(); 
const path = require('path');
const cors = require("cors")
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001
const transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  }
const transporter = nodemailer.createTransport(transport)

let reservationObject = {}
let roomConfirmationObject = {}
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
  res.send(roomConfirmationObject)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  });
}

// ** POST ROUTES ** // 

app.post('/api/newsletter', (req, res) => {
  newsletterObject = req.body.newsletterObject
  let firstName = newsletterObject.firstName
  let lastName = newsletterObject.lastName
  let email = newsletterObject.email
  let newsletterEmail = {
      from: process.env.EMAIL,
      to: email,  //Change to email address that you want to receive messages on
      subject: 'Keystone Newsletter',
      text: `Dear ${firstName} ${lastName}.  Thank you for signing up for our Keystone Hotel Newsletter!  Unfortunately, this is a fictious newsletter service, so we won't actually be sending you monthly newsletters, but thank you for signing up all the same!`
    }
  transporter.sendMail(newsletterEmail, (err, data) =>{
      if(err){
          console.log(err)
      }else{
          console.log(data)
      }
  })

})

app.post('/api/reservations/confirmation', (req, res) =>{
  roomConfirmationObject = req.body.roomConfirmObject
  let reservationConfirmObject = req.body.resConfirmObject
  let firstName = reservationConfirmObject.modalFirstName
  let lastName = reservationConfirmObject.modalLastName
  let email = reservationConfirmObject.modalEmail
  let checkInDate = reservationConfirmObject.modalCheckin
  let checkOutDate = reservationConfirmObject.modalCheckOut
  let reservationInfo = {
    from: process.env.EMAIL,
    to: email,  //Change to email address that you want to receive messages on
    subject: 'Keystone Reservation',
    text: `Dear ${firstName} ${lastName}.  Thank you for booking your stay with us! You're all set!  You are due to check-in on ${checkInDate} and check-out on ${checkOutDate}.  Should you need to make a change to your reservation, please call us at 555-123-4567 or email us at keystonehotelcompany@gmail.com.  Thank you once again for booking your reservation with the Keystone Hotel and we look forward to your stay with us`
  }
transporter.sendMail(reservationInfo, (err, data) =>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
})


// ** PUT ROUTES ** // 

app.put('/api/reservations', (req,res) =>{
    reservationObject = req.body.resObject
    res.send(reservationObject)
})


app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})