const express = require('express');
const router = express.Router()


// Controllers
const {register, createExercise, login, dashboard} = require('../controllers/login');

// Middleware
const authUser = require('../middleware/auth');


// GET
//router.route('/dashboard').get(authUser, dashboard);


// POST
router.route('/register').post(register)

router.route('/add').post(createExercise)

router.route('/login').post(login);




module.exports = router;