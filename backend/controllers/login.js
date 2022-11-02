const User = require('../models/User/user.js')
const Exercise = require('../models/Exercise/exercise')
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  res.status(200).send({ msg:'user created' })
}
// Work on this further
const createExercise = async (req, res) => {
  // console.log(req)
  // req.body.id = req.user.userId
  // const exercise = await Exercise.create(req.body);
  //res.status(200).send({msg: 'Exercise added!'})
  console.log(req.user)
  res.send(req.user)
}


const login =  async (req, res) => {
  const { username, password } = req.body;

  if(!username || !password) {
    throw Error('sorry no username or password')
  }

  const id =  new Date().getDate();

  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});

  res.status(200).json({msg:'user created', token});
}

const dashboard = async (req, res) => {
  const userInfo = 'information!'
  res.status(200).json({msg: 'sup'})
}


module.exports = {
  register,
  login,
  createExercise,
  dashboard
}