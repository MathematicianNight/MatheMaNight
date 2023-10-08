import React, { useState } from "react";

import { MainpageContainer } from "./styles";
import QnaComponent from "../component/Qna/index";
import Greetings from "../component/Greetings/index";
import useGreetings from "../hooks/useGreetings";

const MainPage = () => {
  const message = useGreetings();

  const messageLines =
    message && message.length > 0
      ? message.split("\n").filter((line) => line.trim() !== "")
      : [];

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
