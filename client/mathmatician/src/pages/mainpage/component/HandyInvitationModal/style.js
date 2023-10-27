import styled from "@emotion/styled";
import "../../../../assets/fonts/fonts.css";
import { Images, Colors } from "../../../../utils/style";

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & > .modal-div {
    width: 100%;
    height: auto;
    position: relative;
    box-sizing: border-box;
    @media (min-width: 499px) {
      width: 500px;
    }
    & > .modal-image {
      width: 100%;
    }
    & > .modal-close-button {
      position: absolute;
      width: 5%;
      top: 3%;
      right: 3%;
    }
    & > .modal-description {
      position: absolute;
      bottom: 3%;
      left: 3%;
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 4px;
      padding: 3px 6px;
      & > span {
        display: block;
        font-family: "SUITE", sans-serif;
        font-weight: 600;
        font-size: 10px;
        color: ${Colors.RawBlack};
        line-height: 12px;
      }
    }
  }
`;

export default ModalContainer;