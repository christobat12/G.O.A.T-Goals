const express = require('express')
const router = express.Router()
const goalsController = require('../controllers/goals') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, goalsController.getGoals)

router.post('/createGoal', goalsController.createGoal)

router.put('/markComplete', goalsController.markComplete)

router.put('/markIncomplete', goalsController.markIncomplete)

router.delete('/deleteGoal', goalsController.deleteGoal)

module.exports = router