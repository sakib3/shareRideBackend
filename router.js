// app = express(),
mongoose = require('mongoose'),
config = require('./config'),
FindRide = require('./api/models/findRideModel'),
PostRide = require('./api/models/postRideModel'),
findRideRoutes = require('./api/routes/findRideRoutes');
postRideRoutes = require('./api/routes/postRideRoutes');


mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {useMongoClient: true});

module.exports = [findRideRoutes, postRideRoutes];



