var express = require('express');
var app = express();
var passportAuthenticate = require('../middleware/passport');
var user = require('../controllers/signInController');
var jwt = require('../middleware/jwt');

app.route('/signin')
  .get(
    passportAuthenticate,
    function (req, res) {
      res.json(req.user);
    });
app.route('/signUp')
  .post(
    user.addUser,
    jwt.encode,
    function (req, res) {
      res.json(res.locals.token);
    }
  );

module.exports = app;
