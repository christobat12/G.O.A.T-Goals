const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Goal', GoalSchema)
