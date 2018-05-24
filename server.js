'use strict'

//ADDED for login
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/giftExApp');
var db = mongoose.connection;


//init app
const app = express();

// mongoose.connect('mongodb://complicationlamp:gradschool1@ds129281.mlab.com:29281/gift-exchange-test');

//this will contain the routeing for the server... ie run it locally
//or run in the cloud, use blogger app as a guide
//TO DO///////////////////////////////////////////////////////////////
//make sure the port is linking up to run from the config file
const { DATABASE_URL, PORT } = require('./config');
//TO DO//////////////////////////////////////////////////////////////
//I need to make a constant for the schema in models.js (if built yet)
// to return. the schema (look at blogger) will denote required
//and how the json object of the data is returned
const {/*make a name*/} =require('./models/user.js');



// app.use(express.static('public'));
//MOVED TO ROUTS/INDEX.JS
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/home.html'));
})

//register
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/register.html'));
})

// app.post('/register', (req, res) => {
//   const name = 
//   const userName =
//   const email = 
  
// })

app.get('/trade', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/trade.html'));
})

app.get('/requests', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/requests.html'));
})

if (require.main === module) {
    // app.listen(process.env.PORT || 8080, function () {
    //   console.info(`App listening on ${this.address().port}`);
    // });
  }

//defines the server 
let server;
//this will connect to a rout saved in the config.js file
function runServer(databaseUrl = DATABASE_URL, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}


// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

  //NEEDS RUN SERVER
  module.exports = app;