import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

const MainPage = () => {
  const [isInnerWidthOver500, setIsInnerWidthOver500] = useState("less");
  // const [prevInnerHeight, setPrevInnerHeight] = useState(window.innerHeight);

  const navigate = useNavigate();
  const location = useLocation();

  const handlenavigate = () => {
    navigate("/aboutus");
  };

  const handleResize = () => {
    if (window.innerWidth >= 500) {
      setIsInnerWidthOver500("over");
    } else if (window.innerWidth < 500) {
      setIsInnerWidthOver500("less");
      // setPrevInnerHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    const error_description = new URL(window.location.href).searchParams.get(
      "error_description"
    );
    const code = new URL(window.location.href).searchParams.get("code");
    if (error_description !== null) {
      // window.history.go(-(window.history.length - 1));
      navigate("/");
    }
    if (code !== null) {
      navigate("/oauthkakao", { state: { code }, replace: true });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const message = useGreetings();

  const messageLines =
    message && message.length > 0
      ? message.split("\n").filter((line) => line.trim() !== "")
      : [];

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
      {isInnerWidthOver500 === "less" ? (
        <Swiper
          direction={"vertical"}
          scrollbar={{
            verticalClass: "swiper-scrollbar-vertical",
            hide: false,
          }}
          verticalClass={"swiper-scrollbar-vertical"}
          modules={[Scrollbar]}
        >
          <SwiperSlide>
          <div
              className={`mainpage-home ${
                bgAnimation ? "home-on" : "home-off"
              }`}
            >
              <div className="home-wrapper">
                <p>
                  <span className="subtext-wel">Wel</span>
                  <span className="subtext-come">-come</span>
                  <span className="subtext-to">to</span>
                </p>
                <img src={Images.ceremony_cake} alt="ceremony cake image" />
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
            {/* <div className="informations">
              <div
                className={`mainpage-details ${
                  bgAnimation ? "info-on" : "info-off"
                }`}
              > */}
            <div
              className={`mainpage-details ${
                bgAnimation ? "details-on" : "details-off"
              }`}
            >
              <div className="details-wrapper">
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
                      <span className="highlight">다음 페이지의 부가 기능</span>을 이용해주세요!
                    </span>
                  </p>
                </div>
                <div className="program-wrapper">
                  <h1>Program</h1>
                  <div className="program-timetable">
                    <div className="item-time-div">
                      <span className="time1">18:00</span>
                      <span className="time2">18:10</span>
                      <span className="time3">18:45</span>
                      <span className="time4">19:45</span>
                      <span className="time5 last-item">20:30</span>
                    </div>
                    <img className="chart1"src={Images.content_chart} alt="content chart image" />
                    <img className="chart2" src={Images.content_chart2} alt="content chart image" />
                    <img className="chart3" src={Images.content_chart3} alt="content chart image" />
                    <img className="chart4" src={Images.content_chart4} alt="content chart image" />
                    <div className="item-div">
                      <p className="item1">
                        <span>개회식</span>
                        <span className="highlight">openning ceremony</span>
                      </p>
                      <p className="item2">
                        <span>1부</span>
                        <span className="highlight">part 1</span>
                      </p>
                      <p className="item3">
                        <span>저녁 식사</span>
                        <span className="highlight">dinner</span>
                      </p>
                      <p className="item4">
                        <span>2부</span>
                        <span className="highlight">part 2</span>
                      </p>
                      <p className="item5">
                        <span>폐회식</span>
                        <span className="highlight">closing ceremony</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`mainpage-morefunc ${
                bgAnimation ? "more-on" : "more-off"
              }`}
            >
              {envelopeIconClicked && <HandyInvitationModal closeModal={closeModal} />}
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
                    src={Images.team_logo}
                    alt="team logo image"
                  />
                  <span onClick={handlenavigate}>만든 사람들 &#62;</span>
                </div>
                <div className="morefunc-handy-invitation">
                  <span>간이 초대장 &#62;</span>
                  <img
                    src={Images.envelope_icon}
                    alt="envelope icon"
                    onClick={openModal}
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
      ) : (
        <>
          <div
            className={`mainpage-home ${
              bgAnimation ? "home-on" : "home-off"
            }`}
          >
            <div className="home-wrapper">
              <p>
                <span className="subtext-wel">Wel</span>
                <span className="subtext-come">-come</span>
                <span className="subtext-to">to</span>
              </p>
              <img src={Images.ceremony_cake} alt="ceremony cake image" />
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

          {/* <div className="informations">
            <div
              className={`mainpage-details ${
                bgAnimation ? "info-on" : "info-off"
              }`}
            > */}
          <div
            className={`mainpage-details ${
              bgAnimation ? "details-on" : "details-off"
            }`}
          >
            <div className="details-wrapper">
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
                    <span className="highlight">다음 페이지의 부가 기능</span>을 이용해주세요!
                  </span>
                </p>
              </div>
              <div className="program-wrapper">
                <h1>Program</h1>
                <div className="program-timetable">
                  <div className="item-time-div">
                    <span className="time1">18:00</span>
                    <span className="time2">18:10</span>
                    <span className="time3">18:45</span>
                    <span className="time4">19:45</span>
                    <span className="time5 last-item">20:30</span>
                  </div>
                  <img className="chart1"src={Images.content_chart} alt="content chart image" />
                  <img className="chart2" src={Images.content_chart2} alt="content chart image" />
                  <img className="chart3" src={Images.content_chart3} alt="content chart image" />
                  <img className="chart4" src={Images.content_chart4} alt="content chart image" />
                  <div className="item-div">
                    <p className="item1">
                      <span>개회식</span>
                      <span className="highlight">openning ceremony</span>
                    </p>
                    <p className="item2">
                      <span>1부</span>
                      <span className="highlight">part 1</span>
                    </p>
                    <p className="item3">
                      <span>저녁 식사</span>
                      <span className="highlight">dinner</span>
                    </p>
                    <p className="item4">
                      <span>2부</span>
                      <span className="highlight">part 2</span>
                    </p>
                    <p className="item5">
                      <span>폐회식</span>
                      <span className="highlight">closing ceremony</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mainpage-morefunc ${
              bgAnimation ? "more-on" : "more-off"
            }`}
          >
            {envelopeIconClicked && <HandyInvitationModal closeModal={closeModal} />}
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
                  src={Images.team_logo}
                  alt="team logo image"
                />
                <span onClick={handlenavigate}>만든 사람들 &#62;</span>
              </div>
              <div className="morefunc-handy-invitation">
                <span>간이 초대장 &#62;</span>
                <img
                  src={Images.envelope_icon}
                  alt="envelope icon"
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
        </>
      )}
    </MainpageContainer>
  );
};

export default MainPage;
