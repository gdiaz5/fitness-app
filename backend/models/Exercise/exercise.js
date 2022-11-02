const mongoose = require('mongoose');


const Exercise = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'please provide user']
  },
  workload: {
    type: String
  },
  createdOn: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Exercise', Exercise)