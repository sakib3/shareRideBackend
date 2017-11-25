var express = require('express');
var app = express();
var user = require('../controllers/signInController');

app.route('/signin').get(user.getUser);
app.route('/signUp').post(user.addUser);

module.exports = app;