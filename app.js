// import express from our dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const dribbbleApi = require('dribbble-api');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// initialize the app
const app = express();
require('dotenv').config();

//middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// static files
app.use(express.static('public'));

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3005;
// tell the app to listen on that particular port
app.listen(process.env.PORT || 3005, function () {
  console.log('Example app listening on port ' + (process.env.PORT || 3005));
});


// Our index route
app.get('/', (req, res) => {
    res.render('index', {
        message: 'Find Fonts!',
        currentPage: 'home',
    });
});

const noteRoutes = require('./routes/notes-routes');
app.use('/notes', noteRoutes);
const fontRoutes = require('./routes/font-routes');
app.use('/font', fontRoutes);
const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);



app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Not found!',
  });
});