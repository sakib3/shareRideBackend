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
function(req,res) {
  var user = new User(req.body);
  user.save(function(err,user){
    if(err){
        if (err.name === 'MongoError' && err.code === 11000) {
            res.status(400).send({error:'email must be unique'});
          } else {
            res.status(400).send(err);
          }
    } 
    res.json(user);
  });
};


// exports.getUser =
// function (req, res) {
//   User.findOne(
//     {'email': req.body.email},
//     function (err, user) {
//       if (err)
//         res.send(err);
//       res.json(user);
//     }
//   );
// };
