const express = require('express');
const router = express.Router()


// Controllers
const {login, dashboard} = require('../controllers/login');


router.route('/login').post(login);

module.exports = router;