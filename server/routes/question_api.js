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

// 학생회 비밀번호
const SECRET_PASSWORD = '1111';

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

router.post('/create', (req, res) => {
  var post = req.body;
  var question = post.question;

  // 'question'이 요청 본문에 제공되었는지 확인
  if (!question) {
    return res.status(400).send('question이 누락되었습니다.');
  }

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

router.post('/authenticate', (req, res) => {
  const post = req.body;
  const password = post.password;

  // 'password'가 요청 본문에 제공되었는지 확인
  if (!password) {
    return res.status(400).send('password가 누락되었습니다.');
  }

  // check password
  if (password === SECRET_PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

router.post('/answer', (req, res) => {
  var post = req.body;
  var anony_num = post.anony_num;
  var answer = post.answer;

  // 'anony_num' 및 'answer'가 요청 본문에 제공되었는지 확인
  if (!anony_num || !answer) {
    return res.status(400).send('anony_num 또는 answer가 누락되었습니다.');
  }

  const sqlQuery =
    'UPDATE qna SET answer = ?, ans_bool = true WHERE anony_num = ?;';
  db.query(sqlQuery, [answer, anony_num], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('데이터 입력 중 오류가 발생했습니다.');
    }

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .send('행이 업데이트되지 않았습니다. anony_num을 찾을 수 없습니다.');
    }

    res.json('success!');
  });
});

router.post('/delete', (req, res) => {
  var post = req.body;
  var anony_num = post.anony_num;

  // 'anony_num'이 요청 본문에 제공되었는지 확인
  if (!anony_num) {
    return res.status(400).send('anony_num이 누락되었습니다.');
  }

  const sqlQuery = 'DELETE FROM qna WHERE anony_num = ?;';
  db.query(sqlQuery, [anony_num], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('데이터 입력 중 오류가 발생했습니다.');
    } else {
      res.json('success!');
    }
  });
});

module.exports = router;
