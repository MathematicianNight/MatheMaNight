const express = require('express');
const router = express.Router();
const fs = require('fs');
const data = fs.readFileSync('./lib/db.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const db = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
db.connect();

const cntViewsql = 'SELECT * FROM likecount; ';
const cntUpsql =
  'UPDATE likecount SET likeCnt = likeCnt + 1 WHERE likeCnt < 999; ';

/**
 * @swagger
 * paths:
 *  /like:
 *    get:
 *      tags: [Like]
 *      summary: "좋아요 개수 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      responses:
 *        "200":
 *          description: 좋아요 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    likeCnt:
 *                      type: integer
 *                      description: "좋아요 수"
 *                      example: 39
 *                    overCnt:
 *                      type: boolean
 *                      description: "999개 이상인지 이하인지에 대한 참거짓"
 *                      example: false
 */
router.get('/', (req, res) => {
  db.query(cntViewsql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('데이터 조회 중 오류가 발생했습니다.');
    } else {
      res.json(result);
    }
  });
});

/**
 * @swagger
 * paths:
 *  /like/upcount:
 *    post:
 *      tags: [Like]
 *      summary: "좋아요 개수 증가"
 *      description: "POST 방식으로 좋아요 개수 증가"
 *      requestBody:
 *        required: false
 */
router.post('/upcount', (req, res) => {
  db.query(cntUpsql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('데이터 입력 중 오류가 발생했습니다.');
    } else {
      res.json('success!');
    }
  });
});

module.exports = router;
