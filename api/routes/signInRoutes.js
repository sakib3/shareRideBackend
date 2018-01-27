var express = require('express');
var app = express();
var passportAuthenticate = require('../middleware/passport');
var user = require('../controllers/signInController');
var jwt = require('../middleware/jwt');

// app.route('/signin')
//   .get(
//     passportAuthenticate,
//     function (req, res) {
//       res.json(req.user);
//     }
//   );

app.route('/signin')
  .post(
    user.getUser,
    jwt.encode,
    function (req, res) {
      res.locals.user._id = null;
      res.json(res.locals);
    }
  );

app.route('/signUp')
  .post(
    user.addUser,
    jwt.encode,
    function (req, res) {
      res.locals.user._id = null;
      res.json(res.locals);
    }
  );

module.exports = app;
