import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/aboutus");
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code !== null) {
      navigate("/oauthkakao", { state: { code }, replace: true });
    }
  });

  const message = useGreetings();

  const messageLines =
    message && message.length > 0
      ? message.split("\n").filter((line) => line.trim() !== "")
      : [];

  const [bgEffectToggle, setBgEffectToggle] = useState(false);
  // useEffect(() => {
  //   const handleBgEffectTogle = setInterval(() => {
  //     setBgEffectToggle(!bgEffectToggle);
  //   }, 1200);
  //   return () => {
  //     clearInterval(handleBgEffectTogle);
  //   };
  // }, []);

  const [envelopeIconClicked, setEnvelopeIconClicked] = useState(false);
  const openModal = () => {
    setEnvelopeIconClicked(true);
  };
  const closeModal = () => {
    setEnvelopeIconClicked(false);
  };

  const [bgAnimation, setBgAnimation] = useState(false);
  useEffect(() => {
    // 1초마다 배경 애니메이션 토글
    const interval = setInterval(() => {
      setBgAnimation((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <MainpageContainer>
      <Swiper
        direction={"vertical"}
        scrollbar={{
          verticalClass: "swiper-scrollbar-vertical",
          hide: false,
        }}
        verticalClass={"swiper-scrollbar-vertical"}
        modules={[Scrollbar]}
        // direction={'vertical'}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="mainpage-home">
            <div className="home-wrapper">
              <p>
                <span className="welcome-wel">Wel</span>
                <span className="welcome-come">-come</span>
                <span className="welcome-to">to</span>
              </p>
              <img src={Images.eiffel_tower} alt="eiffer tower image" />
              <div className="invitation-summary">
                <span className="invitation-running">40th</span>
                <span className="invitation-title">수학인의 밤</span>
                <span className="invitation-date">2023.11.24.18:00</span>
                <span className="invitation-place">더블유파티</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mainpage-greetings">
            <div className="Greetings">
              <Greetings message={messageLines} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="informations">
            <div
              className={`mainpage-details ${
                bgAnimation ? "info-on" : "info-off"
              }`}
            >
              <div className="info-wrapper">
                <h1>Information</h1>
                <div className="info-date">
                  <img src={Images.info_date_head} />
                  <p>2023-11-24&#40;금&#41;</p>
                </div>
                <div className="info-time">
                  <img src={Images.info_time_head} />
                  <p>저녁 6시</p>
                </div>
                <div className="info-place">
                  <img src={Images.info_place_head} />
                  <p>
                    더블유파티
                    <br />
                    <span className="highlight">
                      서울 성북구 동소문로 284 길음 서희 스타힐스
                    </span>
                  </p>
                </div>
                <p>
                  <span>* 자세한 정보를 알고 싶으신 분은&nbsp;</span>
                  <span>
                    <span className="highlight">다음 페이지의 부가 기능</span>을
                    이용해주세요!
                  </span>
                </p>
              </div>
              <div className="program-wrapper">
                <h1>Program</h1>
                <div className="program-timetable">
                  <img src={Images.content_chart} />
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
                    <li className="list-last-item">
                      <span>폐회식</span>
                      <span className="highlight">closing ceremony</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`mainpage-morefunc ${
              bgEffectToggle ? "morefunc-effect-a" : "morefunc-effect-b"
            }`}
          >
            <div className="morefunc-wrapper">
              <div className="morefunc-description">
                <h1>More Functions</h1>
                <p>
                  <span>위젯을 클릭하여 일정을 등록하고,&nbsp;</span>
                  <span>지도 앱을 열어 위치를 확인해 보세요.</span>
                </p>
              </div>
              <div className="morefunc-widgets">
                <CalendarWidget />
                <LikeWidget />
                <MapWidget />
              </div>
              <div className="morefunc-aboutus">
                <img
                  src="http://via.placeholder.com/164x164"
                  alt="our team logo image"
                />
                <span onClick={handlenavigate}>만든 사람들 &#62;</span>
              </div>
              <div className="morefunc-handy-invitation">
                <span>간이 초대장</span>
                <img
                  src={Images.envelope_icon}
                  alt="envelope icon"
                  // onClick={openModal}
                  onClick={() => {
                    alert("not yet ....");
                  }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mainpage-qna">
            <div className="QnA">
              <QnaComponent />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </MainpageContainer>
  );
};

export default MainPage;
