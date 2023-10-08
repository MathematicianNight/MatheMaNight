import React, { useState } from "react";

import { MainpageContainer } from "./styles";
import QnaComponent from "../component/Qna/index";
import Greetings from "../component/Greetings/index";

const MainPage = () => {
  /** @todo 임시데이터 나중에 인사말 연결 **/

  const message = `정보보안암호수학과를 이끌어 주시는
재학생, 졸업생 여러분들 안녕하십니까

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
  const messageLines = message.split("\n");

  return (
    <MainpageContainer>
      <div className="parent">
        <div className="child Home">1페이지 - Home</div>

        <div className="child">
          <div className="Greetings">
            <Greetings message={messageLines} />
          </div>
        </div>

        <div className="child Details">3페이지 - Details</div>

        <div className="child MoreFunc">4페이지 - More Functions</div>

        <div className="child">
          <div className="QnA">
            <QnaComponent />
          </div>
        </div>
      </div>
    </MainpageContainer>
  );
};

export default MainPage;
