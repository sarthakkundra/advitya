const router = require('express').Router();
const path = require('path');

router.get('/login', (req, res) => {
    res.sendFile(__dirname + '/form.html');
})


router.get('/logout', (req, res) => {
    res.send('Loggin out')
    //handle with passport
})

router.get('/google', (req, res) => {
    res.send('Logging in with google')
    //handle with passport
})

module.exports = router;


// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/public/form.html');
// })