const jwt = require('jsonwebtoken');


const login =  async (req, res) => {
  const { username, password } = req.body;

  if(!username || !password) {
    throw Error('sorry worng username or password')
  }

  const id =  new Date().getDate();

  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expireIn: '30d'});

  res.status(200).json({msg:'user created', token});
}

const dashboard = async (req, res) => {
  const userInfo = 'information!'
  res.status(200).json({msg: 'sup'})
}








module.exports = {
  login,
  dashboard
}