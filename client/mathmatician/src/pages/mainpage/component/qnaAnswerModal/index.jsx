import React, { useState, useEffect } from "react";

import { AnswerModalContainer } from "./style";
import { Images } from "../../../../utils/style";
import axios from "axios";
import { Api } from "../../../../utils/api";

const Index = (props) => {
  const { handleCloseModal, title, questionindex, getQnaData } = props;
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setPasswordCorrect] = useState(false);
  const [answer, setAnswer] = useState("");

  // const handleConfirm = () => {
  //   if (password === "1111") {
  //     setPasswordCorrect(true);
  //   } else {
  //     setPasswordCorrect(false);
  //   }
  // };

  const handleChange = (e) => {
    if (e.target.value.length <= 120) {
      setAnswer(e.target.value);
    }
  };

  const createAnswer = () => {
    const questionData = {
      anony_num: questionindex,
      answer: answer,
    };
    axios
      .post(Api.QnaAnswer, questionData)
      .then((response) => {
        getQnaData();
      })
      .catch((error) => {
        console.log(error);
      });
    handleCloseModal();
  };

  const passwordCheck = () => {
    const passwordData = {
      password: password,
    };
    axios.post(Api.Password, passwordData).then((response) => {
      if (response.data.success) {
        setPasswordCorrect(true);
      } else {
        setPasswordCorrect(false);
      }
    });
  };

  return (
    <AnswerModalContainer>
      <div className="ModalContainer">
        {!isPasswordCorrect ? (
          <div className="modal-content-false">
            <div className="modal-content-wrapper">
              <p className="title">답변 {title}하기</p>
              <p className="sub-title">
                질문에 대한 답변을 {title}하시겠습니까?
              </p>
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
              <div className="button" onClick={passwordCheck}>
                확인
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-content-true">
            <div className="modal-content-wrapper">
              <p className="title">답변 {title}하기</p>
              <p className="sub-title">질문에 대한 답변을 작성해 주세요.</p>
              <div className="textarea-wrapper">
                <textarea
                  type="text"
                  placeholder="120자 이내로 작성해주세요"
                  value={answer}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="button-group">
              <div className="button centerborder" onClick={handleCloseModal}>
                취소
              </div>
              <div className="button" onClick={createAnswer}>
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
