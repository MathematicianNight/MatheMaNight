import styled from "@emotion/styled";
import { Colors, Images } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

export const CreateModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .bold {
    font-weight: 700;
  }

  & > .ModalContainer {
    border-radius: 15px;
    // padding-bottom: 20px;
    min-width: 293px;
    height: 350px;
    background-color: ${Colors.White};
    color: ${Colors.Black};

    & > .modal-close-div {
      width: 100%;
      text-align: right;
      & > .modal-close {
        padding: 14px 14px 0 0;
      }
    }

    & > .modal-flex {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > .modal-img {
        width: 121px;
        height: 114.676px;
        margin: 0 0 18px 2rem;
      }

      .modal-heading {
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 6px;
      }

      .modal-description {
        text-align: center;
        font-family: SUITE;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 14px;
        line-height: normal;
      }

      .modal-description strong {
        font-weight: 700;
      }

      .modal-input {
        border-radius: 6px;
        border: 1px solid #b3b3b3;
        width: 80%;
        height: 25px;
        padding: 0 10px;
        margin-bottom: 14px;
      }
      .modal-input::placeholder {
        color: ${Colors.Gray02};
        font-family: SUITE;
      }

      .modal-button {
        border-radius: 14.5px;
        background: #a27fec;
        width: 65px;
        height: 23px;
        flex-shrink: 0;
        color: white;
        margin-top: 10px;
        cursor: pointer;
        border: none;
      }
    }
  }
`;
