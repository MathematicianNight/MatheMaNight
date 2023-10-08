import { useState, useEffect } from "react";
import Greetings from "../component/Greetings/index";
import useGreetings from "../hooks/useGreetings";
import CalendarWidget from "../component/CalendarWidget";
import LikeWidget from "../component/LikeWidget";
import MapWidget from "../component/MapWidget";
import QnaComponent from "../component/Qna/index";

import MainpageContainer from "./styles";
import { Images, Colors } from "../../../utils/style";
import resizeViewportHeight from "../../../utils/resizeViewportHeight";


const MainPage = () => {
  
  const message = useGreetings();
  

  const messageLines =
    message && message.length > 0
      ? message.split("\n").filter((line) => line.trim() !== "")
      : [];
  useEffect(() => {
    resizeViewportHeight();
    window.addEventListener('resize', resizeViewportHeight);
    return () => window.removeEventListener('resize', resizeViewportHeight);
  }, []);

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
        <div className="morefunc-wrapper">
          <div className="morefunc-description">
            <h1>More Functions</h1>
            <p>
            위젯을 클릭하여 일정을 등록하고,<br />
            지도 앱을 통해 위치를 확인해 보세요.
            </p>
          </div>
          <div className="widgets-wrapper">
            <CalendarWidget />
            <LikeWidget />
            <MapWidget />
          </div>
          <div className="aboutus-wrapper">
            <img src="http://via.placeholder.com/100x100" alt="our team logo image"/>
            <span>만든 사람들 &#62;</span>
          </div>
          <div className="handy-invitation">
            <span>간이 초대장</span>
            <img
              src={Images.envelope_icon}
              alt="envelope icon image"
            />
          </div>
        </div>
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