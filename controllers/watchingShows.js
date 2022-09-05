const Todo = require('../models/Todo')

module.exports = {
getWatching: async (req,res)=>{
    console.log(req.user)   
    try{
        const watchingItems = await Todo.find({watching:true})
        const countWatching = await Todo.countDocuments({userId:req.user.id,watching: true})
        res.render('watching.ejs', {allWatchingShows: watchingItems, countWatching: countWatching, user: req.user})
    }catch(err){
        console.log(err)
    }
}}