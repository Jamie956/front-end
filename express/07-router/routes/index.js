var express = require('express')
var router = express.Router()
var auth = require('../middle/auth')
var apiRoutes = require('./apiRoutes')

var init = function(app){
    app.use('/', auth, apiRoutes);
}

module.exports = {init}