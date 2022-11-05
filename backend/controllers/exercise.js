const Exercise = require('../models/Exercise/exercise')
const workoutCard = require('../models/Exercise/workoutCard')



// Adds new workout
const createExercise = async (req, res) => {
  // req.body.createdBy = req.user.userId
  // const exercise = await Exercise.create(req.body);
  // res.status(200).json({ exercise })
  res.json(req.user)
}







module.exports =  createExercise
