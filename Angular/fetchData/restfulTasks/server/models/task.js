const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {type: String, require: true, minlength:2},
    description: {type: String, require: true, default:"", minlength:2},
    completed: {type: Boolean, require: true, default:false},
}, {timestamps: true})

module.exports ={
    Task : mongoose.model('Task', TaskSchema)
}
