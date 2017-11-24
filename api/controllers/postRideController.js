var mongoose = require('mongoose')
var PostRide = mongoose.model('PostRide')
exports.getAllPostRides =
  function (req, res) {
    PostRide.find(
      {},
      function (err, rides) {
        if (err)
          res.send(err);
        res.json(rides);
      }
    );
};

exports.addPostRide = 
function(req,res) {
  var postRideReq = new PostRide(req.body);
  postRideReq.save(function(err,ride){
    if(err) 
      res.send(err);
    res.json(ride);
  });
};
