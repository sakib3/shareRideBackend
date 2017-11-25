// app = express(),
mongoose = require('mongoose'),
config = require('./config'),
FindRide = require('./api/models/findRideModel'),
PostRide = require('./api/models/postRideModel'),
User = require('./api/models/userModel'),
findRideRoutes = require('./api/routes/findRideRoutes');
postRideRoutes = require('./api/routes/postRideRoutes');
signInRoutes = require('./api/routes/signInRoutes');


mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {useMongoClient: true});

module.exports = [signInRoutes, findRideRoutes, postRideRoutes];



