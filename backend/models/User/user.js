const mongoose = require('mongoose')
const Exercise = require('../Exercise/exercise')


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
  },
  height: {
    type: Number,
    require: [true, 'please provide your height']
  },
  weight: {
    type: Number,
    required: [true, 'please provide your weight']
  },
  exercisesLog: [Exercise.schema]
})

userSchema.pre('save',  () => {
  const date = new Date(this.dateOfBirth)
  this.dateOfBirth = date;
})



module.exports = mongoose.model('User', userSchema)