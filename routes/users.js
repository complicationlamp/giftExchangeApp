const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const User = require('../models/user');

//sign up
router.post('/register', (req, res) => {
  // res.render('register'); not sure if i need this yet
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json ({
        error:err
      })
    } else{
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name, 
        username: req.body.username,
        email: req.body.email,
        password: hash 
        // created: {type: Date, default: Date.now}
        });
      user
        .save()
        .then(result => { 
          res.status(201).json({
            message: 'User created'
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error:err
          });
        });
      };
    });
  });



  module.exports = router;