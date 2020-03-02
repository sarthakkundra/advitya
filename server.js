const express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname,'public')));

app.set('views', 'public/')
app.set('view engine', 'pug');

function Options(title, branding, url) {
    this.title = title;
    this.url = url;
    this.branding = branding;
    return this;
}

const homePageOptions = new Options('adVITya 2020', 'adVITya', '');

const gcqOptions = {
    title: ''
}

app.get('/', (request, response) => {
    response.render('index.pug', homePageOptions);
}).get('/gcq', (request, response) => {
    response.render('gcq/index.pug', {title: 'GameConQuest | adVITya', titleUrl: 'gcq'});
}).get('/gcq/workshops', (req, res) => {
    res.render('gcq/workshops', {})
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
