
var passport = require('passport');
var BearerStrategy = require('passport-http-bearer');
var user = require('../controllers/signInController');
var jwt = require('./jwt');

passport.use(new BearerStrategy(
    function(token, done) {
        var id = null,
            error = null;

        jwt.decodeToken(token,function (err, decodedPayload, decodedHeader) {
            error = err;
            if(decodedPayload && decodedPayload.id)
              id = decodedPayload.id;
        });

        if (error)
            return done({error: error.message});

        user.getUserById(id, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          return done(null, user);
        });
    }
));

module.exports = function(req,res,next){
  passport.authenticate(
      'bearer',
      { session: false },
      function(err, user, info) {
        if (err) return res.status(401).json(err);
        if (!user) return res.status(404).json({error: 'user not found'});
        res.locals.user = user;
        return next();
      }
  )(req, res, next);
};
