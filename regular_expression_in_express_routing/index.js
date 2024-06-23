const express = require("express");
const app = express();
const port = 3000;

app.get("/products/:id([0-5]{4})", (req, res)=>{
    res.send(`<h1>Id = ${req.params.id}</h1>`)
})

app.get("/products/:title([a-zA-Z]{4})", (req, res)=>{
    res.send(`<h1>Id = ${req.params.title}</h1>`)
})

app.use("*", (req, res)=>{
    res.status(404).send({
        message: `Not found 404!..`,
    } )
})

app.listen(port, ()=>{
    console.log(`Server is running at http://${3000}`)
})