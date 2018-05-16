'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


const userSchema = mongoose.Schema({
    name: String, 
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    relation: String,
    country: String,
    created: {type: Date, default: Date.now}
});


//creating a method, this is where the passport and validate password
userSchema.method

const User = mongoose.model('User', userSchema);

module.exports = User;
