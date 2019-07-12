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
router.post("/api/burger", function(req, res) {
    burger.insertOne([`burger_name`], [req.body.burger_name], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

router.put("/api/burger/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.updateOne([`devoured`], true, condition, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

// router.put("/api/burger/:id", function(req, res) {
//     var condition = "id = " + req.params.id;  
//     burger.update("devoured", 1, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
module.exports = router;