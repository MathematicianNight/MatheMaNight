import { useState, useEffect } from "react";
import ModalContainer from "./style";
import { Images, Colors } from "../../../../utils/style";

const HandyInvitationModal = ({ closeModal }) => {
  return (
    <ModalContainer>
      이게 모달
      <button onClick={closeModal}>이거누를때만닫힘</button>
    </ModalContainer>
  );
}

export default HandyInvitationModal;