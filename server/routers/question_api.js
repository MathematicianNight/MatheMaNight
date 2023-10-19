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

// query문
var checksql = 'SELECT * FROM qna LIMIT ? OFFSET ?; ';
var cnt1sql = 'SELECT COUNT(anony_num) AS cnt FROM qna; ';
var searchsql =
  'SELECT * FROM ( SELECT * FROM qna WHERE question LIKE ? OR answer LIKE ? ) AS subtable LIMIT ? OFFSET ?; ';
var cnt2sql =
  'SELECT COUNT(anony_num) AS cnt FROM ( SELECT * FROM qna WHERE question LIKE ? OR answer LIKE ? ) AS subtable; ';

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
 *                    result:
 *                      type: object
 *                      description: "질문 개수"
 *                      properties:
 *                        cnt:
 *                          type: integer
 *                          example: 20
 */
router.get('/', (req, res) => {
  try {
    const page = req.query.page || 1; // page: page_number, default = 1
    const pageSize = 7;

    const offset = (page - 1) * pageSize; // offset: page start_data_number

    var checksqls = mysql.format(checksql, [pageSize, offset]);
    db.query(checksqls, (err, table) => {
      if (err) {
        console.error(err);
        res.status(500).send('데이터 조회 중 오류가 발생했습니다.');
      } else {
        db.query(cnt1sql, (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send('데이터 개수 조회 중 오류가 발생했습니다.');
          } else {
            res.json({ table, result });
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

/**
 * @swagger
 * paths:
 *  /question/search:
 *    get:
 *      tags: [QnA]
 *      summary: 검색 결과 데이터 조회
 *      description: 서버에 검색어와 페이지번호를 포함하여 Get방식으로 요청
 *      parameters:
 *        - in: query
 *          name: result
 *          schema:
 *            type: string
 *          description: 검색어
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *          description: 페이지 번호
 *      responses:
 *        "200":
 *          description: 검색 결과 정보
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
 *                    result:
 *                      type: object
 *                      description: "검색 결과 개수"
 *                      properties:
 *                        cnt:
 *                          type: integer
 *                          example: 20
 */
router.get('/search', (req, res) => {
  try {
    const search = req.query.result || '';
    const page = req.query.page || 1; // page: page_number, default = 1
    const pageSize = 7;

    const offset = (page - 1) * pageSize; // offset: page start_data_number

    var searchsqls = mysql.format(searchsql, [
      '%' + search + '%',
      '%' + search + '%',
      pageSize,
      offset,
    ]);
    db.query(searchsqls, (err, table) => {
      if (err) {
        console.error(err);
        res.status(500).send('데이터 조회 중 오류가 발생했습니다.');
      } else {
        var cnt2sqls = mysql.format(cnt2sql, [
          '%' + search + '%',
          '%' + search + '%',
        ]);
        db.query(cnt2sqls, (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send('데이터 개수 조회 중 오류가 발생했습니다.');
          } else {
            res.json({ table, result });
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
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
      return res.redirect('https://invite.mathnight.site');
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
    return res.redirect('https://invite.mathnight.site');
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
      return res.redirect('https://invite.mathnight.site');
    }
  });
});

module.exports = router;
