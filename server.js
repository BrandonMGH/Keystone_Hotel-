const express = require("express")
const app = express(); 
const cors = require("cors")
const PORT = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let apiObject = { boolean: false }

// **  GET ROUTES ** // 

app.get('/api', (req,res)=>{
    res.send(apiObject)
})

// app.get('/rooms/api', (req, res) =>{
    
// })


// ** PUT ROUTES ** // 

app.put('/api', (req,res) =>{
    apiObject = { boolean: req.body.boolean}
    res.send(apiObject)
})

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})