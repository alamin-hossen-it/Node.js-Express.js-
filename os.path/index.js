//Learning about os/path fs modules


// const os = require('os');
// const {totalmem, freemem} = require("os")
// console.log(os.userInfo())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(totalmem())

// console.log(__dirname)
// console.log(__filename)

const path = require("path")
const extentionName = path.extname('index.html');
console.log(extentionName)

const joinName = path.join(__dirname + '/../view')
console.log(joinName)