var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.getUserById =
    function(Id, cb) {
        User.findOne(
            { _id: new mongoose.mongo.ObjectId(Id)},
            function (err, user) {
                if (err)
                    return cb(err, null);
                return cb(null, user);
            }
        );
    };
exports.getUser =
    function(req,res,next) {
        User.findOne(
            { email: req.body.email },
            function (err, user) {

                if (err)
                    return res.status(400).send(err);
                if(!user)
                    return res.status(400).send({error: req.body.email +' doesnot exist!'});
                if(req.body.password != user.password)
                    return res.status(400).send({error: 'wrong password!'});
                res.locals.user = user;
                return next();
            }
        );
    };

exports.addUser =
function(req,res,next) {
  var userReq = new User(req.body);
  userReq.save(function(err,user){
    if(err){
        //if (err.name === 'MongoError' && err.code === 11000)
        //return res.status(400).send({error:'email must be unique'});
        return res.status(400).send(err);
    }
    res.locals.user = user;
    return next();
  });
};
