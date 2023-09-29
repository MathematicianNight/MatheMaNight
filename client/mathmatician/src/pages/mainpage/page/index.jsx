import React from "react";

import { MainpageContainer } from "./styles";

const mainPage = () => {
  return (
    <MainpageContainer>
      <div className="parent">

      <div className="child Home">
        1페이지 - Home
      </div>

      <div className="child Greetings">
        2페이지 - Greetings
      </div>

      <div className="child Details">
        3페이지 - Details
      </div>

      <div className="child MoreFunc">
        4페이지 - More Functions
      </div>

      <div className="child QnA">
        5페이지 - QnA
      </div>

      </div>
    </MainpageContainer>
  );
};

export default mainPage;