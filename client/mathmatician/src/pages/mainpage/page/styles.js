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
    overflow: hidden scroll;
    & div[class^="mainpage"] {
      width: 100%;
      height: ${({ prevInnerHeight }) => prevInnerHeight}px;
    }
  }
  box-sizing: border-box;
  font-family: "SUITE", sans-serif;
  font-size: 11px;
  color: ${Colors.White};

  .home-on {
    background-image: url(${Images.star_home_group1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    // transition: 0.3s;
  }
  .home-off {
    background-image: url(${Images.star_home_group2});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    // transition: 0.3s;
  }
  .details-on {
    background-image: url(${Images.star_details_group1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    // transition: 0.3s;
  }
  .details-off {
    background-image: url(${Images.star_details_group2});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    // transition: 0.3s;
  }
  /* .info-on {
    background-image: url(${Images.star_info_group1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    // transition: 0.3s;
  }
  .info-off {
    background-image: url(${Images.star_info_group2});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    // transition: 0.3s;
  } */
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
        width: 92%;
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
      @media (min-width: 385px) {
        & > p {
          width: 330px;
          font-size: 70px;
        }
        & > .invitation-summary {
          width: 320px;
          & > .invitation-title {
            font-size: 65px;
          }
        }

      }
      @media (max-width: 310px) {
        & > p {
          width: 260px;
          font-size: 57px;
        }
        & > img {
          width: 100%;
        }
        & > .invitation-summary {
          width: 260px;
          & > .invitation-title {
            font-size: 52px;
          }
        }
      }
      @media (max-height: 735px) {
        & > p {
          width: 294px;
          font-size: 62px;
        }
        & > img {
          width: 82%;
          margin: 7% 0 6.5% 0;
        }
        & > .invitation-summary {
          width: 284px;
          & > .invitation-title {
            font-size: 57px;
          }
        }
        @media (max-width: 365px) {
          & > p {
            width: 285px;
          }
          & > img {
            width: 90%;
          }
        }
        @media (max-width: 300px) {
          & > p {
            width: 252px;
            font-size: 55px;
          }
          & > img {
            width: 100%;
          }
          & > .invitation-summary {
            width: 252px;
            & > .invitation-title {
              font-size: 50px;
            }
          }
        }
      }
      @media (max-height: 660px) {
        & > p {
          width: 268px;
          font-size: 57px;
        }
        & > img {
          width: 75%;
          margin: 4% 0 4% 0;
        }
        & > .invitation-summary {
          width: 258px;
          & > .invitation-running {
            font-size: 18px;
            margin-right: 7px;
          }
          & > .invitation-title {
            font-size: 52px;
          }
          & > .invitation-date {
            font-size: 13.5px;
          }
          & > .invitation-place {
            font-size: 13px;
          }
        }
        @media (max-width: 365px) {
          & > img {
            width: 85%;
          }
        }
        @media (max-width: 300px) {
          & > p {
            width: 254px;
          }
          & > img {
            width: 100%;
          }
        }
      }
      @media (max-height: 590px) {
        & > p {
          width: 248px;
          font-size: 53px;
        }
        & > img {
          width: 55%;
          margin: 3% 0 2% 0 ;
        }
        & > .invitation-summary {
          width: 238px;
          & > .invitation-running {
            font-size: 15px;
          }
          & > .invitation-title {
            font-size: 48px;
          }
          & > .invitation-date {
            font-size: 11.5px;
          }
          & > .invitation-place {
            font-size: 11px;
            margin-right: 7px;
          }
        }
        @media (max-width: 365px) {
          & > img {
            width: 60%;
          }
        }
        @media (max-width: 300px) {
          & > p {
            width: 238px;
          }
          & > img {
            width: 75%;
          }
        }
      }
    }
  }

  // 페이지 2: 인사말
  .mainpage-greetings {
    @media (max-width: 499px) { // 기존의 css를 그대로 옮김
      height: 100%;
      min-height: ${window.innerHeight}px;
      // line-height: ${window.innerHeight}px;
      & > .Greetings {
        height: 100%;
        min-height: ${window.innerHeight}px;
      }
    }
    @media (min-width: 499px) { // 추가적으로 모바일 세로를 벗어났을 때(window.innerWidth >= 500)의 처리
      width: 100%;
      height: ${({ prevInnerHeight }) => prevInnerHeight}px;
      & > .Greetings {
        width: 100%;
        height: 100%;
      }
    }
  }

  // 페이지 3: 일시 및 장소, 프로그램 소개
  .mainpage-details {
    /* box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    & > .details-wrapper { // 775 이상
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      font-family: "SUITE", sans-serif;
      font-weight: 400;
      color: ${Colors.White};
      /* & > div {border: 3px solid red; box-sizing: border-box;} // 두 박스 테두리 */
      & > .info-wrapper {
        width: 100%;
        margin-bottom: 10%; // 두 박스 사이 간격
        & > h1 {
          width: 85%;
          margin: 0 auto 25px; // Information 밑에 간격
          font-size: 25px;
        }
        & > div {
          width: 85%;
          border: 1px solid ${Colors.White};
          /* box-shadow: 0 0 3px rgba(255, 255, 255, 0.9); */
          box-sizing: border-box;
          margin: 0 auto 5%; // 세 흰색 박스 사이 간격
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
          width: 100%;
          font-size: 11px;
          text-align: center;
          @media (max-width: 325px) {
            & > span {
              display: block;
              line-height: 12px;
            }
          }
        }
        & .highlight {
          font-size: 11px;
          color: #ffdb58;
        }
      }
      & > .program-wrapper {
        width: 100%;
        & > h1 {
          width: 85%;
          margin: 0 auto 29px; // program 밑에 간격
          font-size: 25px;
        }
        & > .program-timetable {
          /* &, & > * {border: 1px solid aqua; box-sizing: border-box;} // 세 요소 테두리 */
          width: 83%;
          margin: 0 auto;
          display: flex;
          & > img[class^="chart"] {
            align-self: flex-start;
            box-sizing: content-box;
            display: none;
          }
          & > .item-time-div {
            margin-top: 2px;
            & > span {
              display: block;
              font-size: 13px;
              margin-bottom: 54px;
            }
            & > .time1 {
              margin-bottom: 55px;
            }
            & > .time2 {
              letter-spacing: 0.6px;
            }
            & > .time3 {
              letter-spacing: 0.36px;
            }
            & > .time4 {
              letter-spacing: 0.36px;
            }
            & > .time5 {
              letter-spacing: -0.24px;
              margin-bottom: 0;
            }
          }
          & > img.chart1 {
            display: inline-block;
            padding-top: 4px; // 차트 시작점 조절
            margin: 0 20px; // 차트 기준으로 좌우 간격
          }
          & > .item-div {
            & > p {
              margin-bottom: 34px; // 오른쪽 항목 수직 간격
              & > span {
                font-size: 18px;
                display: block;
              }
              & > .highlight {
                font-size: 15px;
                color: #ffdb58;
              }
            }
            & > .item1 {
              margin-bottom: 35px;
            }
            & > .item4 {
              margin-bottom: 35px;
            }
            & > .item5 {
              margin-bottom: 0;
            }
          }
        }
      }

      @media (max-height: 775px) {
        & > .info-wrapper {
          margin-bottom: 8%;
          & > h1 {
            width: 80%;
            margin-bottom: 15px;
            font-size: 23px;
          }
          & > div {
            width: 80%;
            height: 65px;
            margin-bottom: 4%;
            font-size: 16px;
          }
          & > p {
            font-size: 10px;
          }
          & .highlight {
            font-size: 10px;
          }
        }
        & > .program-wrapper {
          & > h1 {
            width: 80%;
            margin-bottom: 19px;
            font-size: 23px;
          }
          & > .program-timetable {
            width: 78%;
            & > .item-time-div {
              margin-top: 2px;
              & > span {
                font-size: 12px;
                margin-bottom: 47px;
              }
              & > .time1 {
                margin-bottom: 48px;
              }
              & > .time5 {
                margin-bottom: 0;
              }
            }
            & > img.chart1 {
              display: none;
            } 
            & > img.chart2 {
              display: inline-block;
              padding-top: 4px;
              margin: 0 18px;
            }
            & > .item-div {
              & > p {
                margin-bottom: 30px;
                & > span {
                  font-size: 16px;
                }
                & > .highlight {
                  font-size: 13px;
                }
              }
              & > .item1 {
                margin-bottom: 31px;
              }
              & > .item4 {
                margin-bottom: 31px;
              }
              & > .item5 {
                margin-bottom: 0;
              }
            }
          }
        }
      }
      @media (max-height: 650px) {
        & > .info-wrapper {
          margin-bottom: 7%;
          & > h1 {
            width: 78%;
            margin-bottom: 12px;
            font-size: 22px;
          }
          & > div {
            width: 78%;
            height: 60px;
            margin-bottom: 4%;
            font-size: 15px;
            & > img {
              width: 30px;
            }
          }
        }
        & > .program-wrapper {
          & > h1 {
            width: 78%;
            margin-bottom: 16px;
            font-size: 22px;
          }
          & > .program-timetable {
            width: 76%;
            & > .item-time-div {
              margin-top: 1px;
              & > span {
                font-size: 11px;
                margin-bottom: 40px;
              }
              & > .time1 {
                margin-bottom: 40px;
              }
              & > .time5 {
                margin-bottom: 0;
              }
            }
            & > img.chart2 {
              display: none;
            }
            & > img.chart3 {
              display: inline-block;
              padding-top: 2px;
              margin: 0 14px;
            }
            & > .item-div {
              & > p {
                margin-bottom: 24px;
                & > span {
                  font-size: 15px;
                }
                & > .highlight {
                  font-size: 12px;
                }
              }
              & > .item1 {
                margin-bottom: 23px;
              }
              & > .item4 {
                margin-bottom: 24px;
              }
              & > .item5 {
                margin-bottom: 0;
              }
            }
          }
        }
      }
      @media (max-height: 580px) {
        & > .info-wrapper {
          margin-bottom: 5%;
          & > h1 {
            width: 75%;
            margin-bottom: 8px;
            font-size: 19px;
          }
          & > div {
            width: 75%;
            height: 50px;
            margin-bottom: 3%;
            font-size: 14px;
            & > img {
              width: 28px;
            }
          }
        }
        & > .program-wrapper {
          & > h1 {
            width: 75%;
            margin-bottom: 12px;
            font-size: 19px;
          }
          & > .program-timetable {
            width: 73%;
            & > .item-time-div {
              margin-top: 2px;
              & > span {
                font-size: 10px;
                margin-bottom: 30px;
              }
              & > .time1 {
                margin-bottom: 30px;
              }
              & > .time5 {
                margin-bottom: 0;
              }
            }
            & > img.chart3 {
              display: none;
            }
            & > img.chart4 {
              display: inline-block;
              padding-top: 2px;
              margin: 0 14px;
            }
            & > .item-div {
              & > p {
                margin-bottom: 15px;
                & > span {
                  font-size: 14px;
                }
                & > .highlight {
                  font-size: 11px;
                }
              }
              & > .item1 {
                margin-bottom: 15px;
              }
              & > .item4 {
                margin-bottom: 15px;
              }
              & > .item5 {
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
    position: relative;
    & > .morefunc-wrapper { // 775 이상 400 미만 355 이상
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding-top: 3%;
      & > .morefunc-description {
        align-self: flex-start;
        & > h1 {
          font-size: 25px;
          font-weight: 300;
          margin-bottom: 12px; // More Functions 아래 여백
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
        margin: 30px 0 68px; // 위젯 위아래 여백
      }
      & > .morefunc-aboutus {
        text-align: center;
        margin-bottom: 52px; // 만든 사람들과 간이 초대장 사이 여백
        & > img {
          width: 135px;
          border-radius: 50%;
        }
        & > span {
          display: block;
          font-size: 21px;
          margin: 18px 0 0 10px; // 로고와 만든 사람들 사이 여백
          /* text-shadow: 0 0 2px rgba(255, 255, 255, 0.8),
            0 0 3px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.8); */
        }
      }
      @keyframes fadeInLeft {
        0% {transform: translate3d(5px, 0, 0);}
        to {transform: translateZ(0);}
      }
      & > .morefunc-handy-invitation {
        align-self: stretch;
        text-align: right;
        position: relative;
        & > span {
          display: inline-block;
          font-family: "PyeongChangPeace", sans-serif;
          font-size: 15px;
          position: absolute;
          top: 15px;
          right: 35px;
          animation: fadeInLeft 0.7s infinite alternate ease-out;
          margin-right: 2px;
        }
        & > img {
          width: 40px;
          margin-right: -8px;
          margin-top: 1px;
        }
      }

      @media (min-height: 775px) and (min-width: 400px) { // 775 이상 400 이상
        & > .morefunc-widgets {
          grid-template-rows: 165px 165px;
          grid-template-columns: 165px 165px;
          grid-gap: 24px 24px;
          gap: 24px 24px;
        }
        & > .morefunc-aboutus > img {
          width: 140px;
        }
      }
      @media (min-height: 775px) and (max-width: 355px) { // 775 이상 355 미만
        & > .morefunc-widgets {
          grid-template-rows: 135px 135px;
          grid-template-columns: 135px 135px;
        }
        & > .morefunc-aboutus > img {
          width: 125px;
        }
      }
      @media (min-height: 775px) and (max-width: 315px) { // 775 이상 315 미만
        & > .morefunc-description > p > span {
          display: block;
        }
        & > .morefunc-widgets {
          grid-template-rows: 110px 110px;
          grid-template-columns: 110px 110px;
        }
        & > .morefunc-aboutus {
          & > img {
            width: 100px;
          }
          & > span {
            font-size: 18px;
            margin-top: 14px;
          }
        }
        & > .morefunc-handy-invitation {
          & > span {
            font-size: 12px;
            top: 8px;
            right: 28px;
          }
          & > img {
            width: 34px;
          }
        }
      }

      @media (max-height: 775px) { // 775 미만 355 이상
        & > .morefunc-description {
          & > h1 {
            font-size: 22px;
            margin-bottom: 8px;
          }
          & > p {
            font-size: 10px;
          }
        }
        & > .morefunc-widgets {
          grid-template-rows: 135px 135px;
          grid-template-columns: 135px 135px;
          grid-gap: 18px 18px;
          gap: 18px 18px;
          margin: 24px 0 62px;
        }
        & > .morefunc-aboutus {
          margin-bottom: 46px;
          & > img {
            width: 110px;
          }
          & > span {
            font-size: 18px;
            margin-top: 12px;
          }
        }
        & > .morefunc-handy-invitation {
          & > span {
            font-size: 12px;
            top: 8px;
            right: 28px;
          }
          & > img {
            width: 34px;
          }
        }
        @media (max-width: 355px) { // 775 미만 355 미만
          & > .morefunc-widgets {
            grid-template-rows: 125px 125px;
            grid-template-columns: 125px 125px;
          }
          & > .morefunc-aboutus > img {
            width: 100px;
          }
        }
        @media (max-width: 305px) { // 775 미만 305 미만
          & > .morefunc-description > p > span {
            display: block;
          }
          & > .morefunc-widgets {
            grid-template-rows: 110px 110px;
            grid-template-columns: 110px 110px;
          }
        }
      }

      @media (max-height: 650px) { // 650 미만 305 이상
        & > .morefunc-widgets {
          grid-template-rows: 125px 125px;
          grid-template-columns: 125px 125px;
          grid-gap: 18px 18px;
          gap: 18px 18px;
          margin: 22px 0 50px;
        }
        & > .morefunc-aboutus {
          margin-bottom: 34px;
          & > img {
            width: 100px;
          }
          & > span {
            font-size: 16px;
            margin-top: 10px;
          }
        }
        @media (max-width: 305px) { // 650 미만 305 미만
          & > .morefunc-widgets {
            grid-template-rows: 115px 115px;
            grid-template-columns: 115px 115px;
          }
          & > .morefunc-handy-invitation {
            & > span {
              font-size: 11px;
              top: 7px;
              right: 22px;
            }
            & > img {
              width: 30px;
            }
          }
        }
      }

      @media (max-height: 580px) { // 580 미만
        & > .morefunc-description {
          & > h1 {
            margin-bottom: 4px;
          }
          & > p > span {
            display: block;
          }
        }
        & > .morefunc-widgets {
          grid-template-rows: 105px 105px;
          grid-template-columns: 105px 105px;
          grid-gap: 16px 16px;
          gap: 16px 16px;
          margin: 14px 0 37px;
        }
        & > .morefunc-aboutus {
          margin-bottom: 22px;
          & > img {
            width: 80px;
          }
          & > span {
            font-size: 14px;
            margin-top: 7px;
          }
        }
        & > .morefunc-handy-invitation {
          & > span {
            font-size: 10px;
            top: 7px;
            right: 20px;
          }
          & > img {
            width: 27px;
          }
        }
      }
    }
  }

  // 페이지 5: 질문과 답변
  .mainpage-qna {
    @media (max-width: 499px) { // 기존의 css를 그대로 옮김
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
    @media (min-width: 499px) { // 추가적으로 모바일 세로를 벗어났을 때(window.innerWidth >= 500)의 처리
      width: 100%;
      height: ${({ prevInnerHeight }) => prevInnerHeight}px;
      position: relative;
      & > .QnA {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default MainpageContainer;
