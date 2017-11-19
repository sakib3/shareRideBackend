var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  FindRideSchema = new Schema({
    name: {
      type: 'string'
    },
    from: {
      type: 'string'
    },
    to: {
      type: 'string'
    },
    journeyFrequency: {
      type: 'string',
      enum: ['Regular', 'One-off', 'Custom schedule'],
      defaultsTo: 'Regular'
    },
    daysOfTravel: {
      type: ['string'],
      enum: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      defaultsTo: ['Sat']
    },
    journeyDate: {
      type: 'date'
    },
    returnDate: {
      type: 'date'
    }
  });

module.exports = mongoose.model('FindRide', FindRideSchema);
