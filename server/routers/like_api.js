const express = require('express');
const router = express.Router();

let likeCnt = 0;
let overCnt = false;

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
  const data = {
    likeCnt: likeCnt,
    overCnt: overCnt,
  };
  res.json(data);
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
  if (likeCnt < 999) {
    likeCnt++;
    console.log('LikeCnt is upgrade!');
    res.json('success!');
  } else {
    overCnt = true;
    console.log('LikeCnt is over');
    res.json('success! but LikeCnt is over');
  }
});

module.exports = router;
