/*
;============================================
; Title:  models/user.js
; Author: Ashleigh Lyman
; Date:   10 May 2020
; Description: user model
;===========================================
*/



var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);