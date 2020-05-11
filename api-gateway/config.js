/*
============================================
; Title:  config.js
; Author: Ashleigh Lyman
; Date:   10 May 2020
; Description: updated config.js file
;===========================================
*/

var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

config.web.secret = 'topsecret';

module.exports = config;