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
    insertOne: function(table, cols, vals, cb) {
        var querystring = "INSERT INTO ?? (??) VALUES (??)";
        connection.query(querystring, vals, function(error, result){
            if(error) throw error;
            cb(result)
        });
    },
    updateOne: function(table, cols, vals, cb) {
        var querystring = "UPDATE ?? SET ?? == ?? WHERE ?? = ??";
        connection.query(querystring, function(err, result){
            if(err) throw err;
            cb(result)
        })
    }

}

module.exports = orm;