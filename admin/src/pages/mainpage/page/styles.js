import styled from "@emotion/styled";
import { Images, Colors } from "../../../utils/style";
import "../../../assets/fonts/fonts.css";

const MainpageContainer = styled.section`
  background-image: url(${Images.background_fix});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  // 페이지 5: 질문과 답변
  .mainpage-qna {
    // 원래 .child 였던게 .mainpage-qna로 바뀌었고, 거기 들어갔던 css 일단 그대로 다시 옮김
    height: 100%;
    width: 100%;
    // min-height: ${window.innerHeight}px;
    // line-height: ${window.innerHeight}px;
    // scroll-snap-align: start;
    & > .QnA {
      height: 100%;
      min-height: ${window.innerHeight}px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
    }
  }
`;

export default MainpageContainer;
