import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

// 현재 작성되어 있는 css 모든 속성은 반응형 위해 작성한것이니 지켜주시면 감사하겠습니다 ....!
// 참고로 모든 요소에 box-sizing 적용돼서 패딩, 보더까지 width/height 속성에 포함되니 이점 참고해주세요!
const LikeContainer = styled.section`
  /* &, & * {border: 1px solid red;} */
  box-sizing: border-box;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  width: 100%;
  height: 100%;
  /* @media (max-width: 321px) { // 321 미만
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
  } */

  border-radius: 15%;
  background: linear-gradient(180deg, #980E71 0%, #FB99DF 51.89%, #D867FF 93.06%);



`;

export default LikeContainer;