var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
  })
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/home.html'));
// })