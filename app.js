const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');


const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/truek", {useNewUrlParser: true});


app.get("/", function(req, res) {
  res.render('index');
});

app.get("/register.ejs", function(req, res) {
  res.render('register');
});

app.get("/trends.ejs", function(req, res) {
  res.render('trends');
});

app.get("/search.ejs", function(req, res) {
  res.render('search');
});

app.get("/chat.ejs", function(req, res) {
  res.render('chat');
});

app.get("/payment.ejs", function(req, res) {
  res.render('payment');
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});


