var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 8080));

//app.use(express.static(__dirname + '/gh-pages'));

// views is directory for all template files
app.set('gh-pages', __dirname + '/gh-pages');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('gh-pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app corriendose toda en el puerto', app.get('port'));
});

"use strict";

var express = require('express');
var app = express();
var  path = require('path');
var  expressLayouts = require('express-ejs-layouts');
var exec= require('child_process').exec;



app.set('port', (process.env.PORT || 8080));


app.use(expressLayouts);

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('gh-pages'));


app.get('/', (request, response) => {
  response.send('index');  
});

app.listen(app.get('port'), function() {
  console.log('Node app corriendose toda en el puerto', app.get('port'));
});

module.exports = app;