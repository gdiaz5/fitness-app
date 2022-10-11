const mongoose = require('mongoose');


const Exercise = new mongoose.Schema({
  workload: {
    type: String
  },
  createdOn: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Exercise', Exercise)