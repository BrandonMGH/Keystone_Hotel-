const express = require("express")
const app = express(); 
const PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let testObjects = []

app.get('/api', (req,res)=>{
    res.send(testObjects)
})

app.post('/api', (req,res) =>{
    let newTestObject = req.body
    testObjects.push(newTestObject)
    res.json(newTestObject)
})

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})