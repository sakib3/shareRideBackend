var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  FindRideSchema = new Schema({
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
    }
  });

module.exports = mongoose.model('FindRide', FindRideSchema);
