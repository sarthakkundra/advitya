const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth-routes')

var app = express();

app.use(express.static(path.join(__dirname,'routes')));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/routes/index.html');
})

app.use('/auth', authRoutes);
var PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server started on ${PORT}'));
