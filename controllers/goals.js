const Goal = require('../models/Goals')

module.exports = {
    getGoals: async (req,res)=>{
        try{
            const goalItems = await Goal.find({userId:req.user.id})
            const shortTerm = await Goal.find({priority: 'short', userId:req.user.id})
            const mediumTerm = await Goal.find({priority: 'medium', userId:req.user.id})
            const longTerm = await Goal.find({priority: 'long', userId:req.user.id})
            const itemsLeft = await Goal.countDocuments({userId:req.user.id,completed: false})
            res.render('goals.ejs', {goals: goalItems, left: itemsLeft, user: req.user, short: shortTerm, medium: mediumTerm, long: longTerm})
        }catch(err){
            console.log(err)
        }
    },
    createGoal: async (req, res)=>{
        try{
            await Goal.create({goal: req.body.goalItem, completed: false, userId: req.user.id, priority: req.body.goalPriority})
            res.redirect('/goals')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Goal.findOneAndUpdate({_id:req.body.goalIdFromJSFile},{
                completed: true
            })
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Goal.findOneAndUpdate({_id:req.body.goalIdFromJSFile},{
                completed: false
            })
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteGoal: async (req, res)=>{
        try{
            await Goal.findOneAndDelete({_id:req.body.goalIdFromJSFile})
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    