import styled from "@emotion/styled";
import { Images, Colors } from "../../../util/style";

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