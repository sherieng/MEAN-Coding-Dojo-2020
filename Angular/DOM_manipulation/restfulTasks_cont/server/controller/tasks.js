const {Task} = require('../models/task')

module.exports ={
    index: function(req,res){
        Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
    },

    create: function(req,res){
        const task = new Task();
        task.title = req.body.title,
        task.description = req.body.description,
        task.completed = req.body.completed,
        task.save()
            .then(newTaskData => {
                console.log('task created: ', newTaskData)
                res.json(newTaskData)
            })
            .catch(err => {
                console.log("We have an error!", err)
                res.json(err)
            })
    },

    show: function(req,res){
        Task.findOne({_id:req.params.id})
        .then(data =>  res.json(data))
        .catch(err => res.json(err));
    },

    update: function(req,res){
        Task.updateOne({_id:req.params.id}, {
            title : req.body.title,
            description : req.body.description,
            completed : req.body.completed
        })
            .then(updatedTaskData => {
                console.log('task updated: ', updatedTaskData)
                res.json(updatedTaskData)
            })
            .catch(err => {
                console.log("We have an error!", err)
                res.json(err);
            })
    },

    delete: function(req,res){
        Task.remove({_id:req.params.id})
            .then(deletedTask => {
                console.log('task deleted: ', deletedTask)
                res.json(deletedTask)
            })
            .catch(err => res.json(err));
    }
}