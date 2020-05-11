/*
;============================================
; Title:  index.js
; Author: Ashleigh Lyman
; Date:   10 May 2020
; Description: routes/index.js 
;===========================================
/ *



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;