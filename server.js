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
//login end

//init app
const app = express();

// //login
// var routes = require('./routes/index');
// var users = require('./routes/users');

// // View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs({defaultLayout:'layout'}));
// app.set('view engine', 'handlebars');


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// // Set Static Folder
// app.use(express.static(path.join(__dirname, 'public')));

// // Express Session
// app.use(session({
//   secret: 'secret',
//   saveUninitialized: true,
//   resave: true
// }));

// // Passport init
// app.use(passport.initialize());
// app.use(passport.session());

// // Express Validator
// app.use(expressValidator({
//   errorFormatter: function(param, msg, value) {
//       var namespace = param.split('.')
//       , root    = namespace.shift()
//       , formParam = root;

//     while(namespace.length) {
//       formParam += '[' + namespace.shift() + ']';
//     }
//     return {
//       param : formParam,
//       msg   : msg,
//       value : value
//     };
//   }
// }));

// // Connect Flash
// app.use(flash());

// // Global Vars
// app.use(function (req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   res.locals.user = req.user || null;
//   next();
// });

// // app.use('/', routes);
// app.use('/users', users);

// //login end

// //need to add mongoose to make it easier to talk to mongo
// var mongoose = require('mongoose');
// //I'm not sure about how to do this
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
const {/*make a name*/} =require('./models');



// app.use(express.static('public'));
//MOVED TO ROUTS/INDEX.JS
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/home.html'));
})

//register
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/register.html'));
})

app.post('/register', (req, res) => {
  const name = 
  const userName =
  const email = 
  
})

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