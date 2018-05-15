'use strict'

const express = require('express');
const path = require('path');

//need to add mongoose to make it easier to talk to mongo
var mongoose = require('mongoose');
//I'm not sure about how to do this
mongoose.connect('mongodb://localhost/myappdatabase');

//this will contain the routeing for the server... ie run it locally
//or run in the cloud, use blogger app as a guide
//TO DO///////////////////////////////////////////////////////////////
//make sure the port is linking up to run from the config file
const { DATABASE_URL, PORT } = require('./config');
//TO DO//////////////////////////////////
//I need to make a constant for the schema in models.js (if built yet)
// to return. the schema (look at blogger) will denote required
//and how the json object of the data is returned
const {/*make a name*/} =require('./models');


const app = express();

// app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/home.html'));
})

// // //linking to app.js
// app.get('/app', (req, res) => {
//   res.sendFile(path.join(__dirname + 'app.js'));
// })

app.get('/trade', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/trade.html'));
})

app.get('/requests', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/requests.html'));
})

if (require.main === module) {
    app.listen(process.env.PORT || 8080, function () {
      console.info(`App listening on ${this.address().port}`);
    });
  }

  //needed to run the server
  //TO DO///////////////////////////////////////////////////////
  //this will conect to a rout saved in the config.js file
function runServer(databaseURL=DATABASE_URL, port = port) {

}

  //
  module.exports = app;