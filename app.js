/**
 * app.js
 * Timothy McGinnis
 */

//
const { Router } = require('express');

//
let express = require('express');
let app = express();
const apiRouter =('./asgn-Router.js');
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

//
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//
mongoose.connect("mongodb://localhost/assignments", { useNewUrlParser: true});
var db = mongoose.connection;

if(!db) {
    console.log("Error connecting to the DB.");
} else {
    console.log("DB connected successfully");
}

var port = 8080;

app.use("/asgn-api", apiRouter);

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running contacts-api on port " + port);
});