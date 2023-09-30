import React, { useState } from "react";

import { MainpageContainer } from "./styles";
import QnaComponent from "../component/Qna/index";

const MainPage = () => {
  return (
    <MainpageContainer>
      <div className="parent">
        <div className="child Home">1페이지 - Home</div>

        <div className="child Greetings">2페이지 - Greetings</div>

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
