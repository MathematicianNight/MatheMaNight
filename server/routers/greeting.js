const express = require('express');
const router = express.Router();

const message = `정보보안암호수학과를 이끌어 주시는
재학생, 졸업생 여러분들
안녕하십니까

벌써 2023년의 연말이 다가오고 있습니다.
올해도 “제40회 수학인의 밤”을
개최하여 한 해를 마무리하려고 합니다.

소중한 시간을 빌리는 만큼
좋은 행사로 찾아뵙겠습니다.
자리에 참석하여 수학인의 밤을 빛내주세요.

앞날을 항상 응원하겠습니다.
감사합니다.

제 7대 정보보안암호수학과
학생회 “우린,” 올림`;

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
  res.json(message);
});

module.exports = router;
