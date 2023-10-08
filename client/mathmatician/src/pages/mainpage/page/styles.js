import styled from "@emotion/styled";
import { Images, Colors } from "../../../utils/style";
import "../../../assets/fonts/fonts.css";

const MainpageContainer = styled.section`
  // 총 5개의 페이지를 담고 있는 부모에 적용하는 스타일
  /* box-shadow: -5px 0 10px rgba(20, 20, 20, 0.5), 5px 0 10px rgba(20, 20, 20, 0.5); */
  border: 1.5px solid red; box-sizing: border-box;
  @media (max-width: 501px) {width: 100%;} // 501 미만
  @media (min-width: 501px) { // 501 이상
    width: 500px;
    margin: 0 auto;
  }
  background-image: linear-gradient(180deg, #0F0019 0%, #140065 48.26%, #987FFF 100%);
  background-repeat: no-repeat;
  /* height: ${window.innerHeight}px; */
  height: calc(var(--vh, 1vh) * 100);
  overflow: auto;
  scroll-snap-type: y mandatory;
  font-family: "SUIT", sans-serif;
  color: ${Colors.White};

  // 자식으로 들어있는 5개의 페이지에 공통적으로 적용하는 스타일
  & > [class^=mainpage] {
    width: 100%;
    height: 100%;
    overflow: auto;
    scroll-snap-align: start;
  }

  // 페이지 1: 로고, 제목 등이 있는 첫 화면
  & > .mainpage-home {
    & > .home-wrapper {
      border: 1.5px solid red; box-sizing: border-box;
      width: 90%;
      height: 100%;
      /* height: calc(var(--vh, 1vh) * 100); */
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > span {
        /* border: 1.5px solid aqua; box-sizing: border-box; */
        font-family: 'DM Serif Display', sans-serif;
        font-size: 63px;
        align-self: flex-start;
        display: block;
        margin-left: 18px;
      }
      & > img {
        /* border: 1.5px solid aqua; box-sizing: border-box;         */
        @media (max-height: 641px) {margin: -35px 0 5px 0; height: 41%;}
        @media (min-height: 641px) and (max-height: 751px) {margin: -8px 0 17px 0; height: 44%;}
        @media (min-height: 751px) and (max-height: 851px) {margin: 5px 0 30px 0; height: 48%;}
        @media (min-height: 851px) {margin: 17px 0 42px 0; height: 50%}
      }
      & > .invitation-summary {
        /* border: 1.5px solid aqua; box-sizing: border-box; */
        /* & > * {border: 1.5px solid red; box-sizing: border-box;} */
        @media (max-width: 321px) {width: 250px;} // 321 미만
        @media (min-width: 321px) and (max-width: 391px) {width: 299px;} // 321 이상 391 미만
        @media (min-width: 391px) {width: 347px;} // 391 이상
        & > span:nth-child(1) {
          font-family: 'EB Garamond', sans-serif;
          font-size: 20px;
          color: #FF8383;
          float: right;
          padding: 0 11px 3px 0;
        }
        & > span:nth-child(2) {
          font-family: 'PyeongChangPeace', sans-serif;
          @media (max-width: 321px) {font-size: 50px;} // 321 미만
          @media (min-width: 321px) and (max-width: 391px) {font-size: 60px;} // 321 이상 391 미만
          @media (min-width: 391px) {font-size: 70px;} // 391 이상
          float: left;
        }
        & > span:nth-child(3) {
          font-family: 'SUIT', sans-serif;
          font-size: 15px;
          float: left;
          padding: 6px 0 0 6px;
        }
        & > span:nth-child(4) {
          font-family: 'TheJamsil', sans-serif;
          font-weight: 300;
          font-size: 15px;
          float: right;
          padding: 6px 8px 0 0;
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
    & > .Greetings { // .child 안에 .Greetings가 있었어서 여기로 다시 옮김
      height: 100%;
      min-height: ${window.innerHeight}px;
    }
  }

  // 페이지 3: 일시 및 장소, 프로그램 소개
  & > .mainpage-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > .info-wrapper {
      border: 1.5px solid red; box-sizing: border-box;
      width: 90%;
      height: calc(var(--vh, 1vh) * 40);
      margin: 10px auto;
      // I'll lfill in this later...
    }
    & > .program-wrapper {
      border: 1.5px solid red; box-sizing: border-box;
      width: 90%;
      height: calc(var(--vh, 1vh) *45);
      margin: 10px auto;
      // I'll fill in this later...
    }
  }

  // 페이지 4: 부가 기능
  & > .mainpage-morefunc {
    border: 1.5px solid red; box-sizing: border-box;
    width: 84%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* & > .morefunc-description {
      border: 1.5px solid red; box-sizing: border-box;
      padding: 0 10px;
      h1 {font-size: 24px; margin-bottom: 5px;}
      p {font-size: 11px; line-height: 13.5px; margin-bottom: 14px;}
    } */
    @media (max-width: 321px) { // 321 미만
      & > .morefunc-description {
        padding: 0 10px;
        h1 {font-size: 24px; margin-bottom: 5px;}
        p {font-size: 11px; line-height: 13.5px; margin-bottom: 14px;}
      }
    }

    & > .widgets-wrapper {
      /* border: 1.5px solid aqua; box-sizing: border-box; */
      width: 100%;
      align-self: center;
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      place-items: center;
      @media (max-width: 321px) { // 321 미만
        gap: 8% 5%;
        padding-bottom: 10px;
      }
      @media (min-width: 321px) and (max-width: 391px) { // 321 이상 391 미만
        gap: 11% 6%;
        padding-bottom: 15px;
      }
      @media (min-width: 391px) { // 391 이상
        gap: 11% 4.5%;
        padding-bottom: 11px;
      }       
    }
    & > .aboutus-wrapper {
      /* border: 1.5px solid yellow; box-sizing: border-box; */
      /* & > * {border: 1.5px solid red; box-sizing: border-box} */
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      padding: 25px 0 10px 0;
      & > img {
        border-radius: 50%;
        width: 40%;
      }
      & > span {
        margin: 15px 0 0 5px;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }
    }
    & > .handy-invitation {
      /* border: 1px solid yellow; box-sizing: border-box; */
      display: flex;
      justify-content: flex-end;
      align-items: center;
      & > img {
        width: 15%;
      }
      & > span {
        font-family: 'PyeongChangPeace', sans-serif;
        font-size: 12px;
        margin-top: 7px;
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