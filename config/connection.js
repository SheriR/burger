// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "yoispopim0xxdutd",
  password: "fz24927srpek5ruh",
  database: "gcpuuab07suuxe4e"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
