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
    font-family: "SUITE";
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
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
      width: 60.958px;
      height: 103.18px;
      position: relative;
      top: ${window.innerHeight / 70 - 10}px;
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
