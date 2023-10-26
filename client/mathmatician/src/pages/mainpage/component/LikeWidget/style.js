import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const LikeContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-radius: 19px;
  z-index: 3;
  background: ${(props) =>
    props.likemodalopen
      ? "linear-gradient(180deg, #FFB904 0%, #F689FF 93.06%)"
      : "linear-gradient(180deg, #980e71 0%, #fb99df 51.89%, #d867ff 93.06%)"};
  & > .like-wrapper {
    // 775 이상 400 미만 355 이상
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 0 15px 0;
    & > .like-heart {
      align-self: flex-start;
      position: relative;
      margin-left: 15px;
      & > img {
        width: 44px;
      }
      & > span {
        position: absolute;
        top: 1.5px;
        left: 18px;
        color: #f53a9f;
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
    & > .heart-image {
    }
    & > .title {
      font-family: "PyeongChangPeace", sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
    & > .unclick {
      width: 82px;
      height: 74px;
      margin-top: 1px;
    }
    & > .click {
      width: 85px;
      height: 74px;
      margin-top: 1px;
    }

    @media (min-height: 775px) and (min-width: 400px) {
      // 775 이상 400 이상
      padding: 15px 0 15px 0;
      & > .like-heart {
        margin-left: 15px;
        & > img {
          width: 51px;
        }
        & > span {
          font-size: 13px;
          top: 3px;
          left: 21px;
        }
      }
      & > .title {
        font-size: 16px;
      }
      & > .unclick {
        width: 87px;
        height: 79px;
      }
      & > .click {
        width: 90px;
        height: 79px;
      }
    }
    @media (min-height: 775px) and (max-width: 355px) {
      // 775 이상 355 미만
      padding: 12px 0 12px 0;
      & > .like-heart {
        margin-left: 12px;
      }
      & > .title {
        font-size: 13px;
      }
      & > .unclick {
        width: 71px;
        height: 63px;
      }
      & > .click {
        width: 74px;
        height: 63px;
      }
    }
    @media (min-height: 775px) and (max-width: 315px) {
      // 775 이상 315 미만
      padding: 11px 0 11px 0;
      & > .like-heart {
        margin-left: 11px;
        & > img {
          width: 38px;
        }
        & > span {
          font-size: 10px;
          top: 1.5px;
          left: 15.5px;
        }
      }
      & > .title {
        font-size: 11px;
      }
      & > .unclick {
        width: 60px;
        height: 52px;
      }
      & > .click {
        width: 63px;
        height: 52px;
      }
    }

    @media (max-height: 775px) {
      // 775 미만 355 이상
      padding: 12px 0 12px 0;
      & > .like-heart {
        margin-left: 12px;
      }
      & > .title {
        font-size: 14px;
      }
      & > .unclick {
        width: 71px;
        height: 63px;
        margin-top: 2px;
      }
      & > .click {
        width: 74px;
        height: 63px;
        margin-top: 2px;
      }
      @media (max-width: 355px) {
        // 775 미만 355 미만
        & > .like-heart {
          & > img {
            width: 41px;
          }
          & > span {
            font-size: 11px;
            top: 2px;
            left: 17px;
          }
        }
        & > .title {
          font-size: 13px;
        }
        & > .unclick {
          width: 65px;
          height: 57px;
        }
        & > .click {
          width: 68px;
          height: 57px;
        }
      }
      @media (max-width: 305px) {
        // 775 미만 305 미만
        padding: 10px 0 10px 0;
        & > .like-heart {
          margin-left: 10px;
          & > img {
            width: 38px;
          }
          & > span {
            font-size: 10px;
            top: 1.5px;
            left: 15px;
          }
        }
        & > .title {
          font-size: 11px;
        }
        & > .unclick {
          width: 60px;
          height: 52px;
        }
        & > .click {
          width: 63px;
          height: 52px;
        }
      }
    }

    @media (max-height: 650px) {
      // 650 미만 305 이상
      & > .like-heart {
        & > img {
          width: 41px;
        }
        & > span {
          font-size: 11px;
          top: 1px;
          left: 17px;
        }
      }
      & > .title {
        font-size: 13px;
      }
      & > .unclick {
        width: 65px;
        height: 57px;
      }
      & > .click {
        width: 68px;
        height: 57px;
      }
      @media (max-width: 305px) {
        // 650 미만 305 미만
        padding: 11px 0 11px 0;
        & > .like-heart {
          margin-left: 11px;
          & > img {
            width: 39px;
          }
          & > span {
            font-size: 10px;
            top: 1.5px;
            left: 15.5px;
          }
        }
        & > .title {
          font-size: 11px;
        }
        & > .unclick {
          width: 60px;
          height: 52px;
        }
        & > .click {
          width: 63px;
          height: 52px;
        }
      }
    }
    @media (max-height: 580px) {
      // 580 미만
      padding: 10px 0 10px 0;
      & > .like-heart {
        margin-left: 10px;
        & > img {
          width: 36px;
        }
        & > span {
          font-size: 10px;
          top: 1px;
          left: 14px;
        }
      }
      & > .title {
        font-size: 10px;
      }
      & > .unclick {
        width: 56px;
        height: 48px;
      }
      & > .click {
        width: 59px;
        height: 48px;
      }
    }
  }
`;

export default LikeContainer;
