/*
;============================================
; Title:  routes/users.js
; Author: Ashleigh Lyman
; Date:   15 May 2020
; Description: routes/users.js 
;===========================================
*/




var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;