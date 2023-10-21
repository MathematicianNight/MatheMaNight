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
  /* width: 100%;
  height: 100%; */
  border-radius: 19px;
  z-index: 3;
  background: ${(props) =>
    props.likemodalopen
      ? "linear-gradient(180deg, #FFB904 0%, #F689FF 93.06%)"
      : "linear-gradient(180deg, #980e71 0%, #fb99df 51.89%, #d867ff 93.06%)"};
  & > .like-wrapper {
    z-index: 3;

    height: 100%;
    padding: 13px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;

    & > .like-heart {
      & > img {
        position: relative;
        margin-left: 15px;
        right: 35px;
      }
      & > span {
        position: relative; /* span을 절대 위치로 설정 */
        right: 59px;
        bottom: 10px;
        color: #f53a9f;
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }

    & > img {
      width: 50%;
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
    }
    & > .click {
      width: 85px;
      height: 74px;
    }
  }


  // 나중에 없어질수도.. 일단.. 임시..
  @media (max-height: 725px) {
    & > .like-wrapper {
      & > .like-heart {
        & > img {
          width: 40px;
          margin-left: 30px;
        }
        & > span {
          bottom: 8.5px;
          font-size: 11px;
        }
      }
      & > .title {
        font-size: 12px;
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
  }
  @media (max-height: 650px) {
    & > .like-wrapper {
      & > .like-heart {
        & > img {
          width: 34px;
          margin-left: 38px;
        }
        & > span {
          bottom: 8px;
          right: 55px;
          font-size: 10px;
        }
      }
      & > .title {
        font-size: 10px;
      }
      & > .unclick {
        width: 54px;
        height: 46px;
      }
      & > .click {
        width: 57px;
        height: 46px;
      }
    }
  }
`;

export default LikeContainer;
