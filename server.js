var express = require('express');
var app = express();
var db = require('./config/databases');
var bodyParser = require('body-parser');



var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({
    extended:true
});

var port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
db();

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/formal', (req, res) => {
    res.render('formal-registration');
});

app.get('/donation', (req, res) => {
    res.render('donation-registration');
});






app.get('**', (req, res) => {
    res.render('donation-registration');
});
app.listen(port, (err) => {
    if (err) console.log('server error', err);
    console.log(`server running on ${port}`);
});