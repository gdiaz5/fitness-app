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