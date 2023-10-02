import styled from "@emotion/styled";
import { Images, Colors } from "../../../../util/style";

const MapContainer = styled.div`
  /* border: 1px solid red; // 나중에 삭제 */
  width: 91%; // ***** 반응형 *****
  height: auto;
  border-radius: 7%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  /* margin-bottom: 3.5%; */

  @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  //=======================================

  & > .map-app-background {
    // 이미지 밑에 공간 뜨는거 둘 중 하나로 해결? 굳이...?
    width: 100%;
    height: auto;
    & {
      ${({ isBlurred }) => (isBlurred ? `
      transform: scale(1.38);
      background-color: rgba(30, 30, 30, 0.60);
      filter: blur(2.55px); // ***** 반응형 *****
      transition: all 1s;
    ` : `
      transform: scale(1.0);
      background-color: transparent;
      filter: none;
      transition: all 1s;
    `)}
    }
  }

  //=======================================

  & > .open-map-app {
    /* border: 1px solid orange; // 나중에 삭제 */
    /* box-sizing: border-box; // 나중에 삭제 */
    position: absolute;
    top: 19%; // ***** 반응형 *****
    bottom: 39%;
    left: 12%;
    right: 12%;
    opacity: ${({ isBlurred }) => isBlurred ? 1 : 0};
    transition: opacity 1.4s ease-in-out;
    display: flex; // 안에 자식 요소 위해서
    justify-content: space-around; // space-between?
    & > img {
      // 이미지 밑에 공간 뜨는거 해결...?
      /* border: 1px solid aqua; // 나중에 삭제 */
      /* border-radius: 20%; // ***** 반응형 ***** */
      margin: 0 4.3%;
      cursor: pointer; // 나중에 변경
      pointer-events: ${({ isBlurred }) => isBlurred ? 'auto' : 'none'};
      transition: transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out;
      // 효과 1: pc에서는 호버 및 클릭, 모바일에서는 클릭 시 아이콘이 잠깐 위로 올라갔다 내려옴
      @keyframes iconEffect {
        0% {transform: translateY(0);}
        50% {transform: translateY(-11px);} // ***** 반응형 *****
        100% {transform: translateY(0);}
      }
      &:hover {
        animation: iconEffect 0.6s ease-in-out;
        box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.7); // ***** 반응형 *****
      }
    }
  }

  //----------------------------------------------------

  & > .copy-addr {
    /* border: 1px solid blue; // 나중에 삭제 */
    /* box-sizing: border-box; // 나중에 삭제 */
    position: absolute;
    // width: 86%; height: 20%; 둘 다 없어야 하는거 맞음
    top: 62%; // ***** 반응형 *****
    bottom: 19%;
    left: 6.3%;
    right: 6.3%;
    opacity: ${({ isBlurred }) => isBlurred ? 1 : 0};
    transition: opacity 1.4s ease-in-out;
    display: flex; // 안에 자식 요소 위해서
    align-items: flex-end;// 없어도 되긴 함
    justify-content: space-around; // around?
    font-family: "SUITE", sans-serif; // 여기서부턴 꾸미는거
    font-size: 10px; // ***** 반응형 ***** -> 아 왤케 안먹냐 ㅠ
    color: ${Colors.white};
    & > .copy-addr-button {
      color: ${Colors.springGreen};
      pointer-events: ${({ isBlurred }) => isBlurred ? 'auto' : 'none'};
      cursor: pointer; // 나중에 변경?
      & > img {
        width: 30%;
        margin-right: 3%;
        vertical-align: top;
      }
    }
  //=======================================
  }
`;

export default MapContainer;