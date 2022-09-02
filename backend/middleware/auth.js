const jwt = require('jsonwebtoken');



const authUser =  async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw Error('user not authorized')
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    //const { id, username } = decoded
    //req.user = { id, username }
    next()
  } catch(error) {
   throw new Error('error')
  }

}



module.exports = authUser