import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const MapContainer = styled.div`
  /* &, & * {border: 1px solid red;} */
  box-sizing: border-box;
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  width: 100%;
  height: 100%;
  border-radius: 17px; // 260~345이하: 13px  / 345이상~425미만: 17 / 425이상: 20 
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  & > .widget-background {
    width: 100%;
    height: auto;
    vertical-align: bottom;
    & {
      ${({ isBlurred }) => (isBlurred ? `
      transform: scale(1.38);
      background-color: rgba(30, 30, 30, 0.6);
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
  & > .map-apps-div { // 기본은 345px 이상 425px 미만
    /* &, & * {border: 1px solid red;} */
    box-sizing: border-box;
    position: absolute;
    top: 19%;
    left: 12%; // 13% / 12% / 10%
    right: 12%; // 13% / 12% / 10%
    opacity: ${({ isBlurred }) => isBlurred ? 1 : 0};
    transition: opacity 1.4s ease-in-out;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    & > img {
      vertical-align: bottom;
      border-radius: 12px;
      width: 25%;
      margin: 0 4.5%;
      pointer-events: ${({ isBlurred }) => isBlurred ? 'auto' : 'none'};
      transition: transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out;
      @keyframes iconEffect {
        0% {transform: translateY(0);}
        50% {transform: translateY(-11px);}
        100% {transform: translateY(0);}
      }
      &:hover {
        animation: iconEffect 0.6s ease-in-out;
        box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.7); // ***** 반응형 *****
      }
    }
  }
  & > .addr-copy-div { // 기본은 345px 이상 425px 미만
    /* &, & * {border: 1px solid aqua;} */
    position: absolute;
    bottom: 20%;
    left: 0;
    right: 0;
    /* left: 5%; // ? / 8 / /? */
    /* right: 6%; */
    font-size: 12px; // ? / 12 / ?
    display: flex; 
    justify-content: center;
    align-items: center;
    opacity: ${({ isBlurred }) => isBlurred ? 1 : 0};
    transition: opacity 1.4s ease-in-out;
    & > span {
      /* float: left; */
      margin-right: 5%;
    }
    & > .addr-copy-button {
      /* float: right; */
      /* border: 1px solid red; */
      /* margin-right: 10%; */
      /* margin: -3px 0 0 5px; */
      color: ${Colors.SpringGreen};
      pointer-events: ${({ isBlurred }) => isBlurred ? 'auto' : 'none'};
      /* vertical-align: middle; */
      & > img {
        margin-right: 3px;
        vertical-align: middle;
        /* vertical-align: top; */
        /* width: 30%; */
        /* margin-right: 3%; */
        /* vertical-align: bottom; */
      }
      & > span {
        vertical-align: middle;
      }
    }
  }
`;

export default MapContainer;