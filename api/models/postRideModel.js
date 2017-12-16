require('./userModel.js'); 
var mongoose = require('mongoose'),
Schema = mongoose.Schema,
User = mongoose.model('User'),
PostRideSchema = new Schema({
  name: {
    type: String
  },
  from: {
    type: String
  },
  to: {
    type: String
  },
  sourceLocation: {
    type: [Number],
    index: '2d'
  },
  destinationLocation: {
    type: [Number],
    index: '2d'
  },
  stopover:  {
    type: [String]
  },
  shareType: {
    type: String
  },
  journeyFrequency: {
    type: String,
    enum: ["Regular", "One-off", "Custom schedule"],
    defaultsTo: "Regular"
  },
  daysOfTravel: {
    type: [String],
    enum: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    defaultsTo: ["Sat"]
  },
  journeyDate: {
    type: "date"
  },
  returnDate: {
    type: "date"
  },
  rate: {
    type: String
  },
  availability: {
    type: String
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('PostRide', PostRideSchema);
