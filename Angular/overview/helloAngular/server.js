const express = require("express");
const app = express();
//const ejs = require('ejs')
//const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/dist/public'))
//app.set('view engine', 'ejs')
//app.set('views', __dirname + '/views')

require('./server/config/routes.js')(app)

app.listen(8000,() => {
    console.log('started server on port 8000')
})