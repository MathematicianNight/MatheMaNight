import styled from "@emotion/styled";
import { Colors, Images } from "../../../../util/style";
import "../../../../asset/fonts/fonts.css";

export const QnaContainer = styled.div`
  color: ${Colors.White};
  font-family: "SUITE", sans-serif;

  & > .qna-wrapper {
    padding: 111px 34px;

    & > .qna-title {
      color: ${Colors.White};
      font-size: 25px;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 45px;
    }
    & > .qna-search-wrapper {
      height: 28px;
      background: none;
      border-radius: 19px;
      border: 1px solid ${Colors.White};
      display: flex;
      flex-direction: row;
      padding: 0 13px;
      flex-shrink: 0;
      align-items: center;
      & > img {
        height: 14px;
        width: 14px;
        margin-right: 7px;
      }
      & > .qna-searchbar {
        width: 100%;
        color: ${Colors.White};
        background-color: transparent;
        border: none;
        font-family: "SUITE", sans-serif;
      }
    }
    & > .qna-contents-wrapper {
      margin: 9px 11px;
      & > div {
        height: 56px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10.25px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        & > .qna-contents-img {
          height: 31px;
          width: 31px;
        }
        & > .qna-flex-wrapper {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
          & > .qna-name {
            font-size: 12px;
            font-weight: 700;
          }
          & > .qna-question {
            color: ${Colors.Gray01};
            font-size: 12px;
            font-weight: 400;
          }
        }
        & > .qna-togle-img {
        }
      }

      & > .qna-answer {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 13px 0 17px 0;
        height: 100%;
        gap: 10.25px;
        & > .qna-amswer-img {
          width: 30.478px;
          height: 16px;
          padding-top: 2px;
        }
        & > .qna-answer-content {
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
          color: ${Colors.Gray01};
          height: fit-content;
        }
      }
    }
    & > .pagination-wrapper {
      margin-top: 13px;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      & > .pagination-active {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid ${Colors.White};
        backdrop-filter: blur(2px);
        background: transparent;
        color: ${Colors.White};
        padding: 0;
        font-size: 10px;
        font-family: "SUITE", sans-serif;
      }
      & > .pagination {
        width: 16px;
        height: 16px;
        background: transparent;
        border: none;
        color: ${Colors.White};
        padding: 0;
        font-size: 10px;
        font-family: "SUITE", sans-serif;
      }
    }
    & > .qna-create {
      margin-top: 1.45rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 26px;
        border-radius: 19px;
        border: 1px solid ${Colors.White};
        background: transparent;

        color: ${Colors.White};
        font-weight: 600;
        font-size: 12px;
        font-family: "SUITE", sans-serif;
      }
    }
  }
`;