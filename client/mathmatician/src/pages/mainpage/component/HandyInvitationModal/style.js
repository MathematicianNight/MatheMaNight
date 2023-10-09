import styled from "@emotion/styled";
import "../../../../assets/fonts/fonts.css";
import { Images, Colors } from "../../../../utils/style";

const ModalContainer = styled.div`
  border: 3px solid red;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export default ModalContainer;