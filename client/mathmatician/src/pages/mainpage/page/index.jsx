import { useState, useEffect } from "react";

//Hooks
import useGreetings from "../hooks/useGreetings";

//component
import Greetings from "../component/Greetings/index";
import CalendarWidget from "../component/CalendarWidget";
import LikeWidget from "../component/LikeWidget";
import MapWidget from "../component/MapWidget";
import HandyInvitationModal from "../component/HandyInvitationModal";
import QnaComponent from "../component/Qna/index";

import MainpageContainer from "./styles";
import { Images, Colors } from "../../../utils/style";

// util
import resizeViewportHeight from "../../../utils/resizeViewportHeight";

const MainPage = () => {
  const message = useGreetings();

  const messageLines =
    message && message.length > 0
      ? message.split("\n").filter((line) => line.trim() !== "")
      : [];

  // 뷰포트의 높이가 달라짐에 따라, vh라는 단위를 css 사용자 정의 속성으로 다시 정의(업데이트)하는 함수
  // 실제 모바일에서는 필요하지 않을 것이므로 주석 처리
  /* useEffect(() => {
    resizeViewportHeight();
    window.addEventListener("resize", resizeViewportHeight);
    return () => window.removeEventListener("resize", resizeViewportHeight);
  }, []); */

  const [envelopeIconClicked, setEnvelopeIconClicked] = useState(false);
  const openModal = () => {
    setEnvelopeIconClicked(true);
  }
  const closeModal = () => {
    setEnvelopeIconClicked(false);
  }

  return (
    <MainpageContainer>
      <div className="mainpage-home">
        <div className="home-wrapper">
          <p>
            <span className="welcome-wel">Wel</span>
            <span className="welcome-come">-come</span>
            <span className="welcome-to">to</span>
          </p>
          <img
            src={Images.eiffel_tower}
            alt="eiffer tower image"
          />
          <div className="invitation-summary">
            <span className="invitation-running">40th</span>
            <span className="invitation-title">수학인의 밤</span>
            <span className="invitation-date">2023.11.24.18:00</span>
            <span className="invitation-place">더블유파티</span>
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
          <div className="info-date">
            <div className="head">
              <span className="here">날짜</span>
            </div>
            <p>2023-11-24&#40;금&#41;</p>
          </div>
          <div className="info-time">
            <div className="head">
              <span>시간</span>
            </div>
            <p>저녁 6시</p>
          </div>
          <div className="info-place">
            <div className="head">
              <span>장소</span>
            </div>
            <p>
              더블유파티<br/>
              <span className="highlight">서울 성북구 동소문로 284 길음 서희 스타힐스</span>
            </p>
          </div>
          <p>
            <span>* 자세한 정보를 알고 싶으신 분은&nbsp;</span>
            <span><span className="highlight">다음 페이지의 부가 기능</span>을 이용해 주세요!</span>
          </p>
        </div>
        <div className="program-wrapper">
          <h1>Program</h1>
          <div className="program-timetable">
            <img src={Images.content_chart} alt="" />
            <ul>
              <li>
                <span>식사</span>
                <span className="highlight">dinner</span>
              </li>
              <li>
                <span>개회식</span>
                <span className="highlight">openning ceremony</span>
              </li>
              <li>
                <span>수학과 영상 시청</span>
                <span className="highlight">watching video clips</span>
              </li>
              <li>
                <span>경품 추첨</span>
                <span className="highlight">prize draw</span>
              </li>
              <li className="end">
                <span>폐회식</span>
                <span className="highlight">closing ceremony</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mainpage-morefunc">
        {envelopeIconClicked && <HandyInvitationModal closeModal={closeModal} />}
        <div className="morefunc-wrapper">
          <div className="morefunc-description">
            <h1>More Functions</h1>
            <p>
              <span>위젯을 클릭하여 일정을 등록하고,&nbsp;</span>
              <span>지도 앱을 통해 위치를 확인해 보세요.</span>
            </p>
          </div>
          <div className="morefunc-widgets">
            <CalendarWidget />
            <LikeWidget />
            <MapWidget />
          </div>
          <div className="morefunc-aboutus">
            <img src="http://via.placeholder.com/164x164" alt="our team logo image"/>
            <span>만든 사람들 &#62;</span>
          </div>
          <div className="morefunc-handy-invitation">
            <span>간이 초대장</span>
            <img
              src={Images.envelope_icon}
              alt="envelope icon image"
              onClick={openModal}
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
