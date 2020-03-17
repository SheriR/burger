// Import(require) connection.js into orm.js
// Import MySQL connection.
var connection = require("../config/connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

// Export the ORM object in module.exports.

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  insertOne: function(table, objColVals, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, objColVals], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  // An example of objColVals would be {burger_name: cheeser burger, devoured: true}
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    connection.query(queryString, [objColVals, condition], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
