import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const LikeContainer = styled.section`
  @keyframes heartAnimation1 {
    0% {
      transform: translateY(0) scale(1);
    }
    // 50% {
    //   transform: translateY(-150px) scale(1.3);
    //   opacity: 0;
    // }
    100% {
      transform: translateY(-250px) scale(1.6);
      opacity: 0;
    }
  }

  @keyframes heartAnimation {
    0% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 1;
    }
    35% {
      transform: translateY(-150px) translateX(30px) scale(1.2);
      opacity: 0.6;
    }
    70% {
      transform: translateY(-300px) translateX(-30px) scale(1.4);
      // opacity: 0.2;
    }
    100% {
      transform: translateY(-300px) translateX(-30px) scale(1.5);
      // opacity: 0;
    }
  }
  @keyframes heartAnimation3 {
    0% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 1;
    }
    35% {
      transform: translateY(-150px) translateX(-30px) scale(1.2);
      opacity: 0.6;
    }
    70% {
      transform: translateY(-300px) translateX(30px) scale(1.4);
      // opacity: 0.2;
    }
    100% {
      transform: translateY(-300px) translateX(-30px) scale(1.5);
      // opacity: 0;
    }
  }
  @keyframes heartAnimation4 {
    0% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 1;
    }
    35% {
      transform: translateY(-180px) translateX(0px) scale(1.2);
      opacity: 0.6;
    }
    70% {
      transform: translateY(-360px) translateX(20px) scale(1.4);
      // opacity: 0.2;
    }
    100% {
      transform: translateY(-300px) translateX(-30px) scale(1.5);
      // opacity: 0;
    }
  }

  @keyframes heartAnimation2 {
    0% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 1;
    }
    20% {
      transform: translateY(-40px) translateX(-20px) scale(1.1);
      opacity: 0.8;
    }
    40% {
      transform: translateY(-80px) translateX(20px) scale(1.2);
      opacity: 0.6;
    }
    60% {
      transform: translateY(-120px) translateX(-20px) scale(1.3);
      opacity: 0.4;
    }
    80% {
      transform: translateY(-160px) translateX(20px) scale(1.4);
      // opacity: 0.2;
    }
    100% {
      transform: translateY(-200px) translateX(0) scale(1.5);
      // opacity: 0;
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
    animation: heartAnimation 4s ease-out infinite;
    transition: all 4s cubic-bezier(0.8, 0.2, 0.9, 0.5);
  }

  .heart2 {
    position: absolute;
    top: 23%;
    left: 21%;
    animation: heartAnimation 4s ease-out infinite;
  }

  .heart3 {
    position: absolute;
    top: 35%;
    left: 40%;
    animation: heartAnimation3 4s ease-out infinite;
  }

  .heart4 {
    position: absolute;
    top: 45%;
    left: 10%;
    animation: heartAnimation4 4s ease-out infinite;
  }

  .heart5 {
    position: absolute;
    top: 51%;
    left: 78%;
    animation: heartAnimation 4s ease-out infinite;
  }

  .heart6 {
    position: absolute;
    top: 58%;
    left: 55%;
    animation: heartAnimation3 4s ease-out infinite;
  }

  .heart7 {
    position: absolute;
    top: 70%;
    left: 30%;
    animation: heartAnimation4 4s ease-out infinite;
  }

  .heart8 {
    position: absolute;
    top: 80%;
    left: 72%;
    animation: heartAnimation3 4s ease-out infinite;
  }
  .heart9 {
    position: absolute;
    top: 85%;
    left: 14%;
    animation: heartAnimation3 4s ease-out infinite;
  }
  .heart10 {
    position: absolute;
    top: 97%;
    left: 59%;
    animation: heartAnimation 4s ease-out infinite;
  }
  .heart11 {
    position: absolute;
    top: 110%;
    left: 32%;
    animation: heartAnimation4 4s ease-out infinite;
  }
  .heart12 {
    position: absolute;
    top: 118%;
    left: 76%;
    animation: heartAnimation3 4s ease-out infinite;
  }
  .heart13 {
    position: absolute;
    top: 122%;
    left: 7%;
    animation: heartAnimation 4s ease-out infinite;
  }
`;

export default LikeContainer;
