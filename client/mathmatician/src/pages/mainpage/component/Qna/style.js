import styled from "@emotion/styled";
import { Colors, Images } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const maxwidth = "375";

export const QnaContainer = styled.div`
  @media (max-width: 499px) { // 기존의 css를 그대로 옮김
    color: ${Colors.White};
    font-family: "SUITE", sans-serif;
    width: 100%;
    // height: ${window.innerHeight}px;
    height: 100%;
    touch-action: pinch-zoom;
  }
  @media (min-width: 499px) { // 추가적으로 모바일 세로를 벗어났을 때(window.innerWidth >= 500)의 처리
    color: ${Colors.White};
    font-family: "SUITE", sans-serif;
    width: 100%;
    height: ${({ prevInnerHeight }) => prevInnerHeight}px;
    touch-action: pinch-zoom;
  }

  .bg-animation-on {
    // width: 100vh;
    background-image: url(${Images.star_qna_group1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .bg-animation-off {
    // width: 100vh;
    // height: 100%;
    background-image: url(${Images.star_qna_group2});
    // background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
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
    background-position: center center;
    // transition: background ease-in-out 0.4s;
  }
  .qna-off {
    background-image: url(${Images.star_qna_group2});
    background-repeat: no-repeat;
    // position: fixed;
    // top: 0;
    // bottom: 0;
    background-position: center center;
    background-size: cover; /* 배경 이미지를 컨테이너에 맞게 조절 */
    // transition: background ease-in-out 0.1s;
  }

  & > .qna-wrapper {
    padding: 0 34px;
    // height: ${window.innerHeight}px;
    height: 100%;

    // width: ${window.innerWidth}px;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;

    // @media (max-width: ${maxwidth}px) {
    //   padding-top: ${window.innerHeight % 40}px;
    // }
    // @media (min-width: 500px) {
    //   margin-top: ${window.innerHeight % 40}px;
    // }

    & > .qna-title {
      color: ${Colors.White};
      font-size: 25px;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 45px;
      padding-top: ${window.innerHeight / 7}px;
      transition: all 0.5s;

      @media (max-height: 600px) {
        padding-top: 0px;
        margin-bottom: 30px;
        font-size: 22px;
      }
      @media (min-height: 601px) and (max-height: 666px) {
        padding-top: ${window.innerHeight / 20}px;
        margin-bottom: 30px;
        font-size: 22px;
      }
      @media (min-height: 667px) and (max-height: 720px) {
        padding-top: ${window.innerHeight / 15}px;
      }
      @media (min-height: 721px) and (max-height: 799px) {
        padding-top: ${window.innerHeight / 9}px;
      }
      @media (min-height: 801px) and (max-height: 900px) {
        padding-top: ${window.innerHeight / 7}px;
      }
      @media (min-height: 901px) and (max-height: 1000px) {
        padding-top: ${window.innerHeight / 6}px;
      }
      @media (min-height: 1001px) and (max-height: 1200px) {
        padding-top: ${window.innerHeight / 5}px;
      }
      @media (min-height: 1201px) {
        padding-top: ${window.innerHeight / 4}px;
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
        font-size: 12px;
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
      margin-bottom: 9px;

      & > .qna-content-div {
        padding: 0 15px;
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
        padding: 13px 15px 17px 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        transition: 0.3s;
        gap: 10.25px;
        @media (max-width: ${maxwidth}px) {
          padding: 10px 15px 14px 15px;
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
