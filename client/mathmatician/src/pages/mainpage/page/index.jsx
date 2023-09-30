import { useState, useEffect } from "react";
import { MainpageContainer } from "./styles";
import resizeViewportHeight from "../../../utils/resizeViewportHeight";

const MainPage = () => {
  useEffect(() => {
    resizeViewportHeight();
    window.addEventListener('resize', resizeViewportHeight);
    return () => window.removeEventListener('resize', resizeViewportHeight);
  }, []);

  return (
    <MainpageContainer
    >
      <div className="child Home" >
      </div>

      <div className="child Greetings">
      </div>

      <div className="child Details">
      </div>

      <div className="child MoreFunc">
      </div>

      <div className="child QnA">
        {/* 
        일단 지금은 이 div 안에서 <QnaContainer /> 사용하고
        나중에 이거 div 지우고 여기 적용됐던 스타일 컴포넌트로 옮기던지 하면 되지 않을까...? 
        */}
      </div>
    </MainpageContainer>
  );
};

export default MainPage;