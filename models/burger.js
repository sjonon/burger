//import orm
var orm = require("../config/orm");

var burger = {
//calls for orm functions
//orm.selectall
all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
//orm.insertOne
//orm.updateOne
}

modules.export = burger