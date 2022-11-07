const express = require('express')
const router = express.Router()

const {createExercise, dashboard} = require('../controllers/exercise')
router.route('/dashboard').get(dashboard)
router.route('/add').post(createExercise)
module.exports = router