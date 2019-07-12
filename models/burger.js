//import orm
var orm = require("../config/orm");

var burger = {
  //calls for orm functions
  //orm.selectall
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  //orm.insertOne
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  //orm.updateOne
  updateOne: function (cols, vals, condition, cb) {
    orm.updateOne("burgers", cols, vals, condition, function (res) {
      cb(res);
    })
  },
};

module.exports = burger

// updateOne: function (table, cols, vals, cb) {
//   var querystring = `UPDATE ${table} SET (${cols}) = (${vals}) WHERE ?? = ?`;
//   connection.query(querystring, function (err, result) {
//       if (err) throw err;
//       cb(result)
//   })
// }