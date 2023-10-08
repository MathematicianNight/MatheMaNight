import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const LikeContainer = styled.section`
  /* border: 1px solid aqua; */
  &, & > * {box-sizing: border-box;}
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  margin-right: 4.5px;
  @media (max-width: 321px) { // 321 미만
    width: 92%;
    height: 89%;
  }
  @media (min-width: 321px) and (max-width: 391px) { // 321 이상 391 미만
    width: 93%;
    height: 91%;
  }
  @media (min-width: 391px) { // 391 이상
    width: 94%;
    height: 93%;
  }

  border-radius: 19px;
  background: linear-gradient(180deg, #980E71 0%, #FB99DF 51.89%, #D867FF 93.06%);


`;

export default LikeContainer;