import React, { useState, useEffect } from "react";

import { CreateModalContainer } from "../qnaCreateModal/style";
import { Images } from "../../../../util/style";

const Index = ({ handleCloseModal }) => {
  const [text, setText] = useState("");

  // @definition 입력 값이 25자 이하인 경우에만 상태 업데이트
  const handleChange = (e) => {
    if (e.target.value.length <= 25) {
      setText(e.target.value);
    }
  };

  return (
    <CreateModalContainer>
      <div className="ModalContainer">
        <div className="modal-close-div" onClick={handleCloseModal}>
          <img
            src={Images.cancle_button}
            alt="cancle"
            className="modal-close"
          />
        </div>
        <div className="modal-flex">
          <img
            src={Images.question_icon}
            alt="Question Icon"
            className="modal-img"
          />
          <h1 className="modal-heading">우린, 에게 물어보세요</h1>
          <p className="modal-description">
            질문은 익명으로 기재되며, <br></br>작성 완료 시 삭제가 불가능하니
            <br></br>
            신중하게 작성해 주시기 바랍니다.
          </p>
          <input
            type="text"
            placeholder="25자 이내로 작성 가능합니다."
            className="modal-input"
            value={text}
            onChange={handleChange}
          />
          <button className="modal-button" onClick={handleCloseModal}>
            완료
          </button>
        </div>
      </div>
    </CreateModalContainer>
  );
};

export default Index;
