"use strict";

var express = require('express');
var app = express();
var  path = require('path');
var  expressLayouts = require('express-ejs-layouts');
var exec = require('child_process').exec;
var WebHooks = require('node-webhooks');
 
var webHooks = new WebHooks({
    db: './webHooksDB.json', // json file that store webhook URLs 
});
webHooks.add('prueba', 'https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-ericlucastania/').then(function(){
  //exec('git pull'); 
}).catch(function(err){
    console.log(err);
});



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
     //heroku buildpacks
    exec("git pull origin master",puts);
});




app.listen(app.get('port'), function() {
  console.log('Node app corriendose toda en el puerto', app.get('port'));
});

module.exports = app;