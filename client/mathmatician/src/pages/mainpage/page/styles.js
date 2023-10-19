import styled from "@emotion/styled";
import { Images, Colors } from "../../../utils/style";
import "../../../assets/fonts/fonts.css";

const MainpageContainer = styled.section`
  // 총 5개의 페이지를 담고 있는 부모에 적용하는 스타일
  box-shadow: -5px 0 10px rgba(20, 20, 20, 0.5),
    5px 0 10px rgba(20, 20, 20, 0.5);
  @media (max-width: 501px) { // 501 미만
    width: 100%;
  }
  @media (min-width: 501px) { // 501 이상
    width: 500px;
    margin: 0 auto;
  }
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* overflow: auto scroll; */
  /* scroll-snap-type: y proximity; */
  font-family: "SUITE", sans-serif;
  font-size: 11px;
  color: ${Colors.White};

  // 자식으로 들어있는 5개의 페이지에 공통적으로 적용하는 스타일
  /* & > [class^="mainpage"] {
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
  } */
  & > .swiper {
    width: 100%;
    height: 100%;
    & .swiper-slide {
      width: 100%;
      height: 100%;
    }
  }
  div[class^="mainpage"] {
    width: 100%;
    height: 100%;
  }

  // 페이지 1: 로고, 제목 등이 있는 첫 화면
  .mainpage-home {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .home-wrapper {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > p {
        width: 298px;
        font-family: "DM Serif Display", sans-serif;
        font-size: 65px;
        font-weight: 400;
        line-height: 93%;
        text-align: left;
        & > span {
          display: block;
          &.welcome-to {
            margin: 2px 0 0 6px;
          }
        }
      }
      & > img {
        width: 150px;
        /* width: 55%; */
        /* @media (max-height: 641px) {
          margin: -35px 0 5px 0;
          width: 45%;
        }
        @media (min-height: 641px) and (max-height: 751px) {
          margin: -6px 0 15px 0;
          width: 45%;
        }
        @media (min-height: 751px) and (max-height: 851px) {
          width: 55%;
        }
        @media (min-height: 851px) {
          margin: 10px 0 35px 0;
          width: 60%;
        } */
      }
      & > .invitation-summary {
        width: 298px;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 1fr 1fr;
        & > .invitation-running {
          grid-row: 1 / 2;
          grid-column: 1 / 3;
          justify-self: end;
          align-self: end;
          font-family: "EB Garamond", sans-serif;
          font-weight: 400;
          font-size: 20px;
          color: #ff8383;
          margin: 0 9px 8px 0;
        }
        & > .invitation-title {
          grid-row: 2 / 3;
          grid-column: 1 / 3;
          justify-self: center;
          align-self: center;
          font-family: "PyeongChangPeace", sans-serif;
          font-weight: 300;
          font-size: 60px;
          text-shadow: 0 0 3.5px rgba(255, 255, 255, 0.9);
        }
        & > .invitation-date {
          grid-row: 3 / 4;
          grid-column: 1 / 2;
          justify-self: start;
          align-self: start;
          font-family: "SUITE", sans-serif;
          font-size: 15px;
          font-weight: 400;
          margin: 11px 0 0 8px;
        }
        & > .invitation-place {
          grid-row: 3 / 4;
          grid-column: 2 / 3;
          justify-self: end;
          align-self: start;
          font-family: "TheJamsil", sans-serif;
          font-weight: 300;
          font-size: 15px;
          margin: 11px 8px 0 0;
        }
      }
      @media (max-width: 325px) {
        & > p {
          width: 270px;
          font-size: 58px;
        }
        & > .invitation-summary {
          width: 270px;
          & > .invitation-title {
            font-size: 54px;
          }
        }
      }
      @media (min-width: 405px) {
        & > p {
          width: 348px;
          font-size: 70px;
        }
        & > .invitation-summary {
          width: 348px;
          & > .invitation-running {
            font-size: 24px;
            margin: 0 10px 11px 0;
          }
          & > .invitation-title {
            font-size: 70px;
          }
          & > .invitation-date {
            font-size: 19px;
            margin: 12px 0 0 9px;
          }
          & > .invitation-place {
            font-size: 19px;
            margin: 12px 9px 0 0;
          }
        }
      }
    }
  }

  // 페이지 2: 인사말
  .mainpage-greetings {
  // 원래 .child 였던게 .mainpage-greeting로 바뀌었고, 거기 들어갔던 css 일단 그대로 다시 옮김
  height: 100%;
  min-height: ${window.innerHeight}px;
  // line-height: ${window.innerHeight}px;
  scroll-snap-align: start;
    & > .Greetings {
      // .child 안에 .Greetings가 있었어서 여기로 다시 옮김
      height: 100%;
      min-height: ${window.innerHeight}px;
    }
  }

  // 페이지 3: 일시 및 장소, 프로그램 소개
  .mainpage-details {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: grid;
    justify-items: center;
    & > .info-wrapper {
      & .highlight {
      font-size: 11px;
      color: #FFDB58;
      }
      align-self: end;
      width: 100%;
      margin-bottom: 12%; // info랑 program 사이 간격
      & > h1 {
        width: 80%;
        margin: 0 auto 30px; // info 밑에 간격 8%
        font-size: 25px;
      }
      & > div {
        border: 1px solid ${Colors.White};
        box-sizing: border-box;
        width: 80%;
        margin: 0 auto 4.5%; // 세 흰색 박스 사이 간격
        height: 72px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        font-size: 18px;
        & > img {
          position: absolute;
          top: 5px;
          left: 8px;
        }
      }
      & > p {
        font-size: 11px;
        text-align: center;
        @media (max-width: 315px) {
          & > span {
            display: block;
          }
        }
      }
    }
    & > .program-wrapper {
      align-self: start;
      width: 100%;
      & > h1 {
        width: 80%;
        margin: 0 auto 35px; // info 밑에 간격 8%
        font-size: 25px;
      }
      & > .program-timetable {
        box-sizing: border-box;
        width: 78%;
        margin: 0 auto;
        display: flex;
        & > img {
          height: 100%;
          margin-top: 6px; // 차트 위에서 쪼끔 떨어뜨리는거
        }
        & > ul {
          padding-left: 30px; // 차트랑 목록 사이 간격
          font-size: 18px;
          & > li {
            & > span {
              display: block;
            }
            & > .highlight {
              font-size: 15px;
              color: #FFDB58;
              margin-bottom: 35px; // 목록 수직 사이 간격 35
            }
          }
          & > .list-last-item > .highlight {
            margin-bottom: 0;
          }
        }
      }
    }
    @media (max-height: 590px) {
      & > .info-wrapper {
        & .highlight {
          font-size: 10px;
        }
        margin-bottom: 6%;
        & > h1 {
          width: 71%;
          margin-bottom: 12px;
          font-size: 20px;
        }
        & > div {
          width: 71%;
          margin-bottom: 3.5%;
          height: 54px;
          font-size: 13px;
          & > img {
            width: 25px;
          }
        }
        & > p {
          font-size: 10px;
        }
      }
      & > .program-wrapper {
        & > h1 {
          width: 71%;
          margin-bottom: 15px;
          font-size: 20px;
        }
        & > .program-timetable {
          width: 68%;
          & > img {
            height: 152px;
            margin-top: 3px;
          }
          & > ul {
            padding-left: 18px;
            font-size: 13px;
            & > li > .highlight {
              font-size: 11px;
              margin-bottom: 13px;
            }
            & > .list-last-item > .highlight {
              margin-bottom: 0;
            }
          }
        }
      }
    }
    @media (min-height: 590px) and (max-height: 770px) {
      & > .info-wrapper {
        & .highlight {
          font-size: 10px;
        }
        margin-bottom: 8%;
        & > h1 {
          width: 75%;
          margin-bottom: 16px;
          font-size: 23px;
        }
        & > div {
          width: 75%;
          margin-bottom: 4%;
          height: 62px;
          font-size: 15px;
          & > img {
            width: 30px;
          }
        }
        & > p {
          font-size: 10px;
        }
      }
      & > .program-wrapper {
        & > h1 {
          width: 75%;
          margin-bottom: 22px;
          font-size: 23px;
        }
        & > .program-timetable {
          width: 72%;
          & > img {
            height: 200px;
            margin-top: 5px;
          }
          & > ul {
            padding-left: 23px;
            font-size: 16px;
            & > li > .highlight {
              font-size: 13px;
              margin-bottom: 20px;
            }
            & > .list-last-item > .highlight {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }

  
  // 페이지 4: 부가 기능
  /* .morefunc-effect-a {
    background-image: url(${Images.temp1});
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.5s ease-in-out;
  }
  .morefunc-effect-b {
    background-image: url(${Images.temp2});
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.5s ease-in-out;
  } */
  .mainpage-morefunc {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    & > .morefunc-wrapper {
      /* border: 1px solid red; */
      display: grid;
      justify-items: center;
      align-items: center;
      margin: 64px 0 0; // 페이지 위 여백
      & > .morefunc-description {
        padding-right: 24px; // 제목 왼쪽 간격 맞추기
        & > h1 {
          font-size: 25px;
          font-weight: 300;
          margin-bottom: 14px; // 제목 밑에 간격
        }
        & > p {
          font-size: 11px;
          font-weight: 400;
        }
      }
      & > .morefunc-widgets {
        /* &, & * {border:1px solid red; box-sizing: border-box;} */
        display: grid;
        grid-template-rows: 155px 155px;
        grid-template-columns: 155px 155px;
        place-items: stretch stretch;
        grid-gap: 22px 22px;
        gap: 22px 22px;
        margin: 28px 0 67px 0; // 위젯 박스 위아래 간격
        & > .calendar-widget {
          grid-row: 1 / 2;
          grid-column: 1 / 2;
        }
        & > .like-widget {
          grid-row: 1 / 2;
          grid-column: 2 / 3;
        }
        & > .map-widget {
          grid-row: 2 / 3;
          grid-column: 1 / 3;
        }
      }
      /* & > .morefunc-aboutus {
        text-align: center;
        margin-bottom: 45px; // 만든사람들하고 간이 초대장 사이 간격
        & > img {
          border-radius: 50%;
        }
        @keyframes textEffect {
          0% {text-shadow: 0 0 1px rgba(255, 255, 255, 0.1), 0 0 2px rgba(255, 255, 255, 0.1), 0 0 3px rgba(255, 255, 255, 0.1);}
          100% {text-shadow: 0 0 2px rgba(255, 255, 255, 0.8), 0 0 3px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.8);}
        }
        & > p {
          font-size: 20px;
          margin: 18px 0 0 10px; // 로고랑 만든 사람들 사이 간격
          text-shadow: 0 0 2px rgba(255, 255, 255, 0.8), 0 0 3px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.8);
          // animation: textEffect 1s ease-in infinite alternate;
        }
      }
      & > .morefunc-handy-invitation {
        justify-self: stretch;
        text-align: right;
        position: relative;
        & > span {
          display: inline-block;
          vertical-align: baseline;
          font-family: 'PyeongChangPeace', sans-serif;
          font-size: 15px;
          position: absolute;
          top: 13px;
          right: 64px;
        }
        & > img {
          width: 40px;
          height: 40px;
          margin-right: 23px;
          vertical-align: bottom;
        }
      } */
    }
    /* @media (max-width: 330px) {
      & > .morefunc-wrapper {
        width: 260px;
        & > .morefunc-description {
          & > p {
            font-size: 10px;
          }
        }
        & > .morefunc-widgets {
          width: 260px;
          height: 260px;
          grid-gap: 18px 18px;
          gap: 18px 18px;
        }
      }
    } */
    /* @media (min-width: 330px) and (max-width: 370px) {
      & > .morefunc-wrapper {
        width: 290px;
        & > .morefunc-description {
          & > p {
            font-size: 10px;
          }
        }
        & > .morefunc-widgets {
          width: 290px;
          height: 290px;
          grid-gap: 18px 18px;
          gap: 18px 18px;
        }
      }
    } */
  }

  // 페이지 5: 질문과 답변
  .mainpage-qna {
    // 원래 .child 였던게 .mainpage-qna로 바뀌었고, 거기 들어갔던 css 일단 그대로 다시 옮김
    height: 100%;
    min-height: ${window.innerHeight}px;
    // line-height: ${window.innerHeight}px;
    scroll-snap-align: start;
    & > .QnA {
      min-height: ${window.innerHeight}px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
    }
  }
`;

export default MainpageContainer;
