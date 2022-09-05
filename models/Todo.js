const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },

  toWatch:{//toWatch schema
    type: Boolean,
    required: true,
  },

  watching: {//watching schema
    type: Boolean,
    required: true,
  },

 watched: {//watched schema
    type: Boolean,
    required: true,
    
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)

