import styled from "@emotion/styled";
import { Images, Colors } from "../../../utils/style";
import "../../../assets/fonts/fonts.css";

const LoadingContainer = styled.section`
  box-shadow: -5px 0 10px rgba(20, 20, 20, 0.5), 5px 0 10px rgba(20, 20, 20, 0.5);
  @media (max-width: 501px) {width: 100%;} // 501 미만
  @media (min-width: 501px) { // 501 이상
    width: 500px;
    margin: 0 auto;
  }
  /* height: 100vh; */
  /* height: ${window.innerHeight}px; */
  height: calc(var(--vh, 1vh) * 100);
  background-color: #F9E000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }

  @keyframes temp {
    from {
      transform: translateY(0);
      z-index: 1;
    }
    to {
      transform: translateY(-20px);
      z-index: 1;
    }
  }
  & > img {
    /* border: 1px solid red; */
    border-radius: 60px;
    /* box-shadow: 0px 0 20px rgba(0, 0, 0, 0.5), 0px 0 20px rgba(0, 0, 0, 0.5); */
    width: 50%;
    animation: temp 0.5s ease-in-out infinite alternate;
  }
  
`;

export default LoadingContainer;