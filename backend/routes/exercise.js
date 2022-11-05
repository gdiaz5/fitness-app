const express = require('express')
const router = express.Router()

const createExercise = require('../controllers/exercise')

router.route('/add').post(createExercise)

module.exports = router