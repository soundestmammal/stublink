const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const firebase = require('firebase');

const port = 8080;

// Route Files
const index = require('./routes/index.js');
// const users = require('./routes/users.js');

// Init App
const app = express();

// View Engine
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Express messages
app.use(require('connect-flash')());
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	next();
});

// Express Validator
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use('/', index);
// app.use('/users', users);

//Allows static files (local files) to be loaded from public
app.use(express.static(__dirname + '/public'));

// Start Server
app.listen(port, () => {
	console.log('Server started on port '+port);
});


// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDdxnmVv8gdWTJmaH77eXU01wtNCSuFeX4",
//   authDomain: "stublink-emails.firebaseapp.com",
//   databaseURL: "https://stublink-emails.firebaseio.com",
//   projectId: "stublink-emails",
//   storageBucket: "stublink-emails.appspot.com",
//   messagingSenderId: "50099282405"
// };
// firebase.initializeApp(config);

// var ref = firebase.database().ref('stublink-emails');

// var emailRef = ref.child('emails');

// var email = {
//   email: "chrisrey95@live.com"
// };

// emailRef.orderByChild("email").equalTo(email.email).once("value", snapshot => {
//   const emailData = snapshot.val();

//   if (emailData){
//     console.log("Exist");
//   } else {
//     emailRef.push(email);
//   }
// })

// emailRef.push({
//   email: "chrisrey95@gmail.com"
// });

