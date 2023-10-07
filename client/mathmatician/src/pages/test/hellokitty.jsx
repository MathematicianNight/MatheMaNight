import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LaunchMapApp from "../mainpage/component/LaunchMapApp/index";
import LaunchCalendarApp from "../mainpage/component/LaunchCalendarApp/index";
import resizeViewportHeight from "../../utils/resizeViewportHeight";
import MainpageContainer from "./hellokitty_style";
import QnaComponent from "./../mainpage/component/Qna/index";

const Hellokitty = () => {
  // const [currY, setCurrY] = useState(0);
  // const [viewportY, setViewportY] = useState(0);

  useEffect(() => {
    resizeViewportHeight();
    window.addEventListener("resize", resizeViewportHeight);
    return () => window.removeEventListener("resize", resizeViewportHeight);
  }, []);
  /* useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewportY(window.innerHeight);
    }
  }, []); */

  // css로 안 주고 직접 스크롤 기능 구현하다가 실패...
  /* const handleScroll = (e) => {
    let nextY = e.target.scrollTop;
    console.log(nextY);
    let gap = nextY - currY;
    if (Math.abs(gap) > window.innerHeight / 4) {
      if (gap > 0) {
        let temp = Math.floor(nextY / window.innerHeight);
        // let go = (window.innerHeight * (temp+1)) - nextY;
        e.target.scrollTo(0, window.innerHeight * (temp+1));
        setCurrY(window.innerHeight * (temp+1));
      }
      else {
        let temp = Math.floor(nextY / window.innerHeight);
        // let go = nextY - (window.innerHeight * temp);
        e.target.scrollTo(0, window.innerHeight * temp);
        setCurrY(window.innerHeight * temp);
      }
    }
  } */

  return (
    // <MainpageContainer onScroll={handleScroll}>
    <MainpageContainer>
      <div className="mainpage-section home-layout">{/* fill in ... */}</div>

      <div className="mainpage-section greetings-layout">
        {/* fill in ... */}
      </div>

      <div className="mainpage-section details-layout">
        <div className="information-wrapper">
          <div className="information-title">Information</div>
          <div></div>
        </div>
        <div className="program-wrapper">
          <div className="program-title">Program</div>
        </div>
      </div>

      <div className="mainpage-section morefunc-layout">
        <div className="morefunc-wrapper">
          <div className="morefunc-title">More Functions</div>
          <div className="morefunc-description">
            위젯을 클릭하여 일정을 등록하고, 지도 앱을 통해 위치를 확인해
            보세요.
          </div>
          <div className="morefunc-widgets-wrapper">
            <div className="later1">헤헿</div>
            <div className="later2">헤헿</div>
            <LaunchMapApp />
          </div>
          <div className="morefunc-aboutus-wrapper">
            <img src="http://via.placeholder.com/164x164" alt="aboutus-logo" />
            <span>만든 사람들 &#62;</span>
          </div>
        </div>
      </div>

      <div className="mainpage-section qna-layout">
        <QnaComponent />
      </div>
    </MainpageContainer>
  );
};

export default Hellokitty;
