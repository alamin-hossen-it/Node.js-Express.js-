const Mymiddleware = (req, res, next) => {
    console.log("I am middleware function")
    req.currentTime = new Date(Date.now());
    next()
 };

 module.exports = Mymiddleware;