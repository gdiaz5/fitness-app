const User = require('../models/User/user.js')
const jwt = require('jsonwebtoken');

// New user registraion
const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  res.status(200).json({ user: { name: user.name }, token})
}

// Validates email, name, and password
const login =  async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new Error('please provide email and password')
  }
  const user = await User.findOne({ email })
  if(!user) {
    throw new Error('oops looks like username or password is invaild. please try again')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  const token = user.createJWT()
  res.status(200).json({ user: {name: user.name}, token })
}

const dashboard = async (req, res) => {
  const userInfo = 'information!'
  res.status(200).json({msg: 'sup'})
}


module.exports = {
  register,
  login,
  dashboard
}