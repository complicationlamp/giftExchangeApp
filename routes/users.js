var express = require('express');
var router = express.Router();

//sign up
router.get('/register', (req, res) => {
    res.render('register');
  })

//login 
router.get('/login', (req, res) => {
    res.render('login');
  })


  module.exports = router;