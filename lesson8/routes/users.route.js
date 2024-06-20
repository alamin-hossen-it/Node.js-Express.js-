const express = require('express')
const router = express.Router()

router.get('/register', (req, res)=>{
    res.send('<h1>I am a get requst at register route</h1>');
    res.end()
});
router.get('/login', (req, res)=>{
    res.send('<h1>I am a get requst at login route</h1>');
    res.end()
});
router.get('/singup ', (req, res)=>{
    res.send('<h1>I am a get requst at sing-up route</h1>');
    res.end()
});
router.use((req, res)=>{
    res.send('<h1>Data Not Found 404!...</h1>')
})


module.exports = router;