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
console.log(header.display('Ashleigh', 'Lyman', 'RESTFUL APIS', '05/15/2020'));

//Empty Line
console.log("\n");


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var apiCatalog = require('./routes/api-catalog');
var indexRouter = require('./routes/index');

var app = express();


const mongoDB = "mongodb+srv://admin:Lymanfamily1@buwebdev-cluster-1-akyor.mongodb.net/api-gateway";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiCatalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});



app.use(function(err, req, res, next) {

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;