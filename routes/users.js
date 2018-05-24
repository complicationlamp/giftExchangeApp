var express = require('express');
var router = express.Router();

//sign up
router.get('/register', (req, res) => {
    res.render('register');
  })



  module.exports = router;