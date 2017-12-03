var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.getUser =
    function(username, cb) {
        User.findOne(
            {'name': username},
            function (err, user) {
                if (err)
                    return cb(err, null);
                return cb(null, user);
            }
        );
    };

exports.addUser = 
function(req,res,next) {
  var userReq = new User(req.body);
  userReq.save(function(err,user){
    if(err){
        if (err.name === 'MongoError' && err.code === 11000)
        return res.status(400).send({error:'email must be unique'});
        return res.status(400).send(err);
    } 
    res.locals.user = user;
    return next();
  });
};

