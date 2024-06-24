require('dotenv').config();
const express = require("express")
const app = express()
port = process.env.port || 3000;

app.get("/", (req, res)=>{
    res.send("<h1>I am request mehtod from home route</h1>")
})

app.listen(port, ()=>{
    console.log(`Serve is running at http://localhost:${port}`)
})