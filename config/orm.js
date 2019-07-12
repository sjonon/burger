//require connection.js
var connection = require("./connection");

//object for sql statements to be used in controller
var orm = {
    selectAll: function (table, cb) {
        var querystring = "SELECT * FROM burgers";
        connection.query(querystring, function (error, result) {
            if (error) throw error
            cb(result);
        })
    },
    insertOne: function (table, cols, vals, cb) {
        var querystring = 
        `INSERT INTO ${table} (${cols}) VALUES ('${vals}');`;
        connection.query(querystring, vals, function (error, result) {
            if (error) throw error;
            cb(result)
        });
    },
    updateOne: function (table, cols, vals, condition, cb) {
        var querystring = `UPDATE ${table} SET (${cols}) = (${vals}) WHERE (${condition})`;
        connection.query(querystring, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    }

}

module.exports = orm;