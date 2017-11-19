module.exports = function(app){
    var findRides = require('../controllers/findRideController');
    app.route('/rides').get(findRides.getAllRides);
};