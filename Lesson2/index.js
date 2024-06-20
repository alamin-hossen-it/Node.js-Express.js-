// understand Asynhronus fs modules


const fs = require('fs');
fs.writeFile('demo.txt', 'My nane is Alamin Hossen', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Successfull")
    }
})