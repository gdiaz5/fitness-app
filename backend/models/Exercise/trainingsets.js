const mongoose = require('mongoose');

const trainingSets = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Deltoids','Arms','Chest','Back','Legs','Calves'],
    default: 'Please provide training group'
  },
  setsAndReps: {
    type: String,
  }
})

module.exports = mongoose.model('trainingSets', trainingSets)