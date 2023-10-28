import styled from "@emotion/styled";
import "../../../../assets/fonts/fonts.css";
import { Images, Colors } from "../../../../utils/style";

// const ModalContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   position: absolute;
//   top: 0;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   z-index: 100;

//   & > .modal-div {
//     width: 100%;
//     height: auto;
//     position: relative;
//     box-sizing: border-box;
//     @media (min-width: 499px) {
//       width: 500px;
//     }
//     & > .modal-image {
//       width: 100%;
//     }
//     & > .modal-close-button {
//       position: absolute;
//       width: 5%;
//       top: 3%;
//       right: 3%;
//     }
//     & > .modal-description {
//       position: absolute;
//       bottom: 3%;
//       left: 3%;
//       background-color: rgba(255, 255, 255, 0.7);
//       border-radius: 4px;
//       padding: 3px 6px;
//       & > span {
//         display: block;
//         font-family: "SUITE", sans-serif;
//         font-weight: 600;
//         font-size: 10px;
//         color: ${Colors.RawBlack};
//         line-height: 12px;
//       }
//     }
//   }
// `;
const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 500px) {
    width: 500px;
    /* height: ${({ prevInnerHeight }) => prevInnerHeight}px; */
    height: 100%;
  }
  & > .modal-wrapper {
    width: 85%;
    height: auto;
    margin: 0 auto;
    box-sizing: border-box;
    border: 3px solid ${Colors.White};
    border-radius: 15px;
    /* box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5); */
    text-align: right;
    & > .modal-close-button {
      width: 5%;
      margin: 3% 3% 0 0;
    }
    & > .modal-content {
      width: 100%;
      & > img {
        width: 100%;
        margin: 4% 0;
      }
    }
    & > .modal-description {
      text-align: left;
      margin: 0 0 3% 3%;
      /* width: 58%;
      background-color: rgba(220, 220, 220, 0.7);
      border-radius: 4px;
      padding: 3px 6px; */
      & > span {
        display: block;
        font-family: "SUITE", sans-serif;
        font-weight: 500;
        font-size: 11px;
        color: ${Colors.White};
        line-height: 14px;
        /* @media (min-width: 400px) {
          font-size: 12px;
        } */
      }
    }

    @media (max-height: 650px) and (min-width: 370px) { // 650 미만 370 이상
      width: 80%;
    }
    @media (max-height: 650px) and (min-width: 400px) { // 650 미만 400 이상
      width: 75%;
    }
    @media (max-height: 650px) and (min-width: 450px) { // 650 미만 450 이상
      width: 70%;
    }
    @media (max-height: 580px) and (min-width: 300px) { // 580 미만 300 이상
      width: 80%;
    }
    @media (max-height: 580px) and (min-width: 350px) { // 580 미만 350 이상
      width: 72%;
    }
    @media (max-height: 580px) and (min-width: 400px) { // 580 미만 400 이상
      width: 62%;
    }
    @media (max-height: 580px) and (min-width: 450px) { // 580 미만 450 이상
      width: 57%;
    }
  }

`;

export default ModalContainer;