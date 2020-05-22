const cakes = require('../controller/cakes')

module.exports = function(app){
    app.get('/cakes', (req, res) => {
        cakes.index(req,res)
    });

    app.post('/cakes', (req, res) => {
        cakes.create(req,res)
    });

    app.post('/rating/:id', (req, res) => {
        cakes.createRating(req,res)
    });

    app.get('/cakes/:id', (req, res) => {
        cakes.show(req,res)
    });

    app.delete('/cakes/:id', (req, res) => {
        cakes.delete(req,res)
    });
}