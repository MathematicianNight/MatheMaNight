const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'dltngus',
  database: 'question',
});

router.get('/', (req, res) => {
  const page = req.query.page || 1; // page: page_number, default = 1
  const pageSize = 7;

  const offset = (page - 1) * pageSize; // offset: page start_data_number

  const sqlQuery = 'SELECT * FROM qna LIMIT ? OFFSET ?;';
  db.query(sqlQuery, [pageSize, offset], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('데이터 조회 중 오류가 발생했습니다.');
    } else {
      res.json(result);
    }
  });
});

router.post('/process', (req, res) => {
  var post = req.body;
  var question = post.question;

  const sqlQuery = 'INSERT INTO qna (question, ans_bool) VALUES (?, false);';
  db.query(sqlQuery, [question], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('데이터 입력 중 오류가 발생했습니다.');
    } else {
      res.json('success!');
    }
  });
});

module.exports = router;
