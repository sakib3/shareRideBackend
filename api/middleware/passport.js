
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;
var user = require('../controllers/signInController');

passport.use(new Strategy(
    function(username, password, cb) {
        user.getUser(username, function(err, user) {
        if (err) 
            return cb(err);
        if (!user) 
            return cb(null, false);
        if (user.password != password)
            return cb(null, false);
        return cb(null, user);
      });
}));

module.exports = passport.authenticate('basic', { session: false });