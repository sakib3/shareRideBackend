var mongoose = require('mongoose')
var FindRide = mongoose.model('FindRide')
exports.getAllRides =
  function (req, res) {
    FindRide.find(
      {},
      function (err, rides) {
        if (err)
          res.send(err);
        res.json(rides);
      }
    );
};

exports.addRide = 
function(req,res) {
  var rideReq = new FindRide(req.body);
  rideReq.save(function(err,ride){
    if(err) 
      res.send(err);
    res.json(ride);
  });
};
