var express = require('express');
var app = express();
var findRides = require('../controllers/findRideController');

app.route('/rides')
        .get(findRides.getAllRides)
        .post(findRides.addRide);

module.exports = app;
