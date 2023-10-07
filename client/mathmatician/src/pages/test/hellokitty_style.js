import styled from "@emotion/styled";
import { Images, Colors } from "../../utils/style";

const MainpageContainer = styled.section`
  @font-face {
    // 폰트... 임시 방편으로 이렇게 처리... 나중에 방법 찾기...
    font-family: "SUIT-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
  // font-family: 'DM Serif Display', serif;
  font-family: "SUIT-Regular", sans-serif;
  font-weight: 500;
  color: ${Colors.white};

  @media (max-width: 575px) {
    width: 100%;
    background-image: linear-gradient(
      180deg,
      #0f0019 0%,
      #140065 48.26%,
      #987fff 100%
    ); // background-image?
  }
  @media (min-width: 576px) {
    width: 576px;
    background-image: linear-gradient(
      180deg,
      #0f0019 0%,
      #140065 48.26%,
      #987fff 100%
    ); // background-image?
    margin: 0 auto;
  }
  /* border: 3px solid aqua; box-sizing: border-box; // 나중에 삭제 */
  height: 100vh;
  height: calc(var(--vh, 500vh) * 100); // height: ${({ viewportY }) => viewportY}px;
  background-image: linear-gradient(
    180deg,
    #0f0019 0%,
    #140065 48.26%,
    #987fff 100%
  ); // background-image?
  /* background-repeat: no-repeat; */
  /* background-attachment: fixed; */
  overflow: auto scroll;
  scroll-snap-type: y mandatory;
  /* scroll-behavior: smooth; */

  & > .mainpage-section {
    /* border: 3px solid red; box-sizing: border-box; */
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
    /* @media (max-width: 575px) {
    width: 100%;
    }
    @media (min-width: 576px) {
    width: 576px;
    } */
  }

  & > .home-layout {
    // later...
  }

  & > .greetings-layout {
    /* border: 1px solid orange; box-sizing: border-box; // 나중에 삭제 */
    // later...
  }

  & > .details-layout {
    /* border: 3px solid yellow; box-sizing: border-box; // 나중에 삭제 */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > .information-wrapper {
      /* border: 3px solid yellow; box-sizing: border-box; // 나중에 삭제 */
      width: 45%;
      height: 40%;
      width: 300px;
      & > .information-title {
        /* align-self: flex-start; */
      }
    }
    & > .program-wrapper {
      /* border: 3px solid yellow; box-sizing: border-box; // 나중에 삭제 */
    }
  }

  & > .morefunc-layout {
    /* border: 1px solid magenta; box-sizing: border-box; // 나중에 삭제 */
    height: 100%;
    & > .morefunc-wrapper {
      /* border: 1px solid white; box-sizing: border-box; // 나중에 삭제 */
      width: 90%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;

      & > .morefunc-title {
        /* border: 1px solid red; box-sizing: border-box; // 나중에 삭제 */
        margin-top: 13%;
        font-size: 1.6rem;
      }
      & > .morefunc-description {
        /* border: 1px solid orange; box-sizing: border-box; // 나중에 삭제 */
        margin-top: 3%;
        font-size: 0.6rem;
      }
      & > .morefunc-widgets-wrapper {
        /* border: 1px solid yellow; box-sizing: border-box; // 나중에 삭제 */
        margin-top: 6.5%;
        height: 45%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-between;
        & > .later1 {
          /* border: 1px solid greenyellow; box-sizing: border-box; // 나중에 삭제 */
          width: 45%;
          height: 46%;
          margin-right: 3%;
        }
        & > .later2 {
          /* border: 1px solid greenyellow; box-sizing: border-box; */
          width: 45%;
          height: 46%;
        }
      }
      & > .morefunc-aboutus-wrapper {
        /* border: 1px solid red; box-sizing: border-box; // 나중에 삭제 */
        height: 38%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        & > img {
          /* border: 1px solid aqua; box-sizing: border-box; // 나중에 삭제 */
          border-radius: 100%;
          width: 45%;
          margin-bottom: -20%;
        }
        & > span {
          /* border: 1px solid aqua; box-sizing: border-box; // 나중에 삭제 */
          font-size: 1rem;
        }
      }
    }
  }

  & > .qna-layout {
    /* border: 3px solid blue; box-sizing: border-box; // 나중에 삭제 */
    // fill in this...
  }
`;

export default MainpageContainer;