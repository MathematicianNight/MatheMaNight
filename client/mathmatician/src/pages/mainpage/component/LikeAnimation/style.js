import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const LikeContainer = styled.section`
  @keyframes heartAnimation {
    0% {
      transform: translateY(0) scale(1);
    }
    // 50% {
    //   transform: translateY(-100px) scale(1.2);
    //   opacity: 0;
    // }
    100% {
      transform: translateY(-150px) scale(2);
      opacity: 0;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation: fadeOut 0.8s 2.2s forwards;
  & > .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    & > .smileplus {
      width: 79px;
      height: 48px;
    }
    & > .smile {
      width: 113px;
      height: 113px;
    }
  }

  & > img {
    width: 50px;
    height: 50px;
    margin: 5px;
  }

  .heart1 {
    position: absolute;
    top: 15%;
    left: 70%;
    animation: heartAnimation 4s ease infinite;
  }

  .heart2 {
    position: absolute;
    top: 23%;
    left: 21%;
    animation: heartAnimation 4s ease infinite;
  }

  .heart3 {
    position: absolute;
    top: 35%;
    left: 40%;
    animation: heartAnimation 4s ease infinite;
  }

  .heart4 {
    position: absolute;
    top: 45%;
    left: 10%;
    animation: heartAnimation 4s ease infinite;
  }

  .heart5 {
    position: absolute;
    top: 51%;
    left: 78%;
    animation: heartAnimation 4s ease infinite;
  }

  .heart6 {
    position: absolute;
    top: 58%;
    left: 55%;
    animation: heartAnimation 4s ease infinite;
  }

  .heart7 {
    position: absolute;
    top: 70%;
    left: 30%;
    animation: heartAnimation 4s ease infinite;
  }

  .heart8 {
    position: absolute;
    top: 80%;
    left: 72%;
    animation: heartAnimation 4s ease infinite;
  }
  .heart9 {
    position: absolute;
    top: 85%;
    left: 10%;
    animation: heartAnimation 4s ease infinite;
  }
`;

export default LikeContainer;
