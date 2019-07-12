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
router.post("/", function(req, res) {
    burger.insertOne([`burger_name`], [req.body.burger_name], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
module.exports = router;