import styled from "@emotion/styled";
import { Colors, Images } from "../../../utils/style";

const AboutusContainer = styled.section`
  background-image: url(${Images.aboutus});
  // background-repeat: no-repeat;
  background-size: cover;
  background-position: center top; // 이미지를 상단에 위치시킴
  overflow: auto;
  // width: 100%;
  // height: 2641px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  & > .aboutus-wrapper {
    max-width: 420px;

    & > .aboutus-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 38px 0 21px 0;
      text-align: center;
      & > .frendlogo {
        padding: 19px 12px 0 0;
        width: 77%;
        height: 236px;
      }
    }
    & > .aboutus-detail {
      text-align: center;
      padding: 10px 45px;
    }
    & > .aboutus-obj {
      margin: 91px 0 70px 0;
      width: 100%;
      height: 50px;
      & > .obj1 {
        float: right;
        padding-right: 20px;
      }
    }

    & > .aboutus-our-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 55px;
      & > .hyelee {
        width: 206px;
        height: 256px;
        padding-right: 30px;
      }
      & > .minjeong {
        width: 259px;
        height: 256px;
        flex-shrink: 0;
      }
      & > .suhyeon {
        width: 264px;
        height: 256px;
        padding-right: 90px;
        flex-shrink: 0;
      }
    }
  }
`;

export default AboutusContainer;
