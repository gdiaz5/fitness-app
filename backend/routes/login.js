const express = require('express');
const router = express.Router()


// Controllers
const {register,  login, dashboard} = require('../controllers/login');
// GET

// POST
router.route('/').get(dashboard)
router.route('/register').post(register)
router.route('/login').post(login);




module.exports = router;