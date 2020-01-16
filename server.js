const express = require("express")
const app = express(); 
const cors = require("cors")
const PORT = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let testObjects = {boolean: false}

// **  GET ROUTES ** // 

app.get('/api', (req,res)=>{
    res.send(testObjects)
})

// app.get('/rooms/api', (req, res) =>{
    
// })


// ** POST ROUTES ** // 

app.put('/api', (req,res) =>{
    let newTestObject = { boolean: req.body}
    res.send(newTestObject)
})

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})