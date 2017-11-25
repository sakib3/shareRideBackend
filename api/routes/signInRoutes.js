var express = require('express');
var app = express();
var passportAuthenticate = require('../middleware/passport');
var user = require('../controllers/signInController');

app.route('/signin')
  .get(
    passportAuthenticate,
    function (req, res) {
      res.json(req.user);
    });
app.route('/signUp').post(user.addUser);

module.exports = app;
