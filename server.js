'use strict'

const express = require('express');
const path = require('path');

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
  
  module.exports = app;