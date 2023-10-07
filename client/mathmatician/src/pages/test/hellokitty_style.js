import styled from "@emotion/styled";
import { Images, Colors } from "../../utils/style";
import "../../assets/fonts/fonts.css";

const MainpageContainer = styled.section`
  border: 1.5px solid red; box-sizing: border-box;
  @media (max-width: 575px) {
    width: 100%;
    background-image: linear-gradient(180deg, #0F0019 0%, #140065 48.26%, #987FFF 100%); // background-image?
  }
  @media (min-width: 576px) {
    width: 576px;
    background-image: linear-gradient(180deg, #0F0019 0%, #140065 48.26%, #987FFF 100%); // background-image?
    margin: 0 auto;
  }
  height: 100vh;
  height: calc(var(--vh, 500vh) * 100); // height: ${({ viewportY }) => viewportY}px;
  background-repeat: no-repeat; // background-attachment: fixed;도 줘야되나...?
  overflow: auto scroll;
  scroll-snap-type: y mandatory; // 위에랑 이거 줄거면 scroll-behavior: smooth;는 필요없음

  font-family: "SUIT-Regular", sans-serif;
  font-weight: 500;
  color: ${Colors.White};

  & > .mainpage-section {
    border: 1.5px solid aqua; box-sizing: border-box;
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
  }

  & > .home-layout {
    // later...
  }

  & > .greetings-layout {
    // later...
  }

  /* & > .details-layout {
    border: 3px solid yellow; box-sizing: border-box; // 나중에 삭제 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > .information-wrapper {
      border: 3px solid yellow; box-sizing: border-box; // 나중에 삭제
      width: 45%;
      height: 40%;
      width: 300px;
      & > .information-title {
        align-self: flex-start;
      }
    }
    & > .program-wrapper {
      border: 3px solid yellow; box-sizing: border-box; // 나중에 삭제
    }
  } */

  & > .morefunc-layout {
    /* border: 1.5px solid magenta; box-sizing: border-box; */
    height: 100%; 
    & > .morefunc-wrapper {
      /* border: 1.5px solid green; box-sizing: border-box; */
      width: 90%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      /* * {border: 1px solid greenyellow; box-sizing: border-box;} */
      & > .morefunc-title {
        font-size: 25px; // 반응형
        margin-top: 13%;
      }
      & > .morefunc-description {
        font-size: 11px; // 반응형
        margin-top: 3%;
      }
      & > .morefunc-widgets-wrapper {
        margin-top: 6.5%;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      }
      & > .morefunc-aboutus-wrapper {
        /* border: 1px solid red; box-sizing: border-box; */
        /* * {border: 1px solid red; box-sizing: border-box;} */
        height: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        & > img {
          border-radius: 100%;
          width: 45%;
          margin-bottom: -25%;
        }
        & > span {
          font-size: 15px;
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