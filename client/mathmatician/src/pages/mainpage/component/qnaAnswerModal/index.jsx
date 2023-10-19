import React, { useState, useEffect } from 'react';

import { AnswerModalContainer } from './style';
import { Images } from '../../../../utils/style';
import axios from 'axios';

const Index = (props) => {
  const { handleCloseModal, title, questionindex } = props;
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setPasswordCorrect] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleConfirm = () => {
    if (password === '1111') {
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

  const createAnswer = () => {
    // const apiUrl = "http://13.124.51.51:4000/question/answer";
    const apiUrl = 'https://api.mathnight.site/question/answer';

    const questionData = {
      anony_num: questionindex,
      answer: answer,
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
              <div className="button" onClick={handleConfirm}>
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
