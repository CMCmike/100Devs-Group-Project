const mongoose = require('mongoose')

const WatchSchema = new mongoose.Schema({
  watch: {
    type: String,
    required: true,
  },

  toWatch: {//toWatch schema
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

module.exports = mongoose.model('Watch', WatchSchema)

