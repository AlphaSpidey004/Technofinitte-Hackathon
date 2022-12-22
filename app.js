var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var ejs = require("ejs");


var app = express();
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/search",(req,res)=>{
    res.render("alpha");

})
app.get("/exp1",(req,res)=>{
    res.render("beta")
})


app.listen(3002);