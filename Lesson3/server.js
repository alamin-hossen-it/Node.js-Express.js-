const http = require("http");
const port = 3000;
const hostName = '127.0.0.1'

const myServer = http.createServer((req, res) =>{
    res.end('<h1>Hello<h1>')
});
myServer.listen(port, hostName,()=>{
    console.log(`server is running successfully at http://${hostName}:${port} `)
});