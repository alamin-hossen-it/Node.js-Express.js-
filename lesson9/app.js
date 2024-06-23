const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


app.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

//  Useing query paramiter and send response based on query request

// app.get("/", (req, res)=>{
//    const {id, name, age} = req.query;
//     res.send(`<h1>Student id is ${id} & name is ${name} and you are ${age} years old.</h1>`)
// });


//  Useing route paramiter and send response based on route request

// app.get("/userid/:id/username/:name/age/:age", (req, res)=>{
//     const {id, name, age}=req.params;
//      res.send(`<h1>User id is ${id} & name is ${name} and you are ${age} years old.</h1>`)
//  });



//  Useing header request and send response based on header request

app.get("/", (req, res)=>{
    // const id = req.header('id');
    // const name = req.header('name');
    const id = req.header("id");
    const name = req.header('name');
        const age = req.header('age');
        const ocupation = req.header('ocupation');
        const dob = req.header('DOB');
        const salary = req.header('salary')
    
    res.send(`Your id is: ${id}, and name is: ${name}. You are ${age} years old. Ocupation ${ocupation}. DOB ${dob}. Salary is ${salary}.`)
})


app.post('/register', (req, res)=>{
    const fullName = req.body.fullName;
    const age = req.body.age;
res.send(`Congratulation MR:${fullName}. You are now ${age} years old`)
    
    res.send(`Wellcome MR: ${name}. age is ${age}. `)

})
 
module.exports = app;