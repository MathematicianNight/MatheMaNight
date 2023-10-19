import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const LikeContainer = styled.section`
  &,
  & * {
    box-sizing: border-box;
  }
  width: 100%;
  height: 100%;
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
`;

export default LikeContainer;
