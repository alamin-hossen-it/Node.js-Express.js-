const app = require('./app')
const port = 3000;

app.get('/', (req, res)=>{
    res.send('I am a get request from home rout')
    res.end()

})

app.post('/', (req, res)=>{
    res.send('i am a post requst from home rout')
});
app.put('/', (req, res)=>{
    res.send('i am a put requst from home rout')
});
app.delete('/', (req, res)=>{
    res.send('i am a delete requst from home rout')
});

app.listen(port, ()=>{
    console.log(`Hi im a server and running perfectlly at http://localhost:${port}`)
})