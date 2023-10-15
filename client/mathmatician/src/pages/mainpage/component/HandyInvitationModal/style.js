import styled from "@emotion/styled";
import "../../../../assets/fonts/fonts.css";
import { Images, Colors } from "../../../../utils/style";

const ModalContainer = styled.div`
  border: 1.5px solid red;
  &, & > * {box-sizing: border-box;}
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);

`;

export default ModalContainer;