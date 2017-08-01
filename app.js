// import express from our dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const dribbbleApi = require('dribbble-api')

// initialize the app
const app = express();

//middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// static files
app.use(express.static('public'));

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3003;
// tell the app to listen on that particular port
app.listen(process.env.PORT || 3003, function () {
  console.log('Example app listening on port ' + (process.env.PORT || 3003));
});

const fontRoutes = require('./routes/font-routes');
app.use('/font', fontRoutes);

// Our index route
app.get('/', (req, res) => {
    res.send('Holaaa Mundo!!')
});