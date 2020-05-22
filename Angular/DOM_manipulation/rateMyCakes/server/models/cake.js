const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    rating: {type: Number, require: true, default:1},
    comment: {type: String}
})
const CakeSchema = new mongoose.Schema({
    name: {type: String, require: true, minlength:2},
    url: {type: String, require: true, default:"No Link has been provided.", minlength:2},
    ratings: [RatingSchema],
}, {timestamps: true})

module.exports ={
    Cake : mongoose.model('Cake', CakeSchema),
    Rating : mongoose.model('Rating', RatingSchema)
}
