const express = require('express');
const router = express.Router();

const greeting = '안녕하세요';

/**
 * @swagger
 * paths:
 *  /greeting:
 *    get:
 *      tags: [Greeting]
 *      summary: "인사말 데이터 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      responses:
 *        "200":
 *          description: 인사말 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                description: "인사말"
 *                example:
 *                    "안녕하세요"
 */
router.get('/', (req, res) => {
  res.json(greeting);
});

module.exports = router;
