module.exports = function(app){
    app.get('/', (req,res) => {
        //res.send('hello from routes')
        console.log('new connection')
    })
}