const mongoose = require('mongoose');


const Exercise = new mongoose.Schema({
  name: {
    type: String
  }
})

module.exports = mongoose.model('Exercise', Exercise)