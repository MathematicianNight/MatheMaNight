import styled from "@emotion/styled";
import { Colors, Images } from "../../../utils/style";

export const MainpageContainer = styled.section`
  width: 100%;
  height: ${window.innerHeight}px;
  margin: 0 auto;

  color: #ffffff;
  // text-align: center;
  overflow: auto scroll;
  scroll-snap-type: y mandatory;

  .child {
    height: 100%;
    font-size: 2rem;
    min-height: ${window.innerHeight}px;
    // line-height: ${window.innerHeight}px;
    scroll-snap-align: start;
  }

  .QnA {
    // min-height: ${window.innerHeight}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
