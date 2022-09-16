const Todo = require('../models/Todo')

module.exports = {
getToWatch: async (req,res)=>{
    console.log(req.user)   
    try{
        const toWatch = await Todo.find({toWatch:true})
        const countToWatch = await Todo.countDocuments({userId:req.user.id, toWatch: true})
        res.render('toWatch.ejs', {allToWatchShows: toWatch, countToWatch: countToWatch, user: req.user})
    }catch(err){
        console.log(err)
    }
}}