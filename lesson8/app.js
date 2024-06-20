const express = require('express')
const app = express()

const userRouter = require('./routes/users.route')


app.use("/api/user",userRouter);
app.use('/', (req, res)=>{
    res.send('<h1>I am a get requst at home route</h1>');
    res.end()
});

app.use((req, res)=>{
    res.send('<h1>Data Not Found 404!...</h1>')
})

module.exports = app

