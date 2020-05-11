/*
;============================================
; Title:  app.js
; Author: Ashleigh Lyman
; Date:   10 May 2020
; Description: app.js
;===========================================
*/


//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 3.2 - Factory patterns', '03/03/2020'));

//Empty Line
console.log("\n");

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiCatalog = require('./routes/api-catalog');

var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

App.use('/api', apiCatalog);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

/**
*
Database connection
*/
mongoose.connect('mongodb+srv://admin:Lymanfamily@buwebdev-cluster-1-akyor.mongodb.net/api-gateway', {
        promiseLibrary: require('bluebird')
    }).then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;