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
        sourceLocation : { $near: [req.body.sourceLocation[0], req.body.sourceLocation[1]], $maxDistance: 5000 }
      },
      function (err, rides) {
        if (err)
          res.send(err);
        res.json(rides);
      }
    );
};

exports.getPostRidesNear2 =
  function (req, res) {
    //var options = { near: req.body.sourceLocation, maxDistance: 5 };
    PostRide.find(
      {
        sourceLocation : { 
          $geoWithin: {
           $center: [ [req.body.sourceLocation[0], req.body.sourceLocation[1]], 5 / 3963.2 ] 
          }
        }
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
