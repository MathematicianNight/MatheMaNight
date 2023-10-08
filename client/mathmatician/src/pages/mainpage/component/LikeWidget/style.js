import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const LikeContainer = styled.section`
  border: 1px solid aqua; box-sizing: border-box;
  & > * {border: 1px solid red; box-sizing: border-box;}
  border-radius: 19px;
  background: linear-gradient(180deg, #980E71 0%, #FB99DF 51.89%, #D867FF 93.06%);
  display: flex;
  flex-direction: column;
  @media (max-width: 321px) { // 321 미만
    width: 95%;
    height: 95%;
  }
  @media (min-width: 321px) and (max-width: 391px) { // 321 이상 391 미만
    width: 99%;
    height: 99%;
  }
  @media (min-width: 391px) { // 391 이상
    width: 100%;
    height: 100%;
  } 
  & > div {
    /* background-image: url(${Images.heart_bubble});
    background-repeat: no-repeat;
    text-align: right; */
  }
`;

export default LikeContainer;