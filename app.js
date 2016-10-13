"use strict";

var express = require('express');
var app = express();
var  path = require('path');
var  expressLayouts = require('express-ejs-layouts');
var exec = require('child_process').exec;



app.set('port', (process.env.PORT || 8080));


app.use(expressLayouts);

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('gh-pages'));


app.get('/', (request, response) => {
  response.send('index');  
});


app.post('/synchronize', (request, response) => {
     function puts(error, stdout, stderr){
        console.log(stdout);
        if(error){
          console.log(error);
          
        }
     }
     
    exec("git pull",puts);
});




app.listen(app.get('port'), function() {
  console.log('Node app corriendose toda en el puerto', app.get('port'));
});

module.exports = app;