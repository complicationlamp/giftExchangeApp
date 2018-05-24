const user = require('../models/user')
const LocalStrategy = require('passport-local').Strategy


//NOTES: credentials submited in login request and a new cookie
//is gererated after each login
module.exports=function(passport) {
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    })
}
