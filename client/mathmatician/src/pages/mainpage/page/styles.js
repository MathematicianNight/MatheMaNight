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
  background-image: linear-gradient(
    180deg,
    #0f0019 0%,
    #140065 48.26%,
    #987fff 100%
  );
  background-repeat: no-repeat;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  font-family: "SUITE", sans-serif;
  font-size: 11px;
  color: ${Colors.White};

  // 자식으로 들어있는 5개의 페이지에 공통적으로 적용하는 스타일
  & > [class^="mainpage"] {
    width: 100%;
    height: 100%;
    overflow: auto;
    scroll-snap-align: start;
  }

  // 페이지 1: 로고, 제목 등이 있는 첫 화면
  & > .mainpage-home {
    display: flex;
    justify-content: center;
    align-items: center;
    & > .home-wrapper {
      width: 90%;
      height: auto;
      margin: 0 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > p {
        /* &, & * {border: 1.5px solid red; box-sizing: border-box;} */
        box-sizing: border-box;
        width: 330px;
        padding-left: 4.6%;
        text-align: left;
        font-family: "DM Serif Display", sans-serif;
        font-size: 65px;
        font-weight: 400;
        line-height: 93%;
        & > span {
          display: block;
          &.welcome-to {
            margin: 2px 0 0 6px;
          }
        }
      }
      & > img {
        @media (max-height: 641px) {
          margin: -35px 0 5px 0;
          height: 41%;
        }
        @media (min-height: 641px) and (max-height: 751px) {
          margin: -6px 0 15px 0;
          border: 1px solid red;
          height: 40%;
        }
        @media (min-height: 751px) and (max-height: 851px) {
          border: 1px solid red;
          height: 30%;
        }
        @media (min-height: 851px) {
          margin: 10px 0 35px 0;
          height: 50%;
        }
      }
      & > .invitation-summary {
        /* &, & * {border: 1.5px solid red; box-sizing: border-box;} */
        width: 330px;
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
          margin: 0 25px 6px 0;
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
          margin: 11px 0 0 24px;
        }
        & > .invitation-place {
          grid-row: 3 / 4;
          grid-column: 2 / 3;
          justify-self: end;
          align-self: start;
          font-family: "TheJamsil", sans-serif;
          font-weight: 300;
          font-size: 15px;
          margin: 11px 24px 0 0;
        }
      }
      @media (max-width: 325px) {
        & > p {
          width: 300px;
          font-size: 58px;
          padding-left: 7.5%;
        }
        & > .invitation-summary {
          width: 300px;
          & > .invitation-title {
            font-size: 54px;
          }
        }
      }
      @media (min-width: 405px) {
        & > p {
          width: 370px;
          font-size: 70px;
          padding-left: 3%;
        }
        & > .invitation-summary {
          width: 370px;
          & > .invitation-running {
            font-size: 24px;
            margin: 0 20px 8px 0;
          }
          & > .invitation-title {
            font-size: 70px;
          }
          & > .invitation-date {
            font-size: 19px;
            margin: 12px 0 0 20px;
          }
          & > .invitation-place {
            font-size: 19px;
            margin: 12px 20px 0 0;
          }
        }
      }
      @media (min-width: 470px) {
        & > p {
          padding-left: 1%;
        }
      }
    }
  }

  // 페이지 2: 인사말
  & > .mainpage-greetings {
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
  & > .mainpage-details {
    &, & * {box-sizing: border-box};
    .highlight {color: #ffdb5b};
    display: grid;
    @media (max-width: 321px) { // 321 미만
      h1 {font-weight: 300; font-size: 22px}
      & > .info-wrapper {
        padding: 7.5% 9% 8.5%; // 세번째값 Information과 Program 사이의 간격
        & > div {
          height: 54px;
          margin: 10px 0 10px; // 첫번째값 Information 밑의 간격
          & > p {font-size: 15px;}
        }
      }
      & > .program-wrapper {
        padding: 0 9% 7.5%; // 세번째값 위 쿼리 padding의 첫번째값하고 같아야 함
        & > div {margin-top: 14px}; // Program 밑의 간격
      }
    }
    @media (min-width: 321px) and (max-width: 391px) { // 321 이상 391 미만
      h1 {font-weight: 300; font-size: 24px;}
      & > .info-wrapper {
        padding: 8% 10.5% 11%;
        & > div {
          height: 61px;
          margin: 10px 0 10px;
          & > p {font-size: 16px;}
        }
      }
      & > .program-wrapper {
        padding: 0 10.5% 8%;
        & > div {margin-top: 14px;}
      }
    }
    @media (min-width: 391px) { // 391 이상
      h1 {font-weight: 300; font-size: 27.5px;}
      & > .info-wrapper {
        padding: 8% 12% 10%;
        & > div {
          height: 68px;
          margin: 10.5px 0 10.5px;
        }
      }
      & > .program-wrapper {
        padding: 0 12% 8%;
        & > div {margin-top: 14px;}
      }
    }
    @media (min-height: 800px) { // 870 이상
      .info-wrapper {
        padding-bottom: 13%;
      }
    }
    & > .info-wrapper {
      width: 100%;
      height: auto;
      align-self: end;
      & > .info-date > .head {background-image: url(${Images.calendar_icon});}
      & > .info-time > .head {background-image: url(${Images.clock_icon});}
      & > .info-place > .head {background-image: url(${Images.location_pin_icon});}
      & > [class^=info] {
        border: 1px solid ${Colors.White};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: center;
        position: relative;
        & > .head {
          height: 8.5px;
          position: absolute;
          top: 0;
          left: 0;
          background-repeat: no-repeat;
          background-size: contain;
          margin: 5px 0 0 7px;
          & > span {
            font-size: 10px;
            color: #adabff;
            vertical-align: top;
          }
        }
        & > p {
          align-self: center;
          /* font-size: 16px; */
          & > .highlight {
            font-size: 10.2px;
            color: #ffdb5b;
          }
        }
      }
      & > .info-date > .head {
        span {margin-left: 11.5px;}
      }
      & > .info-time > .head {
        span {margin-left: 11px;}
      }
      & > .info-place > .head {
        height: 9px;
        margin-left: 8px;
        span {margin-left: 9.5px;}
      }
      & > p {
        text-align: center;
        font-size: 10.2px;
        @media (max-width: 359px) { // 360 미만
          & > span {
            display: block;
            line-height: 11.5px;
          }
        }
      }
    }
    & > .program-wrapper {
      width: 100%;
      height: auto;
      align-self: start;
      & > .program-timetable {
        display: flex;
        & > img {height: 100%;}
        & > ul > li {
          font-size: 16px;
          margin: 0 0 26% 20px;
          &.end {margin-bottom: 0;}
          & > span {
            display: block;
            &.highlight {font-size: 14px; color: #ffdb5b;}
          }
        }
      }
    }
  }

  // 페이지 4: 부가 기능
  & > .mainpage-morefunc {
    &, & * {box-sizing: border-box;}
    display: grid;
    justify-items: center;
    align-items: center;
    & > .morefunc-wrapper { // 기본은 325px 이상 405px 미만
      /* border: 1px solid red; */
      width: 100%;
      padding: 7% 9%;
      & > .morefunc-description {
        & > h1 {
          font-weight: 300;
          font-size: 24px;
        }
        & > p {
          font-size: 10px;
          margin-top: 10px; // More Functions 밑의 간격
        }
      }
      & > .morefunc-widgets {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        grid-gap: 18px 18px; gap: 18px 18px;
        margin: 8% 0 18% 0; // 위젯 기준으로 위아래 간격
      }
      & > .morefunc-aboutus {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > img {
          border-radius: 50%;
          width: 44%;
        }
        & > span {
          font-size: 19px;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8);
          margin: 18px 0 0 10px; // 로고랑 만든 사람들 사이 간격
        }
      }
      & > .morefunc-handy-invitation {
        text-align: right;
        position: relative;
        margin-top: 14%; // 만든사람들하고 간이 초대장 사이 간격
        & > span {
          display: inline-block;
          vertical-align: baseline;
          font-family: 'PyeongChangPeace', sans-serif;
          font-size: 15px;
          position: absolute;
          top: 35%;
          right: 13%;
        }
        & > img {
          vertical-align: bottom;
          width: 15%;
          margin-right: -8px;
        }
      }
      @media (max-width: 325px) { // 더 작아지면... 325px 미만
        /* border: 1px solid red; */
        padding: 5% 9%;
        & > .morefunc-description {
          & > h1 {font-size: 18px;}
          & > p {
            font-size: 10px;
            margin-top: 8px;
            & > span {
              display: block;
              line-height: 12px;
            }
          }
        }
        & > .morefunc-widgets {
          grid-gap: 14px 14px; gap: 14px 14px;
          margin: 7% 0 16% 0;
        }
        & > .morefunc-aboutus {
          & > img {
            width: 40%;
          }
          & > span {
            font-size: 16px;
          }
        }
        & > .morefunc-handy-invitation {
          margin-top: 12%;
          & > span {
            font-size: 11px;
            top: 30%;
            right: 10%;
          }
          & > img {
            width: 12%;
          }
        }
      }
      // 더 커지면... 405px 이상
      @media (min-width: 405px) {
        padding: 5% 10%;
        & > .morefunc-description {
          & > h1 {font-size: 28px;}
          & > p {
            font-size: 12px;
            margin-top: 8px;
          }
        }
        & > .morefunc-widgets {
          grid-gap: 21px 21px; gap: 21px 21px;
          margin: 10% 0 16% 0;
        }
        & > .morefunc-aboutus {
          & > img {
            width: 47%;
          }
          & > span {
            font-size: 22px;
          }
        }
        & > .morefunc-handy-invitation {
          margin-top: 12%;
          & > span {
            font-size: 18px;
            top: 37%;
            right: 17%;
          }
          & > img {
            width: 17%;
          }
        }
      }
    }
  }

  // 페이지 5: 질문과 답변
  & > .mainpage-qna {
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
