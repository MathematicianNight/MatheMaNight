const express = require('express');
const router = express.Router();

const invitation_schedule = {
  title: '수학인의 밤',
  time: {
    start_at: '2023-11-24T09:00:00Z',
    end_at: '2023-11-24T12:00:00Z',
    time_zone: 'Asia/Seoul',
  },
  description: '본 행사에 참석하여 자리를 빛내주세요 :-)',
  location: {
    name: '더블유파티',
    location_id: 35643864,
    address: '서울 성북구 동소문로 284 길음 서희스타힐스',
  },
  color: 'ROYAL_BLUE',
};

/**
 * @swagger
 * paths:
 *  /calendar:
 *    get:
 *      tags: [Calendar]
 *      summary: "캘린더 데이터 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      responses:
 *        "200":
 *          description: 캘린더 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    title:
 *                      type: string
 *                      description: "행사 이름"
 *                      example: 행사 이름
 *                    time:
 *                      type: object
 *                      description: "시간 정보"
 *                      properties:
 *                        start_at:
 *                          type: string
 *                          example: 2023-00-00T00:00:00Z
 *                        end_at:
 *                          type: string
 *                          example: 2023-00-00T00:00:00Z
 *                        time_zone:
 *                          type: string
 *                          example: Asia/Seoul
 *                    discription:
 *                      type: string
 *                      description: "행사 내용"
 *                      example: 많이 참석해주세요~
 *                    location:
 *                      type: object
 *                      description: "위치 정보"
 *                      properties:
 *                        name:
 *                          type: string
 *                          example: 장소
 *                        location_id:
 *                          type: integer
 *                          example: 1234
 *                        address:
 *                          type: string
 *                          example: 서울특별시 ooo ooo ooooo
 *                    color:
 *                      type: string
 *                      description: "등록 색깔"
 *                      example: "RED"
 */
router.get('/', (req, res) => {
  res.json(invitation_schedule);
});

module.exports = router;
