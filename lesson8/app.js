const express = require('express')
const app = express()
const userRouter = require('./routes/users.route')

app.use('/api/user',userRouter)

app.use('/register',(req, res)=>{
res.statusCode = 200;
res.sendfile(__dirname +"/views/register.html");
});
app.use('/login',(req, res)=>{
    // res.cookie("name", "Alamin")
    // res.cookie("age", "23")
    res.clearCookie("name")
    res.append('ID', '1300')
    res.end()
});
app.get('/', (req, res)=>{
    res.statusCode = 200;
res.sendfile(__dirname +"/views/index.html");
});

app.use((req, res)=>{
    res.send('<h1>Error Page Not Found 404!...</h1>')
})

module.exports = app;

