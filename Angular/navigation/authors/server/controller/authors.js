const {Author} = require('../models/author')
module.exports ={
    index: function(req,res){
        Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
    },

    //create author
    create: function(req,res){
        const author = new Author();
        author.name = req.body.name,
        author.save()
            .then(newAuthorData => {
                console.log('author created: ', newAuthorData)
                res.json({newAuthorData, message: "success"})
            })
            .catch(err => {
                console.log("We have an error!", err)
                res.json(err)
            })
    },

    //createQuote
    createQuote: function(req,res){
        Author.findOne({_id:req.params.id})
            .then(author =>{
                author.quotes.push({quote: req.body.quote})
                author.save()
                .then(addedNewQuote => {
                res.json({addedNewQuote, message: "success"})
            })
            .catch(err => {
                console.log("We have an error!", err)
                res.json(err);
            })
        })
    },

    show: function(req,res){
        Author.findOne({_id:req.params.id})
        .then(data =>  res.json(data))
        .catch(err => res.json(err));
    },

    //show a quote
    upVote: function(req,res){
        Author.findOne({_id:req.params.id}, {quotes: {$elemMatch:{_id:req.body._id}}})
            .then(quote =>{
                console.log("************",quote.quotes[0].vote)
                quote.quotes[0].vote += 1
                quote.save()
                .then(vote => {
                    console.log('show quote: ', vote)
                    res.json(vote)
                })
            
        .catch(err => res.json(err));
        })
    },

    downVote: function(req,res){
        Author.findOne({_id:req.params.id}, {quotes: {$elemMatch:{_id:req.body._id}}})
            .then(quote =>{
                console.log("************",quote.quotes[0].vote)
                quote.quotes[0].vote -= 1
                quote.save()
                .then(vote => {
                    console.log('show quote: ', vote)
                    res.json(vote)
                })
            
        .catch(err => res.json(err));
        })
    },

    update: function(req,res){
        Author.findOne({_id:req.params.id})
            .then(author =>{
                author.name = req.body.name,
                author.save()
                .then(updatedAuthorData => {
                    console.log('author updated: ', updatedAuthorData)
                    res.json(updatedAuthorData)
                })
            .catch(err => {
                console.log("We have an error!", err)
                res.json(err);
            })
        })
    },

    delete: function(req,res){
        Author.remove({_id:req.params.id})
            .then(deletedAuthor => {
                console.log('author deleted: ', deletedAuthor)
                res.json(deletedAuthor)
            })
            .catch(err => res.json(err));
    },

    deleteQuote: function(req,res){
        Author.update({_id:req.params.id}, {$pull: {quotes: {_id: req.params.qid}}})
                .then(deletedQuote => { 
                    console.log('quote deleted: ', deletedQuote)
                    res.json(deletedQuote)
            })
            .catch(err => {
                console.log("We have an error!", err)
                res.json(err)
            });
    }
}