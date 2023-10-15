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
          height: 40%;
        }
        @media (min-height: 751px) and (max-height: 851px) {
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
    box-sizing: border-box;
    display: grid;
    grid-row-gap: 48px;
    row-gap: 48px;
    font-family: "SUITE", sans-serif;
    font-weight: 400;
    & .highlight {
      font-size: 11px;
      color: #FFDB58;
    }
    & > .info-wrapper {
      align-self: end;
      width: 100%;
      min-width: 0;
      position: relative;
      & > h1 {
        font-size: 25px;
        margin: 0 0 21px 10%
      }
      & > div {
        border: 1px solid ${Colors.White};
        box-sizing: border-box;
        margin: 0 10% 16px;
        height: 72px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        & > span {
          font-family: 'Bodoni Moda', sans-serif;
          font-weight: 510;
          font-size: 10px;
          color: #ADABFF;
        }
        & > p {
          font-size: 18px;
        }
      }
      & > p {
        text-align: center;
        line-height: 12px;
      }
      & > .info-date {
        & > img {
          width: 8.5px;
          position: absolute;
          top: 5px;
          left: 6.2px;
        }
        & > span {
          position: absolute;
          top: 5.1px;
          left: 18.5px;
        }
      }
      & > .info-time {
        & > img {
          width: 9px;
          position: absolute;
          top: 4.5px;
          left: 6px;
        }
        & > span {
          position: absolute;
          top: 5.5px;
          left: 18.5px;
        }
      }
      & > .info-place {
        & > img {
          width: 7px;
          position: absolute;
          top: 4px;
          left: 6px;
        }
        & > span {
          position: absolute;
          top: 5.5px;
          left: 17.5px;
        }
      }
    }
    & > .program-wrapper {
      align-self: start;
      width: 100%;
      min-width: 0;
      & > h1 {
        font-size: 25px;
        margin: 0 0 26px 10%
      }
      & > .program-timetable {
        margin: 0 10%;
        position: relative;
        & > .content-chart {
          width: 1px;
          /* height: 237px; */
          background-color: ${Colors.White};
          position: absolute;
          top: 10px;
          left: 14.5px;
          height: 90%;
        }
        & > li {
          list-style-image: url(${Images.circle});
          margin-left: 25px;
          padding-left: 20px;
          margin-bottom: 11%;
          & > span {
            display: block;
            font-size: 18px;
          }
        }
        & > .last-item {
          margin-bottom: 0;
        }
      }
    }
    @media (max-width: 325px) {
      grid-row-gap: 0px;
      row-gap: 0px;
      & > .info-wrapper {
        & > h1 {
          font-size: 22px;
          margin-left: 7%;
        }
        & > div {
          margin: 0 7% 14px;
          & > p {
            font-size: 16px;
            & .highlight {
              font-size: 10px;
            }
          }
        }
        & > p > span {
          display: block;
          font-size: 10px;
        }
      }
      & > .program-wrapper {
        & > h1 {
          font-size: 22px;
          margin-left: 7%;
        }
        & > .program-timetable {
          margin: 0 7%;
          & > li > span {
            font-size: 16px;
          }
          & > li > .highlight {
            font-size: 13px;
          }
        }
      }
    }
    @media (min-width: 400px) {
      & > .info-wrapper {
        & > h1 {
          font-size: 28px;
        }
        & > div {
          margin-bottom: 20px;
          & > p {
            font-size: 20px;
            & > .highlight {
              font-size: 12px;
            }
          }
        }
        & > p > span {
          font-size: 12px;
        }
      }
      & > .program-wrapper {
        & > h1 {
          font-size: 28px;
        }
        & > .program-timetable > li > span {
          font-size: 20px;
        }
      }
    }
    @media (max-height: 755px) {
      grid-row-gap: 35px;
      row-gap: 35px;
    }
    @media (min-height: 885px) {
      & > .info-wrapper > div {
        height: 82px
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
