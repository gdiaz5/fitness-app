const Exercise = require('../models/Exercise/exercise')
const workoutCard = require('../models/Exercise/workoutCard')



// Adds new workout
const createExercise = async (req, res) => {
  req.body.createdBy = req.user.userId
  const exercise = await Exercise.create(req.body);
  console.log(exercise.createdBy)
  res.status(200).json({ exercise })
}

// Retreives all user data when authentication is verified
const dashboard =  async (req, res) => {
  const id = req.body.id
  const exerciseUserData = await Exercise.find({createdBy: id})
  res.status(200).json({exerciseUserData})
}




module.exports =  {
  createExercise,
  dashboard
}
