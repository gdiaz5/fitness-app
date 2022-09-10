const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxLength: 50,
    minLength: 3
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    maxLength: 50,
    minLength: 3
  }
})



module.exports = mongoose.model('User', userSchema)