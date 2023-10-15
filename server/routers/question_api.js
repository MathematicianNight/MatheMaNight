const express = require('express');
const router = express.Router();
const fs = require('fs');
const data = fs.readFileSync('./lib/db.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing

// 학생회 비밀번호
const SECRET_PASSWORD = '1111';

const db = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
db.connect();

let rowsQuery = 'SELECT COUNT(anony_num) AS cnt FROM qna';

/**
 * @swagger
 * paths:
 *  /question:
 *    get:
 *      tags: [QnA]
 *      summary: 질의응답 데이터 조회
 *      description: 서버에 페이지번호를 포함하여 Get방식으로 요청
 *      parameters:
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *          description: 페이지 번호
 *      responses:
 *        "200":
 *          description: 질문 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    table:
 *                      type: object
 *                      description: "질의응답"
 *                      properties:
 *                        anony_num:
 *                          type: integer
 *                          description: "익명 번호"
 *                          example: 1
 *                        question:
 *                          type: string
 *                          description: "질문"
 *                          example: "나는 이런 것이 궁금해요!"
 *                        answer:
 *                          type: string
 *                          description: "답변"
 *                          example: Null
 *                        ans_bool:
 *                          type: boolean
 *                          description: "답변 유무"
 *                          example: 0
 *                    rows:
 *                      type: object
 *                      description: "질문 개수"
 *                      properties:
 *                        cnt:
 *                          type: integer
 *                          example: 20
 */
router.get('/', (req, res) => {
  const page = req.query.page || 1; // page: page_number, default = 1
  const pageSize = 7;

  const offset = (page - 1) * pageSize; // offset: page start_data_number

  const sqlQuery = 'SELECT * FROM qna LIMIT ? OFFSET ?;';
  db.query(sqlQuery, [pageSize, offset], (err, table) => {
    if (err) {
      console.error(err);
      res.status(500).send('데이터 조회 중 오류가 발생했습니다.');
    } else {
      // db.query(rowsQuery, (err, rows) => {
      //   res.json({ table, rows });
      // });
      res.json(table);
    }
  });
});

/**
 * @swagger
 * paths:
 *  /question/create:
 *    post:
 *      tags: [QnA]
 *      summary: "질문 등록"
 *      description: "서버에게 질문 데이터를 전송하여 POST 방식으로 질문 등록"
 *      requestBody:
 *        required: true
 *        content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *             required:
 *               - question
 */
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
      // res.json('success!');
      return res.redirect('http://13.124.51.51:5000');
    }
  });
});

/**
 * @swagger
 * paths:
 *  /question/authenticate:
 *    post:
 *      tags: [QnA]
 *      summary: "비밀번호 인증"
 *      description: "서버에게 비밀번호를 전송하여 POST 방식으로 비밀번호 인증"
 *      requestBody:
 *        required: true
 *        content:
 *         application/json:
 *           schema:
 *             name: password
 *             type: string
 *      responses:
 *        "200":
 *          description: 비밀번호 확인
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    success:
 *                      type: boolean
 *                      description: "비밀번호 일치 유무"
 *                      example: true
 */
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

/**
 * @swagger
 * paths:
 *  /question/answer:
 *    post:
 *      tags: [QnA]
 *      summary: "답변 등록 또는 수정"
 *      description: "서버에게 답변 데이터를 전송하여 POST 방식으로 답변 등록 또는 수정"
 *      requestBody:
 *        required: true
 *        content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               anony_num:
 *                 type: integer
 *               answer:
 *                 type: string
 *             required:
 *               - anony_num
 *               - answer
 */
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

    // res.json('success!');
    return res.redirect('http://13.124.51.51:5000');
  });
});

/**
 * @swagger
 * paths:
 *  /question/delete:
 *    post:
 *      tags: [QnA]
 *      summary: "질문 삭제"
 *      description: "서버에게 익명 번호를 전송하여 POST 방식으로 해당 질문 삭제"
 *      requestBody:
 *        required: true
 *        content:
 *         application/json:
 *           schema:
 *             name: anony_num
 *             type: integer
 */
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
      // res.json('success!');
      return res.redirect('http://43.201.8.13:5000');
    }
  });
});

module.exports = router;
