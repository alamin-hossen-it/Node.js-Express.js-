const express = require("express");
const app = express();
const port = 3000;

const myMiddleware = require("./middleware.my/midleware")
app.use(myMiddleware)


app.get("/", (req, res)=>{
    console.log("I am home." + req.currentTime)
    res.send("<h1>I am a get request from home route</h1>")
});

app.get("/about", (req, res)=>{
    console.log("I am about." + req.currentTime)
    res.send("<h1>I am a get request from about route</h1>")
});

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
});