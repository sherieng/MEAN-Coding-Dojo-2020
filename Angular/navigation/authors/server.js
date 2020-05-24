const express = require("express");
const app = express();
const mongoose = require('mongoose');

const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));



mongoose.connect('mongodb://localhost/authors', { useNewUrlParser: true });

require('./server/config/routes.js')(app)
require('./server/config/mongoose.js')

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, () => console.log("listening on port 8000"));
