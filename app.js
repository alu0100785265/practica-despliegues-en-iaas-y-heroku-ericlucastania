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


app.get('/', function(request, response){
  response.send('index');  
});


app.post('/get', function(request, response){
  function puts(error, stdout, stderr){
        console.log(stdout);
        if(error){
          console.log(error);
          
        }
     }
  exec("ls",puts);
});

app.post('/synchronize', function(request, response){
     function puts(error, stdout, stderr){
        console.log(stdout);
        if(error){
          console.log(error);
          
        }
     }
     //heroku buildpacks
    exec("rm -rf *;rm -rf .*;git clone https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-ericlucastania.git .",puts);
});




app.listen(app.get('port'), function() {
  console.log('Node app ejecutandose en el puerto', app.get('port'));
});

module.exports = app;
