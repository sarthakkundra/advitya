const express = require('express');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
})
var PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server started on ${PORT}'));
