//dependencies - express, express-handlebars, mysql
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql")

var app = express();

var PORT = process.env.PORT || 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

