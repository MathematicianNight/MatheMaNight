const express = require('express');
const router = express.Router();

let likeCnt = 0;

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
 *                type: integer
 *                description: "좋아요 개수"
 *                example: 193
 */
router.get('/', (req, res) => {
  res.json(likeCnt);
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
  likeCnt++;
  res.json('likeCnt is update');
});

module.exports = router;
