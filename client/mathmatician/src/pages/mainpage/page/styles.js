import styled from "@emotion/styled";
import { Images, Colors } from "../../../utils/style";
import "../../../assets/fonts/fonts.css";

const MainpageContainer = styled.section`
  // 총 5개의 페이지를 담고 있는 부모에 적용하는 스타일
  border: 1px solid transparent;
  box-sizing: border-box;
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
  /* height: calc(var(--vh, 1vh) * 100); */
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
    /* border: 1px solid transparent;
    box-sizing: border-box; */
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
    justify-items: center;
    align-items: center;
    /* grid-row-gap: 48px; */
    /* row-gap: 48px; */
    padding: 5% 0;
    font-family: "SUITE", sans-serif;
    font-weight: 400;
    & .highlight {
      font-size: 11px;
      color: #FFDB58;
    }
    & > .info-wrapper {
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
      & > div > img {
        position: absolute;
        top: 5px;
        left: 8px;
      }
    }
    & > .program-wrapper {
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
          background-color: ${Colors.White};
          position: absolute;
          top: 10px;
          left: 16px;
          height: 89%;
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
      grid-row-gap: 0;
      row-gap: 0;
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
        }
      }
    }
    @media (min-width: 400px) {
      grid-row-gap: 30px;
      row-gap: 30px;
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
      & > .program-wrapper > h1 {
        font-size: 28px;
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
    display: grid;
    justify-items: center;
    align-items: center;
    & > .morefunc-wrapper {
      margin: 20px 30px 5px;
      & > .morefunc-description {
        & > h1 {
          font-size: 25px;
          font-weight: 300;
          margin-bottom: 10px; // 제목 두줄 사이 간격
        }
        & > p {
          font-size: 11px;
          font-weight: 400;
        }
      }
      & > .morefunc-widgets {
        /* & {border:1px solid red; box-sizing: border-box;} */
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        place-items: stretch stretch;
        grid-gap: 18px 18px;
        gap: 18px 18px;
        margin: 20px 0 50px 0; // 위젯 박스 위아래 간격
      }
      & > .morefunc-aboutus {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > img {
          border-radius: 50%;
          width: 38%;
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
