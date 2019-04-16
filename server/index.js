const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const movies = require('./controllers/movies.js');
const PORT = process.env.PORT || '3000';
// const PORT = 3000;
var app = express();
app.use(express.static(path.join(__dirname, '/../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/movies', movies.getAll);
app.post('/movies', movies.addMovie);

app.listen(PORT, () => {
    console.log("Listening to port 3000!");
})