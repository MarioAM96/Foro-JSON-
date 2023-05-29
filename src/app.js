const express = require('express');
const path = require('path');
const app = express ();
const logger  = require('morgan');

app.use(express.json());

//Server Settings
app.set('port', 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api',require('./routes/index'));
app.use('/api1',require('./routes/user'));
app.use(express.json());

//Static
//app.use(express.static(path.join(__dirname, 'public')));

// 404 handler
app.use((req, res, next) => {
    res.status(404).render('404 Not Found');
  });
  

module.exports = app;