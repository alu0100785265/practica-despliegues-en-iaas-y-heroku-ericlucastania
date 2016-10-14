"use strict";


var express = require('express');
var app = express();
var  path = require('path');
var  expressLayouts = require('express-ejs-layouts');
var process = require('child_process');



app.get('/get', function(request, response){

  process.exec("ls", (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
      });
});

app.post('/syn', function(request, response){
    process.exec("git pull https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-ericlucastania.git", (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
      });
  });



app.set('port', (process.env.PORT || 8080));


app.use(expressLayouts);

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('gh-pages'));


app.get('/', function(request, response){
  response.send('index');  
});








app.listen(app.get('port'), function() {
  console.log('Node app ejecutandose en el puerto', app.get('port'));
});

module.exports = app;
