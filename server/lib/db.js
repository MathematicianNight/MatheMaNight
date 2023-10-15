const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "dltngus",
  database: "question",
});

// db.connect();

module.exports = db;
