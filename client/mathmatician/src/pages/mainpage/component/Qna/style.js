import styled from "@emotion/styled";
import { Colors, Images } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const maxwidth = "375";

export const QnaContainer = styled.div`
  color: ${Colors.White};
  font-family: "SUITE", sans-serif;
  width: 100%;
  height: ${window.innerHeight}px;

  .bg-animation-on {
    background-image: url(${Images.star_qna_group1});
    background-size: cover;
    background-repeat: no-repeat;
    // background-position: center center;
    transition: background ease-in-out 0.5s;
    height: 100%;
  }
  .bg-animation-off {
    background-image: url(${Images.star_qna_group2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transition: linear 0.2s;
  }
  @media (max-width: ${maxwidth}px) {
    .qna-wrapper {
      padding: 0rem 34px;
    }
  }
  .qna-on {
    background-image: url(${Images.star_qna_group1});
    background-repeat: no-repeat;
    background-size: cover; /* 배경 이미지를 컨테이너에 맞게 조절 */
    transition: background ease-in-out 0.4s;
  }
  .qna-off {
    background-image: url(${Images.star_qna_group2});
    background-repeat: no-repeat;
    background-size: cover; /* 배경 이미지를 컨테이너에 맞게 조절 */
    transition: background ease-in-out 0.4s;
  }

  & > .qna-wrapper {
    padding: 0 34px;
    height: ${window.innerHeight}px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // @media (max-width: ${maxwidth}px) {
    //   padding: 0 22px;
    // }
    // @media (min-width: 500px) {
    // }
    & > .qna-title {
      color: ${Colors.White};
      font-size: 25px;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 45px;
      // padding-top: ${window.innerHeight / 7}px;
      @media (max-width: ${maxwidth}px) {
        // padding-top: ${window.innerHeight / 14}px;
        margin-bottom: 30px;
        font-size: 22px;
      }
      @media (min-width: 500px) {
        padding-top: 0px;
      }
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
      @media (max-width: ${maxwidth}px) {
        height: 23px;
      }
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
        @media (max-width: ${maxwidth}px) {
          font-size: 12px;
        }
      }
    }
    & > .qna-contents-wrapper {
      margin: 0 11px 9px 11px;

      & > .qna-content-div {
        height: 56px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10.25px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        @media (max-width: ${maxwidth}px) {
          height: 52px;
        }

        & > .qna-contents-img {
          height: 31px;
          width: 31px;
        }
        & > .qna-flex-wrapper {
          display: flex;
          flex-direction: column;
          gap: 11px;
          width: 100%;
          @media (max-width: ${maxwidth}px) {
            gap: 8px;
          }
          & > .qna-name {
            font-size: 12px;
            font-weight: 600;
            height: 10px;
            @media (max-width: ${maxwidth}px) {
              font-size: 11px;
              height: 8px;
            }
          }
          & > .qna-question {
            color: ${Colors.Gray01};
            font-size: 12px;
            font-weight: 200;
            display: flex;
            flex-direction: row;
            align-items: center;
            @media (max-width: ${maxwidth}px) {
              font-size: 10px;
            }
            & > .speech-img {
              width: 12px;
              height: 12px;
              padding: 2px 0 0 6px;
            }
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
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        transition: 0.3s;
        gap: 10.25px;
        @media (max-width: ${maxwidth}px) {
          padding: 10px 0 14px 0;
        }
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
          @media (max-width: ${maxwidth}px) {
            font-size: 10px;
          }
        }
      }
    }
    & > .pagination-wrapper {
      & > .pagination-group {
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
          font-weight: 300;
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
          font-weight: 300;
        }
      }
    }
    & > .qna-create {
      margin-top: 1.45rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      & > button {
        padding: 0 12px;
        display: flex;

        justify-content: center;
        align-items: center;
        // width: 100
        height: 26px;
        border-radius: 19px;
        border: 1px solid ${Colors.White};
        background: transparent;

        color: ${Colors.White};
        font-weight: 400;
        font-size: 12px;
        font-family: "SUITE", sans-serif;
        gap: 6px;
      }
    }
  }
`;
