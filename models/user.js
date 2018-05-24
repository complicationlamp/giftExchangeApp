'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// var Schema = mongoose.Schema;


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String, 
    username: { type: String, required: true, unique: true},
    email: String,
    // relation: String,
    // country: String,
    password: { type: String, required: true},
    // created: {type: Date, default: Date.now}
});


//creating a method, this is where the passport and validate password
userSchema.method

module.exports = mongoose.model('User', userSchema);
