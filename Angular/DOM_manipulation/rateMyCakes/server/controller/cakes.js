const {Cake} = require('../models/cake')
const {Rating} = require('../models/cake')

module.exports ={
    index: function(req,res){
        Cake.find()
        .then(cakes => res.json(cakes))
        .catch(err => res.json(err))
    },

    //create cake 
    create: function(req,res){
        const cake = new Cake();
        cake.name = req.body.name,
        cake.url = req.body.url,
        cake.rating = req.body.rating,
        cake.save()
            .then(newCakeData => {
                console.log('cake created: ', newCakeData)
                res.json(newCakeData)
            })
            .catch(err => {
                console.log("We have an error!", err)
                res.json(err)
            })
    },

    //create rating
    createRating: function(req,res){
        const rate = new Rating();
        rate.rating = req.body.rating,
        rate.comment = req.body.comment,
        rate.save()
            .then(newRateData => {
                Cake.findOne({_id:req.params.id})
                // console.log(req.params.id)
                // console.log('rating created: ', newRateData)
                .then(cakeData =>{
                    console.log(cakeData)
                    cakeData.ratings.push(newRateData)
                    cakeData.save()
                    console.log('rating associated with cake: ', cakeData)
                    res.json(cakeData)
                })
            })
            .catch(err => {
                console.log("We have an error!", err)
                res.json(err)
            })
    },

    show: function(req,res){
        Cake.findOne({_id:req.params.id})
        .then(data =>  res.json(data))
        .catch(err => res.json(err));
    },

    // update: function(req,res){
    //     Cake.updateOne({_id:req.params.id}, {
    //         name : req.body.name,
    //         url : req.body.url,
    //         rating : req.body.rating
    //     })
    //         .then(updatedCakeData => {
    //             console.log('cake updated: ', updatedCakeData)
    //             res.json(updatedCakeData)
    //         })
    //         .catch(err => {
    //             console.log("We have an error!", err)
    //             res.json(err);
    //         })
    // },

    delete: function(req,res){
        Cake.remove({_id:req.params.id})
            .then(deletedCake => {
                console.log('task deleted: ', deletedCake)
                res.json(deletedCake)
            })
            .catch(err => res.json(err));
    }
}