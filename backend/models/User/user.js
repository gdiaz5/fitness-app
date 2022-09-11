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
  },
  password: {
    type: String,
    required: [true, 'please provide password']
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Please valid date of birth']
  }
})

userSchema.pre('save',  () => {
  const date = new Date(this.dateOfBirth)
  this.dateOfBirth = date;
})



module.exports = mongoose.model('User', userSchema)