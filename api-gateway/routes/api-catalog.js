/*
============================================
; Title:  api-catalog.js
; Author: Ashleigh Lyman
; Date:   10 May 2020
; Description: catalog route file
;===========================================
*/



var express = require('express');
var checkToken = require('../check-token');
var router = express.Router();


var auth_controller = require('../controllers/authController');


// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);


// GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);


// Login request
router.post('/auth/login', auth_controller.user_login);


// Logout request
router.get('/auth/logout', auth_controller.user_logout);


module.exports = router;