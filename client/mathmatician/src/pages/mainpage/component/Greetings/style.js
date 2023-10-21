import styled from "@emotion/styled";
import { Colors, Images } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

export const GreetingsContainer = styled.div`
  // min-height: ${window.innerHeight}px;

  width: 100%;
  // height: ${window.innerHeight}px;
  height: 100%;

  .bg-animation-on {
    // width: 100vh;
    background-image: url(${Images.star_qna_group1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .bg-animation-off {
    // width: 100vh;
    // height: 100%;
    background-image: url(${Images.star_qna_group2});
    // background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .qna-on {
    background-image: url(${Images.star_qna_group1});
    background-repeat: no-repeat;
    background-size: cover; /* 배경 이미지를 컨테이너에 맞게 조절 */
    background-position: center center;
    // transition: background ease-in-out 0.4s;
  }
  .qna-off {
    background-image: url(${Images.star_qna_group2});
    background-repeat: no-repeat;
    // position: fixed;
    // top: 0;
    // bottom: 0;
    background-position: center center;
    background-size: cover; /* 배경 이미지를 컨테이너에 맞게 조절 */
    // transition: background ease-in-out 0.1s;
  }

  & > .greetings-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    text-align: center;
    // text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
    font-family: "SUITE";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;

    @media (max-width: 375px) {
      font-size: 14px;
    }

    .margin {
      margin-bottom: 22px;
    }
    & > img {
    }
    & > .greetings-flower-a {
      // width: 60.958px;
      height: 103.18px;
      position: relative;
      top: ${window.innerHeight / 70 - 10}px;
      right: 125px;
      @media (max-width: 375px) {
        right: 85px;
      }
    }
    & > .greetings-flower-b {
      // width: 60.958px;
      height: 103.18px;
      position: relative;
      bottom: ${window.innerHeight / 25}px;
      left: 110px;
      @media (max-width: 375px) {
        left: 80px;
      }
    }
    & > li {
      list-style: none;
    }
  }
`;
