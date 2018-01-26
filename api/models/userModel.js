var mongoose = require('mongoose'),
Schema = mongoose.Schema,
UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: 'Phone must be unique!'
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: [true, 'Gender is required!']
  }
});

module.exports = mongoose.model('User', UserSchema);
