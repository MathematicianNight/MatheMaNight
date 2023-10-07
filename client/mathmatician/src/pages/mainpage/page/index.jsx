import { useState, useEffect } from "react";
import Greetings from "../component/Greetings/index"; // 이전 내용 여기에 삽입
import CalendarWidget from "../component/CalendarWidget";
import LikeWidget from "../component/LikeWidget";
import MapWidget from "../component/MapWidget";
import QnaComponent from "../component/Qna/index"; // 이전 코드 여기에 삽입
import MainpageContainer from "./styles";
import { Images, Colors } from "../../../utils/style";
import resizeViewportHeight from "../../../utils/resizeViewportHeight";

const MainPage = () => {
  useEffect(() => {
    resizeViewportHeight();
    window.addEventListener('resize', resizeViewportHeight);
    return () => window.removeEventListener('resize', resizeViewportHeight);
  }, []);
  
  // 이전 내용 여기에 삽입
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
      <div className="mainpage-home">
        <div className="home-wrapper">
          <span>Wel</span>
          <span>-come</span>
          <span>to</span>
          <div className="moon-back"></div>
          <div className="moon-front"></div>
          <img src={Images.eiffel_tower} alt="eiffer tower image" />
          <div className="invitation-summary">
            <span>40th</span>
            <span>수학인의 밤</span>
            <span>2023.11.24.18:00</span>
            <span>더블유파티</span>
          </div>
        </div>
      </div>

      <div className="mainpage-greetings">
          <div className="Greetings">
            <Greetings message={messageLines} />
          </div>
      </div>

      <div className="mainpage-details">
        <div className="info-wrapper">
          <h1>Information</h1>
          <div className="invitation-date">
            <span>
              <img src={Images.calendar_icon} alt="calendar icon image" />날짜
            </span>
            2023.11.24.금
          </div>
          <div className="invitation-time">
            <span>
              <img src={Images.clock_icon} alt="clock icon image" />시간
            </span>
            저녁 6시
          </div>
          <div className="invitation-place">
            <span>
              <img src={Images.location_pin_icon} alt="location pin icon image" />장소
            </span>
            더블유파티
            <span>서울 성북구 동소문로 284 길음 서희 스타힐스</span>            
          </div>
          <span>더 자세한 정보를 알고 싶으신 분은</span>
          <span>아래의 부가 기능을 이용해주세요!</span>
        </div>
        <div className="program-wrapper">
          {/* I'll fill in this later... */}
        </div>
      </div>

      <div className="mainpage-morefunc">
        <h1>More Functions</h1>
        <span>위젯을 클릭하여 일정을 등록하고,</span>
        <span>지도 앱을 통해 위치를 확인해 보세요.</span>
        <div className="widgets-wrapper">
          <CalendarWidget />
          <LikeWidget />
          <MapWidget />
        </div>
        <div className="aboutus-wrapper">
          <img src="http://via.placeholder.com/164x164" alt="our team logo image"/>
          <button>만든 사람들 &#62;</button>
        </div>

        {/* <div className="morefunc-wrapper">
          <div className="morefunc-title">More Functions</div>
          <div className="morefunc-description">위젯을 클릭하여 일정을 등록하고, 지도 앱을 통해 위치를 확인해 보세요.</div>
          <div className="morefunc-widgets-wrapper">
            <CalendarWidget />
            <LikeWidget />
            <MapWidget className="map-widget"/>
          </div>
          <div className="morefunc-aboutus-wrapper">
            <img
              src="http://via.placeholder.com/164x164"
              alt="aboutus-logo"
            />
            <span>
              만든 사람들 &#62;
            </span>
          </div>
        </div> */}
      </div>

      <div className="mainpage-qna">
        <div className="QnA">
          <QnaComponent />
        </div>
      </div>
    </MainpageContainer>
  );
};

export default MainPage;
