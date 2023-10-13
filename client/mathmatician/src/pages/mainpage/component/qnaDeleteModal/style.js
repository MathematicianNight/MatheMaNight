import styled from "@emotion/styled";
import { Colors, Images } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

export const AnswerModalContainer = styled.div`
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

  & > .ModalContainer {
    border-radius: 15px;
    // padding-bottom: 20px;
    background-color: ${Colors.White};
    color: ${Colors.Black};
    & > .modal-content-false {
      & > .modal-content-wrapper {
        padding: 18px 21px 13px 21px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > .title {
          font-family: SUITE;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-bottom: 7px;
        }
        & > .sub-title {
          font-family: SUITE;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-bottom: 15px;
        }
        & > input {
          width: 251px;
          height: 25px;
          border-radius: 6px;
          border: 1px solid #b3b3b3;
          // width: 80%;
          padding: 0 8px;
        }
        & > input:placeholder {
          color: ${Colors.Gray02};
        }
      }
      & > .button-group {
        border-top: 1px solid ${Colors.Gray03};
        display: flex;
        flex-direction: row;
        height: 38px;
        width: 100%;
        align-items: center;
        & > .button {
          height: 100;
          text-align: center;
          width: 50%;
          color: #7f54d9;
          font-family: SUITE;
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        & > .centerborder {
          border-right: 1px solid ${Colors.Gray03};
        }
      }
    }
    & > .modal-content-true {
      & > .modal-content-wrapper {
        padding: 18px 21px 13px 21px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > .title {
          font-family: SUITE;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-bottom: 7px;
        }
        & > .sub-title {
          font-family: SUITE;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-bottom: 15px;
        }
        & > .textarea-wrapper {
          width: 251px;
          height: 25px;
          border-radius: 6px;
          border: 1px solid #b3b3b3;
          height: 70px;
          overflow-y: scroll;
          overflow-x: hidden;
          & > textarea {
            padding: 0 8px;
            width: 100%;
            outline: none;
            height: 100%;
            border: none; /* 입력 필드의 테두리 제거 */
            resize: none; /* 크기 조절 비활성화 */
            overflow-x: hidden; /* 수평 스크롤바 숨김 */
            white-space: pre-wrap; /* 텍스트 줄 바꿈 활성화 */
          }
        }
        & > input:placeholder {
          color: ${Colors.Gray02};
        }
      }
      & > .button-group {
        border-top: 1px solid ${Colors.Gray03};
        display: flex;
        flex-direction: row;
        height: 38px;
        width: 100%;
        align-items: center;
        & > .button {
          height: 100;
          text-align: center;
          width: 50%;
          color: #7f54d9;
          font-family: SUITE;
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        & > .centerborder {
          border-right: 1px solid ${Colors.Gray03};
        }
      }
    }
  }
`;
