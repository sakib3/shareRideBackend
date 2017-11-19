// app = express(),
mongoose = require('mongoose'),
config = require('./config'),
FindRide = require('./api/models/findRideModel'),
findRideRoutes = require('./api/routes/findRideRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {useMongoClient: true});

// router.get('/', (req, res) => res.send('Hello ShareRide!!!') )

module.exports = function (app) {
    // (function (req, res) {
    //     console.log(req);
    // })();
    findRideRoutes(app);
};

