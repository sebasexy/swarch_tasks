'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  email: {
    type: String,
    required: 'Email of user required'
  },
  title: {
    type: String,
    required: 'Title of Task required'
  },
  description: {
    type: String
  },
  dueDate: {
    type: Date,
    required: 'Due Date of Task required'
  },
  completedDate: {
    type: Date
  },
  reminderDate: {
    type: Date,
    required: 'Hour you want to be remembered'
  },
  reminderDaysBeforeDueDate: {
      type: Number,
      required: 'How many days of anticipation you want to be remembered'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'completed', 'late']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);