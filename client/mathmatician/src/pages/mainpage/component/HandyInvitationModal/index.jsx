import { useState, useEffect } from "react";
import { Images, Colors } from "../../../../utils/style";
import ModalContainer from "./style";

const HandyInvitationModal = ({ closeModal }) => {
  return (
    <ModalContainer>
      <div className="modal-wrapper">
        <img 
          className="modal-close-button"
          src={Images.cancel_button_white}
          alt="modal close button icon"
          onClick={closeModal}
        />
        <div className="modal-content">
          <img 
            src={Images.handy_invitation}
            alt="handy invitation image"
          />
        </div>
        <p className="modal-description">
          <span>&#62; 길게 누른 후 저장&#40;다운로드&#41; 하세요.</span>
          <span>&#62; 우측 상단의 X 버튼으로 닫을 수 있습니다.</span>
        </p>
      </div>
    </ModalContainer>
  );
}

export default HandyInvitationModal;