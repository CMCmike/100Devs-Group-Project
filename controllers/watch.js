const Watch = require('../models/Watch')

module.exports = {
  
    getToWatch: async (req,res)=>{
        console.log(req.user)   
        try{
            const toWatch = await Watch.find({toWatch:true})
            const countToWatch = await Watch.countDocuments({userId:req.user.id, toWatch: true})
            res.render('ToWatch.ejs', {allToWatchShows: toWatch, countToWatch: countToWatch, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getWatching: async (req,res)=>{
        console.log(req.user)   
        try{
            const watchingItems = await Watch.find({watching:true})
            const countWatching = await Watch.countDocuments({userId:req.user.id,watching: true})
            res.render('watching.ejs', {allWatchingShows: watchingItems, countWatching: countWatching, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getWatched: async (req,res)=>{
        console.log(req.user)
        try{
            const watchedItems = await Watch.find({watched:true})
            const countWatched = await Watch.countDocuments({userId:req.user.id,watched: true})
            res.render('finished.ejs', {allWatchedShows: watchedItems, countWatched: countWatched, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createWatch: async (req, res)=>{
        try{
            await Watch.create({watch: req.body.watchItem, toWatch: true, watching: false, watched: false, userId: req.user.id})
            console.log('Show has been added!')
            res.redirect('/watch')
        }catch(err){
            console.log(err)
        }
    },
    markWatched: async (req, res)=>{
        try{
            await Watch.findOneAndUpdate({_id:req.body.showIdFromJSFile},{
                watched: true,
                watching: false,
                toWatch: false
            })
            console.log('Added watched show')
            res.json('Added watched show')
        }catch(err){
            console.log(err)
        }
    },
    markIsWatching: async (req, res)=>{
        try{
            await Watch.findOneAndUpdate({_id:req.body.showIdFromJSFile},{
                isWatching: true,
                toWatch: false,
                watched: false
            })
            console.log('Added show to watching')
            res.json('Added show to watching')
        }catch(err){
            console.log(err)
        }
    },
    deleteWatch: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Watch.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Watch')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }

}    
