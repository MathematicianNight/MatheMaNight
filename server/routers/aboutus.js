const express = require('express');
const router = express.Router();

const aboutUsData = [
  {
    name: '최하늘',
    part: 'Design',
  },
  {
    name: '김민정',
    part: 'Front-end',
  },
  {
    name: '강혜리',
    part: 'Front-end',
  },
  {
    name: '이수현',
    part: 'Back-end',
  },
];

/**
 * @swagger
 * paths:
 *  /aboutus:
 *    get:
 *      tags: [AboutUs]
 *      summary: "만든 사람들 정보 데이터 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      responses:
 *        "200":
 *          description: 만든 사람들 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    name:
 *                      type: string
 *                      description: "이름"
 *                      example: "아무개"
 *                    part:
 *                      type: string
 *                      description: "맡은 파트"
 *                      example: "Design"
 */
router.get('/', (req, res) => {
  res.json(aboutUsData);
});

module.exports = router;
