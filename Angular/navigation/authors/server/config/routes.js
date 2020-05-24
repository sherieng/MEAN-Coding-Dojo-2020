const authors = require('../controller/authors')

module.exports = function(app){
    app.get('/authors', (req, res) => {
        authors.index(req,res)
    });

    app.post('/authors', (req, res) => {
        authors.create(req,res)
    });

    app.get('/authors/:id', (req, res) => {
        authors.show(req,res)
    });

    app.put('/authors/:id', (req, res) => {
        authors.update(req,res)
    });

    app.delete('/authors/:id', (req, res) => {
        authors.delete(req,res)
    });

    //delete a quote
    app.delete('/authors/:id/quotes/:qid', (req, res) => {
        authors.deleteQuote(req,res)
    });

    //create a quote
    app.post('/authors/:id/quote', (req, res) => {
        authors.createQuote(req,res)
    });

    //voteup
    app.put('/authors/:id/voteup', (req, res) => {
        authors.upVote(req,res)
    });

    app.put('/authors/:id/votedown', (req, res) => {
        authors.downVote(req,res)
    });
}