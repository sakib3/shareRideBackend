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

exports.getPostRidesNear =
  function (req, res) {
    //var options = { near: req.body.sourceLocation, maxDistance: 5 };
    PostRide.find(
      {
        sourceLocation : { near: [17.0, 59.0], maxDistance: 4 }
      },
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
