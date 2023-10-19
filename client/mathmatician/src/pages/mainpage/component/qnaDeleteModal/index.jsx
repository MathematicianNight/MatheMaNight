import React, { useState } from "react";

import { AnswerModalContainer } from "./style";
import axios from "axios";

const Index = (props) => {
  const { handleCloseModal, questionindex } = props;
  const [password, setPassword] = useState("");
  console.log(questionindex);
  const deleteAnswer = () => {
    const apiUrl = "http://13.124.51.51:4000/question/delete";
    // const apiUrl = "https://api.mathnight.site/question/delete";

    const questionData = {
      anony_num: questionindex,
    };
    axios
      .post(apiUrl, questionData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    handleCloseModal();
  };

  return (
    <AnswerModalContainer>
      <div className="ModalContainer">
        <div className="modal-content-false">
          <div className="modal-content-wrapper">
            <p className="title">질문 삭제하기</p>
            <p className="sub-title">질문을 삭제하시겠습니까?</p>
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
            <div className="button" onClick={deleteAnswer}>
              확인
            </div>
          </div>
        </div>
      </div>
    </AnswerModalContainer>
  );
};

export default Index;
