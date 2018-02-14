var mongoose = require('mongoose');

var Licence = mongoose.model('Licence', {
  key: {
    type: String,
    required: true,
    unique: true
  },
  keyfor: {
    type: String,
    default: "empty"
  },
  active: {
    type: Boolean,
    default: false
  },
  ad: {
    type: String,
    default: "empty"
  },
  ed: {
    type: String,
    default: "empty"
  },
  deviceid: {
    type: String,
    trim: true,
    default: "empty"
  },
  days: { //actually days
    type: Number,
    default: 365
  }
});

module.exports = {Licence};
