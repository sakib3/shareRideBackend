
var passport = require('passport');
var BearerStrategy = require('passport-http-bearer');
var user = require('../controllers/signInController');
var jwt = require('./jwt');

passport.use(new BearerStrategy(
    function(token, done) {
        var id = null;
        jwt.decodeToken(token,function (err, decodedPayload, decodedHeader) {
            if (err)
                return res.status(400).send(err);
            id = decodedPayload.id;
        });
        user.getUserById(id, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user.email);
      });
    }
));

module.exports = passport.authenticate('bearer', { session: false });