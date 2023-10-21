import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const MapContainer = styled.div`
  box-sizing: border-box;
  border-radius: 17px;
  @media (min-height: 900px) {
    border-radius: 22px;
  }
  @media (max-width: 590px) {
    border-radius: 13px;
  }
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  width: 100%;
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  justify-self: stretch;
  align-self: stretch;
  & > .widget-background-image {
    width: 100%;
    height: 100%;
    ${({ isBlurred }) =>
      isBlurred
        ? `
    transform: scale(1.4);
    filter: blur(2.5px);
    transition: all 1.3s;
  `
        : `
    transform: scale(1.0);
    filter: none;
    transition: all 1.3s;
  `}
  }
  & > .here {
    border-radius: 17px; // 260~345이하: 13px / 345이상~425미만: 17 / 425이상: 20 
    @media (min-height: 900px) {
      border-radius: 22px;
    }
    @media (max-width: 590px) {
      border-radius: 13px;
    }
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
    opacity: ${({ isBlurred }) => isBlurred ? 1 : 0};
    ${({ isBlurred }) =>
      isBlurred
        ? `
    transform: scale(1.4);
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 1.3s;
  `
        : `
    transform: scale(1.0);
    background-color: transparent;
    transition: all 1.3s;
  `}
  }
  & > .map-apps-div {
    /* & {border: 1px solid red; box-sizing: border-box;} */
    position: absolute;
    top: 30px;
    left: 38px;
    right: 38px;
    opacity: ${({ isBlurred }) => isBlurred ? 1 : 0};
    transition: opacity 1.4s;
    display: flex;
    justify-content: space-around;
    & > img {
      /* border-radius: 12px; */    
      width: 62px;
      height: 62px;
      /* margin: 0 10px; */
      pointer-events: ${({ isBlurred }) => isBlurred ? 'auto' : 'none'};
      /* transition: transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out; */
      @keyframes iconEffect {
        0% {transform: translateY(0);}
        50% {transform: translateY(-12px);}
        100% {transform: translateY(0);}
      }
      &:hover {
        animation: iconEffect 0.7s ease-in-out;
        /* box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.7); */
      }
    }
  }
  & > .addr-copy-div {
    /* &, & * {border: 1px solid aqua;} */
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    font-size: 12px;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    opacity: ${({ isBlurred }) => isBlurred ? 1 : 0};
    transition: opacity 1.4s ease-in-out;
    & > img {
      pointer-events: ${({ isBlurred }) => isBlurred ? 'auto' : 'none'};
    }
  }
  @media (min-height: 900px) {
    & > .map-apps-div {
      top: 33px;
      left: 40px;
      right: 40px;
      & > img {
        width: 68px;
        height: 68px;
      }
    }
    & > .addr-copy-div {
      bottom: 33px;
      padding: 0 34px;
      font-size: 14px;
      & > img {
        width: 44px;
        margin-bottom: 2px;
      }
    }
  }
  @media (max-height: 795px) {
    & > .map-apps-div {
      top: 26px;
      left: 35px;
      right: 35px;
      & > img {
        width: 57px;
        height: 57px;
      }
    }
    & > .addr-copy-div {
      bottom: 26px;
      padding: 0 25px;
    }
  }
  @media (max-height: 725px) {
    & > .map-apps-div {
      top: 23px;
      left: 30px;
      right: 30px;
      & > img {
        width: 52px;
        height: 52px;
      }
    }
    & > .addr-copy-div {
      /* &, & * {border: 1px solid red; box-sizing: border-box;} */
      bottom: 23px;
      font-size: 10px;
      padding: 0 27px;
      & > img {
        width: 30px;
        margin-bottom: 2px;
      }
    }
  }
  @media (max-height: 650px) {
    & > .map-apps-div {
      top: 20px;
      left: 26px;
      right: 26px;
      & > img {
        width: 47px;
        height: 47px;
      }
    }
    & > .addr-copy-div {
      bottom: 20px;
      padding: 0 15px;
    }
  }
  @media (max-height: 590px) {
    & > .map-apps-div {
      top: 10px;
      left: 20px;
      right: 20px;
      & > img {
        width: 40px;
        height: 40px;
      }
    }
    & > .addr-copy-div {
      bottom: 10px;
      flex-direction: column;
    }
  }



`;

export default MapContainer;
