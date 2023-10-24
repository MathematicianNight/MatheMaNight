import styled from "@emotion/styled";
import { Images, Colors } from "../../../utils/style";
import "../../../assets/fonts/fonts.css";

const LoadingContainer = styled.section`
  box-shadow: -5px 0 10px rgba(20, 20, 20, 0.5),
    5px 0 10px rgba(20, 20, 20, 0.5);
  @media (max-width: 499px) {
    // 부모가 500 미만 -> only 모바일 세로
    width: 100%;
    height: 100%;
  }
  @media (min-width: 499px) {
    // 부모가 500 이상 -> 모바일 가로, 태블릿, PC 등
    width: 500px;
    height: 100%;
    margin: 0 auto;
    overflow: auto scroll;
  }
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & > .loading-spinner {
    box-sizing: border-box;
    width: 75%;
    /* margin: 0 auto; */
    position: relative;
    & > .loading-text {
      box-sizing: border-box;
      align-self: flex-start;
      font-family: "SUITE", sans-serif;
      font-size: 25px;
      font-weight: 700;
      color: ${Colors.White};
      margin-bottom: 15px;
    }
    & > .loading-bar {
      box-sizing: border-box;
      width: 100%;
      height: 11px;
      border: 3px solid ${Colors.White};
      border-radius: 14px;
    }
    @keyframes temp {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    & > .loading-bar::before {
      content: "";
      display: block;
      box-sizing: border-box;
      width: 0;
      height: 11px;
      border-radius: 14px;
      background-color: ${Colors.White};
      position: absolute;
      bottom: 0;
      left: 0;
      animation: temp 3s infinite ease;
    }
  }
`;

export default LoadingContainer;