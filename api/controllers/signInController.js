var mongoose = require('mongoose');
var User = mongoose.model('User');
exports.getUser =
  function (req, res) {
    User.findOne(
      {'email': req.body.email},
      function (err, user) {
        if (err)
          res.send(err);
        res.json(user);
      }
    );
};

exports.addUser = 
function(req,res) {
  var user = new User(req.body);
  user.save(function(err,user){
    if(err) 
      res.send(err);
    res.json(user);
  });
};
