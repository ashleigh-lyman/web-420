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

const User = module.exports = mongoose.model('User', userSchema);

// user.save is used to add a new user to the database
module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = { _id: id };
    User.findById(query, callback);
};

module.exports.getOne = (e, callback) => {
    var query = { email: e };
    User.findOne(query, callback);
};