var express = require('express');
var app = express();
var findRides = require('../controllers/findRideController');
var passportAuthenticate = require('../middleware/passport');

app.route('/rides')
        .get(findRides.getAllRides)
        .post(findRides.addRide);

module.exports = app;
