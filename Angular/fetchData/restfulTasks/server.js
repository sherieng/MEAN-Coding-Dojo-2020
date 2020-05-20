const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));

mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true });

require('./server/config/routes.js')(app)
require('./server/config/mongoose.js')


app.listen(8000, () => console.log("listening on port 8000"));
