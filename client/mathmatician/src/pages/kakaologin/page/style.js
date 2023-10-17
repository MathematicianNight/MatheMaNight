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
  /* width: 300px; */
  /* border: 1px solid red; */
  height: calc(var(--vh, 1vh) * 100);
  background-color: #F9E000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
   & > div {
    /* border: 1px solid aqua; */
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
   }
  /* & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  } */

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
  & > div > img {

    /* border: 1px solid red; */
    border-radius: 40px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

    width: 40%;
    /* animation: temp 0.5s ease-in-out infinite alternate; */
  }
  .here {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 20;
    transform: translate(-50%, -50%);
    /* border: 1px solid purple; */
  }
  & > div > p {
    font-family: 'SUITE';

    color: rgba(0, 0, 0, 0.6);
    margin-top: 25px;
    font-weight: 800;

  }
  
`;

export default LoadingContainer;