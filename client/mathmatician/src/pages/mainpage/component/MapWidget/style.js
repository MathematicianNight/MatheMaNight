import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const MapContainer = styled.div`
  box-sizing: border-box;
  border-radius: 17px;
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
      display: inline-block;
      pointer-events: ${({ isBlurred }) => isBlurred ? 'auto' : 'none'};
    }
  }


  @media (min-width: 401px) {
    border-radius: 19px;
    & > .here {
      border-radius: 19px;
    }
    & > .map-apps-div {
      top: 30px;
      left: 38px;
      right: 38px;
      & > img {
        width: 68px;
        height: 68px;
      }
    }
    & > .addr-copy-div {
      bottom: 30px;
      left: 0;
      right: 0;
      font-size: 14px;
      padding: 0 28px;
      & > img {
        width: 42px;
        padding-bottom: 3px;
      }
    }
  }
  @media (max-width: 400px) {
    border-radius: 17px;
    & > .here {
      border-radius: 17px;
    }
    & > .map-apps-div {
      top: 30px;
      left: 38px;
      right: 38px;
      & > img {
        width: 60px;
        height: 60px;
      }
    }
    & > .addr-copy-div {
      padding: 0 33px;
      & > img {
        padding-bottom: 2px;
      }
    }
  }
  @media (max-width: 355px) {
    border-radius: 15px;
    & > .here {
      border-radius: 15px;
    }
    & > .map-apps-div {
      top: 26px;
      left: 33px;
      right: 33px;
      & > img {
        width: 55px;
        height: 55px;
      }
    }
    & > .addr-copy-div {
      bottom: 26px;
      padding: 0 20px;
    }
  }

  @media (max-width: 315px) {
    border-radius: 13px;
    & > .here {
      border-radius: 13px;
    }
    & > .map-apps-div {
      top: 14px;
      left: 28px;
      right: 28px;
      & > img {
        width: 44px;
        height: 44px;
      }
    }
    & > .addr-copy-div {
      font-size: 10px;
      margin-top: 10px;
      bottom: 14px;
      flex-direction: column;
      & > img {
        padding-top: 2px;
        width: 30px;
      }
    }
  }
  @media (max-height: 775px) {
    border-radius: 15px;
    & > .here {
      border-radius: 15px;
    }
    & > .map-apps-div {
      top: 26px;
      left: 34px;
      right: 34px;
      & > img {
        width: 52px;
        height: 52px;
      }
    }
    & > .addr-copy-div {
      font-size: 12px;
      bottom: 26px;
      padding: 0 18px;
      & > img {
        width: 35px;
        padding-bottom: 0px;
      }
    }
    @media (max-width: 355px) {
      border-radius: 13px;
      & > .here {
        border-radius: 13px;
      }
      & > .map-apps-div {
        top: 24px;
        left: 30px;
        right: 30px;
        & > img {
          width: 50px;
          height: 50px;
        }
      }
      & > .addr-copy-div {
        font-size: 10px;
        bottom: 24px;
        padding: 0 28px;
        & > img {
          width: 30px;
          padding-bottom: 2px;
        }
      }
    }
    @media (max-width: 315px) {
      & > .map-apps-div {
        top: 17px;
      }
      & > .addr-copy-div {
        bottom: 17px;
      }
    }
    @media (max-width: 305px) {
      & > .map-apps-div {
        top: 13px;
        left: 25px;
        right: 25px;
        & > img {
          width: 44px;
          height: 44px;
        }
      }
      & > .addr-copy-div {
        bottom: 13px;
      }
    }
  }
  @media (max-height: 650px) {
    @media (min-width: 355px) {
      border-radius: 15px;
      & > .here {
        border-radius: 15px;
      }
      & > .map-apps-div {
        top: 25px;
        left: 30px;
        right: 30px;
        & > img {
          width: 48px;
          height: 48px;
        }
      }
      & > .addr-copy-div {
        bottom: 25px;
        font-size: 10px;
        padding: 0 27px;
        & > img {
          width: 30px;
          padding-bottom: 2px;
        }
      }
    }
    @media (max-width: 316px) {
      border-radius: 13px;
      & > .here {
        border-radius: 13px;
      }
      & > .map-apps-div {
        top: 24px;
        left: 32px;
        right: 32px;
      }
      & > .addr-copy-div {
        bottom: 24px;
        flex-direction: row;
        & > img {
          padding-bottom: 2px;
        }
      }
    }
    @media (max-width: 306px) {
      border-radius: 13px;
      & > .here {
        border-radius: 13px;
      }
      & > .map-apps-div {
        top: 19px;
        left: 32px;
        right: 32px;
        & > img {
          width: 48px;
          height: 48px;
        }
      }
      & > .addr-copy-div {
        bottom: 19px;
        flex-direction: row;
        & > img {
          padding-bottom: 2px;
        }
        flex-direction: column;
      }
    }
    @media (max-width: 290px) {
      border-radius: 13px;
      & > .here {
        border-radius: 13px;
      }
      & > .map-apps-div {
        top: 15px;
        left: 30px;
        right: 30px;
        & > img {
          width: 44px;
          height: 44px;
        }
      }
      & > .addr-copy-div {
        bottom: 15px;
        flex-direction: row;
        & > img {
          padding-bottom: 2px;
        }
      }

      & > .addr-copy-div {
        flex-direction: column;
      }
    }
  }
  @media (max-height: 580px) {
    border-radius: 13px;
    & > .here {
      border-radius: 13px;
    }
    & > .map-apps-div {
      top: 12px;
      left: 24px;
      right: 24px;
      & > img {
        width: 40px;
        height: 40px;
      }
    }
    & > .addr-copy-div {
      font-size: 10px;
      bottom: 12px;
      flex-direction: column;
      padding: 0;
      & > img {
        padding-top: 2px;
        width: 30px;
      }
    }
  }



`;

export default MapContainer;
