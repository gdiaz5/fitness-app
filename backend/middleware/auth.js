const jwt = require("jsonwebtoken");
const User = require("../models/User/user.js");

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw Error("user not authorized");
  }

  const token = authHeader.split(" ")[1];

  console.log(token);

  try {
    console.log("got you");
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new Error("something went wrong");
  }
};

module.exports = authUser;
