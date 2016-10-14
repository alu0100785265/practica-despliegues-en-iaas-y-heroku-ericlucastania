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


app.get('/get', (request, response) => {
  function puts(error, stdout, stderr){
        console.log(stdout);
        if(error){
          console.log(error);
          
        }
     }
  exec("ls",puts);
});

app.post('/synchronize', (request, response) => {
     function puts(error, stdout, stderr){
        console.log(stdout);
        if(error){
          console.log(error);
          
        }
     }
     //heroku buildpacks
    exec("git pull https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-ericlucastania.git master",puts);
});




app.listen(app.get('port'), function() {
  console.log('Node app ejecutandose en el puerto', app.get('port'));
});

module.exports = app;
