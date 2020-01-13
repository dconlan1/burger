var connection = require("./connection")

var funcs = {
    selectAll: function (callback) {
        connection.query('SELECT * FROM burgers', function (error, results, fields) {
            if (error) throw error;
            callback(results)
          });
    },
    insertOne: function (burger_name) {
        connection.query('INSERT INTO burgers SET ?', {burger_name: burger_name}, function (error, results, fields) {
            if (error) throw error;
          });
    },
    updateOne: function (id, devoured) {
        connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [devoured, id], function (error, results, fields) {
            if (error) throw error;
        })
    }
}

module.exports = funcs