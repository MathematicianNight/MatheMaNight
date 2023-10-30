import styled from "@emotion/styled";
import { Colors, Images } from "../../../utils/style";
import "../../../assets/fonts/fonts.css";

const AboutusContainer = styled.section`
  background-image: url(${Images.aboutus});
  // background-repeat: no-repeat;
  background-size: cover;
  background-position: center top; // 이미지를 상단에 위치시킴
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  & > .aboutus-wrapper {
    max-width: 420px;

    & > .backbutton {
      padding: 20px 0 0 22px;
    }

    & > .aboutus-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 38px 0 21px 0;
      text-align: center;

      & > .frendlogo {
        padding: 19px 0 5px 0;
        width: 361px;
        height: 244.427px;

        @media (max-width: ${370}px) {
          width: 90%;
        }
      }
    }
    & > .aboutus-title {
      color: #000;

      text-align: center;
      font-family: "PyeongChangPeace";
      font-size: 30px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      margin-bottom: 14px;
    }
    & > .aboutus-detail {
      text-align: justify;
      padding: 10px 45px 0px 45px;
      font-family: SUITE;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 50px;
    }

    & > .aboutus-line {
      text-align: center;
      margin-bottom: 65px;
    }
    & > .aboutus-obj {
      margin: 0 0 15px 0;
      width: 100%;
      height: 50px;
      & > .obj1 {
        width: 130px;
        height: 40.5px;
        float: right;
        padding-right: 11px;
        position: relative;
        top: -15px;
      }
    }
    & > .object-wrapper {
      max-width: 420px;
      width: ${window.innerWidth}px;
      position: absolute;
      & > .object2 {
        float: right;
        padding: 60px 10px 0 0;
        // width: 15px;
        height: 400px;
      }
      & > .object3 {
        padding: 920px 0 0 10px;
      }
    }

    & > .aboutus-our-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 55px;
      & > .hyelee {
        // width: 206px;
        height: 256px;
        padding-right: 30px;
      }
      & > .minjeong {
        // width: 259px;
        height: 256px;
        flex-shrink: 0;
      }
      & > .suhyeon {
        // width: 264px;
        height: 256px;
        padding-right: 40px;
        flex-shrink: 0;
      }
      & > .haneul {
        // width: 281.66px;
        height: 256px;
        padding-left: 10px;
        flex-shrink: 0;
        margin-bottom: 70px;
      }
    }
    & > .aboutus-more {
      width: 100%;
      margin-bottom: 74px;
      text-align: center;
      & > .object4 {
      }
    }
    & > .aboutus-tellmore {
      margin: 34px 41px 100px 41px;
      font-family: SUITE;
      display: flex;
      flex-direction: column;
      gap: 30px;
      text-align: justify;
      font-family: SUITE;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      & > .tellme {
        display: flex;
        flex-direction: row;
        & > div > span {
          color: ${Colors.White};
        }
      }
    }
  }
`;

export default AboutusContainer;
