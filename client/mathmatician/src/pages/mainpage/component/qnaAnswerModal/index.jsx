import React, { useState, useEffect } from "react";

import { AnswerModalContainer } from "./style";
import { Images } from "../../../../utils/style";

const Index = ({ handleCloseModal, title }) => {
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setPasswordCorrect] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleConfirm = () => {
    if (password === "1111") {
      setPasswordCorrect(true);
    } else {
      setPasswordCorrect(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.value.length <= 120) {
      setAnswer(e.target.value);
    }
  };
  return (
    <AnswerModalContainer>
      <div className="ModalContainer">
        {!isPasswordCorrect ? (
          <div className="modal-content-false">
            <div className="modal-content-wrapper">
              <p className="title">{title}</p>
              <p className="sub-title">질문에 대한 답변을 작성하시겠습니까?</p>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-group">
              <div className="button centerborder" onClick={handleCloseModal}>
                취소
              </div>
              <div className="button" onClick={handleConfirm}>
                확인
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-content-true">
            <div className="modal-content-wrapper">
              <p className="title">{title}</p>
              <p className="sub-title">질문에 대한 답변을 작성해 주세요.</p>
              <div className="textarea-wrapper">
                <textarea
                  type="text"
                  placeholder="120자 이내로 작성해주세요"
                  value={answer}
                  onChange={handleChange}
                />{" "}
              </div>
            </div>
            <div className="button-group">
              <div className="button centerborder" onClick={handleCloseModal}>
                취소
              </div>
              <div className="button" onClick={handleConfirm}>
                확인
              </div>
            </div>
          </div>
        )}
      </div>
    </AnswerModalContainer>
  );
};

export default Index;
