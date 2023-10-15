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
    }
    & > .aboutus-obj {
      margin: 71px 0 80px 0;
      display: flex;

      display: block;
      padding-right: 46px;
    }
  }
`;

export default AboutusContainer;
