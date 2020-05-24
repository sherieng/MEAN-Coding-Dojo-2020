const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, require: true, minlength:3},
    quotes: [{
        quote: {type: String, minlength:2},
        vote: {type: Number, default: 0}
    }]
}, {timestamps: true})

module.exports ={
    Author : mongoose.model('Author', AuthorSchema),
}
