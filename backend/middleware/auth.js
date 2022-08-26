const jwt = require('jsonwebtoken');



const authUser =  async (req, res, next) {
  const authHeader = req.headers.authrorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw Error('user not authorized')
  }

  const token = authHeader.split(' ')[1];

}



module.exports = {
  authUser
}