var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

//routes and logic for our routes
//get
router.get("/", function(err, res){
    burger.selectAll(function(data){
        var burgerObj = {burgers: data};
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

module.exports = router;