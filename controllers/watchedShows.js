const Todo = require('../models/Todo')

module.exports = {
getWatched: async (req,res)=>{
    console.log(req.user)
    try{
        const watchedItems = await Todo.find({watched:true})
        const countWatched = await Todo.countDocuments({userId:req.user.id,watched: true})
        res.render('finished.ejs', {allWatchedShows: watchedItems, countWatched: countWatched, user: req.user})
    }catch(err){
        console.log(err)
    }
}}