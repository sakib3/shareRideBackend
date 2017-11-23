// app = express(),
mongoose = require('mongoose'),
config = require('./config'),
FindRide = require('./api/models/findRideModel'),
findRideRoutes = require('./api/routes/findRideRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {useMongoClient: true});

module.exports = [findRideRoutes];



