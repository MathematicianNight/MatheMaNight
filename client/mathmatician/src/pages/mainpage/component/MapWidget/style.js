import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const MapContainer = styled.div`
  /* border: 1px solid red; */ // 775 이상 400 미만 355 이상
  box-sizing: border-box;
  border-radius: 17px;
  overflow: hidden;
  position: relative;
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  justify-self: stretch;
  align-self: stretch;
  & > .widget-background-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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
    border: 3px solid aqua;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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
    position: absolute;
    top: 32px;
    left: 38px;
    right: 38px;
    opacity: ${({ isBlurred }) => isBlurred ? 1 : 0};
    transition: opacity 1.4s;
    display: flex;
    justify-content: space-around;
    & > img {
      width: 60px;
      height: 60px;
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
    position: absolute;
    bottom: 32px;
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
      display: inline-block;
      pointer-events: ${({ isBlurred }) => isBlurred ? 'auto' : 'none'};
    }
  }

  @media (min-height: 775px) and (min-width: 400px) { // 775 이상 400 이상
    // border: 1px solid red;
    // border-radius: 17px;
    & > .map-apps-div {
      top: 32px;
      left: 40px;
      right: 40px;
      & > img {
        width: 64px;
        height: 64px;
      }
    }
    & > .addr-copy-div {
      // &, & * {border: 1px solid red; box-sizing: border-box;}
      bottom: 32px;
      padding: 0 31px;
      font-size: 14px;
      & > img {
        width: 41px;
        margin-top: -2px;
      }
    }
  }
  @media (min-height: 775px) and (max-width: 355px) { // 775 이상 355 미만
    // border: 1px solid red;
    border-radius: 14px;
    & > .map-apps-div {
      top: 27px;
      left: 36px;
      right: 36px;
      & > img {
        width: 52px;
        height: 52px;
      }
    }
    & > .addr-copy-div {
      // &, & * {border: 1px solid red; box-sizing: border-box;}
      bottom: 27px;
      padding: 0 20px;
    }
  }
  @media (min-height: 775px) and (max-width: 315px) { // 775 이상 315 미만
    // border: 1px solid red;
    border-radius: 12px;
    & > .map-apps-div {
      top: 21px;
      left: 30px;
      right: 30px;
      & > img {
        width: 43px;
        height: 43px;
      }
    }
    & > .addr-copy-div {
      // &, & * {border: 1px solid red; box-sizing: border-box;}
      bottom: 21px;
      padding: 0 16px;
      font-size: 10px;
      & > img {
        width: 31px;
        margin-top: -2px;
      }
    }
  }

  @media (max-height: 775px) { // 775 미만 355 이상
    // border: 1px solid red;
    border-radius: 15px;
    & > .map-apps-div {
      top: 27px;
      left: 35px;
      right: 35px;
      & > img {
        width: 52px;
        height: 52px;
      }
    }
    & > .addr-copy-div {
      // &, & * {border: 1px solid red; box-sizing: border-box;}
      bottom: 27px;
      padding: 0 28px;
      font-size: 11px;
      & > img {
        width: 33px;
        margin-top: -2px;
      }
    }
    @media (max-width: 355px) { // 775 미만 355 미만
      // border: 1px solid red;
      & > .map-apps-div {
        top: 25px;
        left: 32px;
        right: 32px;
        & > img {
          width: 48px;
          height: 48px;
        }
      }
      & > .addr-copy-div {
        // &, & * {border: 1px solid red; box-sizing: border-box;}
        padding: 0 19px;
      }
    }
    @media (max-width: 305px) { // 775 미만 305 미만
      // border: 1px solid red;
      border-radius: 12px;
      & > .map-apps-div {
        top: 21px;
        left: 28px;
        right: 28px;
        & > img {
          width: 43px;
          height: 43px;
        }
      }
      & > .addr-copy-div {
        bottom: 21px;
        padding: 0 14px;
        font-size: 10px;
        & > img {
          width: 31px;
          margin-top: -2px;
        }
      }
    }
  }

  @media (max-height: 650px) { // 650 미만 305 이상
    // border: 1px solid red;
    border-radius: 13px;
    & > .map-apps-div {
      top: 26px;
      left: 30px;
      right: 30px;
      & > img {
        width: 48px;
        height: 48px;
      }
    }
    & > .addr-copy-div {
      // &, & * {border: 1px solid red; box-sizing: border-box;}
      bottom: 26px;
      padding: 0 19px;
    }
    @media (max-width: 305px) { // 650 미만 305 미만
      // border: 1px solid red;
      border-radius: 12px;
      & > .map-apps-div {
        top: 23px;
        left: 28px;
        right: 28px;
        & > img {
          width: 44px;
          height: 44px;
        }
      }
      & > .addr-copy-div {
        bottom: 23px;
        padding: 0 18px;
        font-size: 10px;
        & > img {
          width: 31px;
          margin-top: -2px;
        }
      }
    }
  }

  @media (max-height: 580px) { // 580 미만
    // border: 1px solid red;
    border-radius: 12px;
    & > .map-apps-div {
      top: 15px;
      left: 26px;
      right: 26px;
      & > img {
        width: 40px;
        height: 40px;
      }
    }
    & > .addr-copy-div {
      bottom: 15px;
      padding: 0;
      font-size: 10px;
      flex-direction: column;
      & > img {
        width: 30px;
        margin-top: 2px;
      }
    }
  }

`;

export default MapContainer;
