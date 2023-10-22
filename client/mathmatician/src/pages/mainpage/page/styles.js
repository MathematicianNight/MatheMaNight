import styled from "@emotion/styled";
import { Images, Colors } from "../../../utils/style";
import "../../../assets/fonts/fonts.css";

const MainpageContainer = styled.section`
  box-shadow: -5px 0 10px rgba(20, 20, 20, 0.5),
    5px 0 10px rgba(20, 20, 20, 0.5);
  @media (max-width: 499px) {
    // 부모가 500 미만 -> only 모바일 세로
    width: 100%;
    height: 100%;
    .swiper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        width: 100%;
        height: 100%;
        & > div[class^="mainpage"] {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media (min-width: 499px) {
    // 부모가 500 이상 -> 모바일 가로, 태블릿, PC 등
    width: 500px;
    height: 100%;
    margin: 0 auto;
    overflow: auto scroll;
    & > div[class^="mainpage"] {
      width: 100%;
      height: auto;
      min-height: ${window.innerHeight}px;
    }
  }
  box-sizing: border-box;
  font-family: "SUITE", sans-serif;
  font-size: 11px;
  color: ${Colors.White};

  // 페이지 1: 로고, 제목 등이 있는 첫 화면
  .mainpage-home {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .home-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > p {
        width: 310px;
        font-family: "DM Serif Display", sans-serif;
        font-size: 65px;
        font-weight: 400;
        line-height: 93%;
        text-align: left;
        & > span {
          display: block;
        }
        & > .subtext-to {
          margin: 2px 0 0 6px;
        }
      }
      & > img {
        width: 100%;
        margin: 6% 0 7.5% 0;
      }
      & > .invitation-summary {
        width: 300px;
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
          font-size: 15.5px;
          font-weight: 400;
          margin: 11px 0 0 6px;
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
      @media (max-height: 735px) {
        & > p {
          width: 280px;
          font-size: 60px;
        }
        & > img {
          width: 85%;
          margin: 7% 0 6.5% 0;
        }
        & > .invitation-summary {
          width: 270px;
          & > .invitation-title {
            font-size: 54px;
          }
        }
      }
      @media (max-height: 660px) {
        & > p {
          width: 250px;
          font-size: 55px;
        }
        & > img {
          width: 75%;
          margin: 7% 0 5.5% 0;
        }
        & > .invitation-summary {
          width: 240px;
          & > .invitation-running {
            font-size: 18px;
            margin-right: 7px;
          }
          & > .invitation-title {
            font-size: 48px;
          }
          & > .invitation-date {
            font-size: 13.5px;
          }
          & > .invitation-place {
            font-size: 13px;
          }
        }        
      }
      @media (max-height: 590px) {
        & > p {
          width: 220px;
          font-size: 48px;
        }
        & > img {
          width: 55%;
          margin: 5.5% 0 5.5% 0;
        }
        & > .invitation-summary {
          width: 210px;
          & > .invitation-running {
            font-size: 15px;
          }
          & > .invitation-title {
            font-size: 42px;
          }
          & > .invitation-date {
            font-size: 11.5px;
          }
          & > .invitation-place {
            font-size: 11px;
            margin-right: 7px;
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

  .bg-animation-on {
    // width: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .bg-animation-off {
    // width: 100vh;
    // height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .info-on {
    background-image: url(${Images.star_info_group1});
    background-repeat: no-repeat;
    background-size: cover; /* 배경 이미지를 컨테이너에 맞게 조절 */
    background-position: center center;
    // transition: 0.3s;
  }
  .info-off {
    background-image: url(${Images.star_info_group2});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover; /* 배경 이미지를 컨테이너에 맞게 조절 */
    // transition: 0.3s;
  }
  .more-on {
    background-image: url(${Images.star_more_group1});
    background-repeat: no-repeat;
    background-size: cover; /* 배경 이미지를 컨테이너에 맞게 조절 */
    background-position: center center;
    // transition: 0.3s;
  }
  .more-off {
    background-image: url(${Images.star_more_group2});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover; /* 배경 이미지를 컨테이너에 맞게 조절 */
    // transition: 0.3s;
  }

  // 페이지 3: 일시 및 장소, 프로그램 소개
  .informations {
    height: 100%;
    min-height: ${window.innerHeight}px;

    & > .mainpage-details {
      width: 100%;
      min-height: ${window.innerHeight}px;
      box-sizing: border-box;
      display: grid;
      justify-items: center;

      & > .info-wrapper {
        & .highlight {
          font-size: 11px;
          color: #ffdb58;
        }
        align-self: end;
        width: 100%;
        margin-bottom: 12%; // info랑 program 사이 간격
        & > h1 {
          width: 80%;
          margin: 0 auto 30px; // info 밑에 간격
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
          margin: 0 auto 35px; // info 밑에 간격
          font-size: 25px;
        }
        & > .program-timetable {
          box-sizing: border-box;
          width: 78%;
          margin: 0 auto;
          display: flex;
          & > img {
            height: 100%;
            margin-top: 6px; // 차트 위에서 떨어뜨리는거
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
                margin-bottom: 35px; // 목록 수직 사이 간격
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
  }

  // 페이지 4: 부가 기능
  .mainpage-morefunc {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > .morefunc-wrapper {
      & > .morefunc-description {
        & > h1 {
          font-size: 25px;
          font-weight: 300;
          margin-bottom: 14px; // More Functions 아래 여백
        }
        & > p {
          font-size: 11px;
          font-weight: 400;
          line-height: 12px;
        }
      }
      & > .morefunc-widgets {
        display: grid;
        grid-template-rows: 155px 155px;
        grid-template-columns: 155px 155px;
        place-items: stretch stretch;
        grid-gap: 22px 22px;
        gap: 22px 22px;
        margin: 32px 0 77px; // 위젯 위아래 여백
      }
      & > .morefunc-aboutus {
        text-align: center;
        margin-bottom: 53px; // 만든 사람들과 간이 초대장 사이 여백
        & > img {
          width: 150px;
          border-radius: 50%;
        }
        & > span {
          display: block;
          font-size: 21px;
          margin: 18px 0 0 10px; // 로고와 만든 사람들 사이 여백
          text-shadow: 0 0 2px rgba(255, 255, 255, 0.8), 0 0 3px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.8);
        }
      }
      @keyframes fadeInDown {
        0% {
            opacity: 0;
            transform: translate3d(0, -30%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
      }
      @keyframes fadeInLeft {
        0% {
            opacity: 0;
            transform: translate3d(2%, 0, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
      }
      & > .morefunc-handy-invitation {        
        text-align: right;
        position: relative;
        animation: fadeInDown 1.2s infinite alternate;
        & > span {
          display: inline-block;
          font-family: 'PyeongChangPeace', sans-serif;
          font-size: 15px;
          position: absolute;
          top: 10px;
          right: 35px;
        }
        & > img {
          width: 40px;
          margin-right: -8px;
          margin-bottom: -15px;
        }
      }
      @media (min-height: 900px) {
        & > .morefunc-widgets {
          grid-template-rows: 170px 170px;
          grid-template-columns: 170px 170px;
          grid-gap: 24px 24px;
          gap: 24px 24px;
          margin: 36px 0 87px;
        }
        & > .morefunc-aboutus {
          margin-bottom: 63px;
          & > img {
            width: 170px;
          }
          & > span {
            margin-top: 25px;
          }
        }
      }      
      @media (max-height: 795px) {
        & > .morefunc-widgets {
          grid-template-rows: 140px 140px;
          grid-template-columns: 140px 140px;
          grid-gap: 20px 20px;
          gap: 20px 20px;
        }
        & > .morefunc-aboutus {
          & > img {
            width: 130px;
          }
        }
      }
      @media (max-height: 725px) {
        & > .morefunc-description {
          & > h1 {
            font-size: 23px;
            margin-bottom: 8px;
          }
          & > p > span {
            display: block;
            font-size: 10px;
          }
        }
        & > .morefunc-widgets {
          grid-template-rows: 125px 125px;
          grid-template-columns: 125px 125px;
          margin: 25px 0 64px;
        }
        & > .morefunc-aboutus {
          margin-bottom: 40px;
          & > img {
            width: 118px;
          }
          & > span {
            font-size: 19px;
            margin-top: 14px;
          }
        }
        & > .morefunc-handy-invitation {
          & > img {
            width: 34px;
            height: 34px;
          }
          & > span {
            font-size: 13px;
            top: 10px;
            right: 28px;
          }
        }
      }
      @media (max-height: 650px) {
        & > .morefunc-widgets {
          grid-template-rows: 110px 110px;
          grid-template-columns: 110px 110px;
        }
        & > .morefunc-aboutus {
          & > span {
            font-size: 16px;
          }
          & > img {
            width: 105px;
          }
        }
        & > .morefunc-handy-invitation {
          & > span {
            font-size: 11px;
            top: 12px;
            right: 26px;
          }
        }
      }
      @media (max-height: 590px) {
        & > .morefunc-description > h1 {
          font-size: 20px;
          margin-bottom: 5px;
        }
        & > .morefunc-widgets {
          grid-template-rows: 95px 95px;
          grid-template-columns: 95px 95px;
          grid-gap: 16px 16px;
          gap: 16px 16px;
          margin: 20px 0 50px 0;
        }
        & > .morefunc-aboutus {
          margin-bottom: 26px;
          & > img {
            width: 85px;
          }
          & > span {
            font-size: 15px;
            margin-top: 10px;
          }
        }
        & > .morefunc-handy-invitation {
          & > img {
            width: 28px;
          }
          & > span {
            font-size: 10px;
            top: 13px;
            right: 22px;
          }
        }
      }
    }
  }

  // 페이지 5: 질문과 답변
  .mainpage-qna {
    // 원래 .child 였던게 .mainpage-qna로 바뀌었고, 거기 들어갔던 css 일단 그대로 다시 옮김
    height: 100%;
    width: 100%;
    // min-height: ${window.innerHeight}px;
    // line-height: ${window.innerHeight}px;
    // scroll-snap-align: start;
    & > .QnA {
      height: 100%;
      min-height: ${window.innerHeight}px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
    }
  }
`;

export default MainpageContainer;
