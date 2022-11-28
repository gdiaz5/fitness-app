const Exercise = require('../models/Exercise/exercise')
const User = require('../models/User/user')


// Token is created for every auth controller

// Adds new workout protected route
const createExercise = async (req, res) => {
  req.body.createdBy = req.user.userId
  const exercise = await Exercise.create(req.body);
  console.log(exercise.createdBy)
  res.status(200).json({ exercise })
}

// Retreives all user data when authentication is verified
const dashboard =  async (req, res) => {
  const exerciseUserData = await Exercise.find({createdBy: req.user.userId})
  res.status(200).json({exerciseUserData})
}




// Update user information
const updateUser = async (req, res) => {
  const { name, email, password  } = req.body;

  if (!name || !email || !password) {
    throw Error('Please provide all fields');
  }

  const user = await User.findOne({ _id: req.user.userId })

  user.name = name;
  user.email = email;
  user.password = password;

  user.save();

  const token = user.createJWT();

  res.status(200).json({
    user: {
      name: user.name,
      email: user.email,
      password: user.password;,
      token
    }
  })

}




module.exports =  {
  createExercise,
  dashboard
}
