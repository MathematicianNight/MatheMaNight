import styled from "@emotion/styled";
import { Colors, Images } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

export const GreetingsContainer = styled.div`
  height: 100%;
  min-height: ${window.innerHeight}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  & > .greetings-wrapper {
    text-align: center;
    // text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
    font-family: "YUniverse";
    font-size: 20px;
    font-style: normal;
    font-weight: 550;
    line-height: normal;

    @media (max-width: 375px) {
      font-size: 15px;
    }

    .margin {
      margin-bottom: 30px;
    }
    & > img {
    }
    & > .greetings-flower-a {
      width: 60.958px;
      height: 103.18px;
      position: relative;
      top: ${window.innerHeight / 43}px;
      right: 125px;
      @media (max-width: 375px) {
        right: 85px;
      }
    }
    & > .greetings-flower-b {
      width: 60.958px;
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