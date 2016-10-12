"use strict";

var express = require('express');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');


// var users = require('./routes/users');



app.set('port', (process.env.PORT || 8080));


app.use(expressLayouts);

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('gh-pages'));


app.get('/', (request, response) => {
  response.send('index');  
});

app.listen(app.get('port'), () => {
  console.log(`Puerto:${app.get('port')}`);
});

module.exports = app;


