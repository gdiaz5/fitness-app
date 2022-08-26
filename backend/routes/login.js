const express = require('express');
const router = express.Router()


// Controllers
const {login, dashboard} = require('../controllers/login');

// Middleware
const authUser = require('../middleware/auth');

// GET
router.route('/dashboard').get(authUser, dashboard);

// POST
router.route('/login').post(login);

module.exports = router;