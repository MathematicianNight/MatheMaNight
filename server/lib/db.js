var mysql = require('mysql2');
var db = mysql.createConnection({
  nickname: '',
  question: '',
  answer: '',
});
db.connect();

module.exports = db;
