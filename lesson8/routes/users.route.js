
const express = require('express');
const router = express.Router();



router.get('/register', (req, res)=>{
    res.send('<h1>Hi im a get request from register route</h1>')
});
router.get('/login', (req, res)=>{
    res.send('<h1>Hi im a get request from login route</h1>')
});

module.exports = router;