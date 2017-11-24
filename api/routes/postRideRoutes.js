var express = require('express');
var app = express();
var postRides = require('../controllers/postRideController');

app.route('/postRides')
        .get(postRides.getAllPostRides)
        .post(postRides.addPostRide);

module.exports = app;