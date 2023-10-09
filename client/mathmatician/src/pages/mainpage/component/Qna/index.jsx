import React, { useState, useEffect } from "react";

import { QnaContainer } from "../Qna/style";
import { Images } from "../../../../utils/style";
import useQnaData from "../../hooks/useQnaData";
import QnaCreateModal from "../qnaCreateModal/index";
import AnswerModal from "../qnaAnswerModal/index";
import DeleteModal from "../qnaDeleteModal/index";

const Index = () => {
  //@definition 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const { qnaData, loading } = useQnaData(currentPage);
  const totalPages = 3;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState(null);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  // @definition qna 검색기능 함수
  const filterTitle = qnaData.filter((qna) => {
    return qna.question
      .replace(" ", "")
      .toLowerCase()
      .includes(search.toLowerCase().replace(" ", ""));
  });

  // @definition 이미 열려있으면 닫고, 안열려있으면 열고 다른 거 모두
  const [questionindex, setQuestionIndex] = useState("");
  const handleToggle = (id) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      if (qnaData.find((qna) => qna.anony_num === id)?.answer === null) {
        setAnswerModalOpen(true);
        setQuestionIndex(id);
      } else {
        setOpenId(id);
      }
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleAnswerModalClose = () => {
    setAnswerModalOpen(!answerModalOpen);
  };
  const handleFixAnswerModalClose = (id) => {
    setFixModalOpen(!fixAnswerModalOpen);
    setQuestionIndex(id);
  };
  const handleDeleteModalClose = (id) => {
    setDeleteModalOpen(!deleteModalOpen);
    setQuestionIndex(id);
  };

  const [answerModalOpen, setAnswerModalOpen] = useState(false);
  const [fixAnswerModalOpen, setFixModalOpen] = useState(false);
  const [bgAnimation, setBgAnimation] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    // 1초마다 배경 애니메이션 토글
    const interval = setInterval(() => {
      setBgAnimation((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <QnaContainer>
      {isModalOpen && <QnaCreateModal handleCloseModal={handleCloseModal} />}
      {answerModalOpen && (
        <AnswerModal
          handleCloseModal={handleAnswerModalClose}
          title="작성"
          questionindex={questionindex}
        />
      )}
      {fixAnswerModalOpen && (
        <AnswerModal
          handleCloseModal={handleFixAnswerModalClose}
          title="수정"
          questionindex={questionindex}
        />
      )}
      {deleteModalOpen && (
        <DeleteModal
          handleCloseModal={handleDeleteModalClose}
          questionindex={questionindex}
        />
      )}
      <div className={`qna-wrapper ${bgAnimation ? "qna-on" : "qna-off"}`}>
        <div className="qna-title">Q&A</div>
        <div className="qna-search-wrapper">
          <img src={Images.search_icon} alt="searchImg" />
          <input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="글 제목, 내용, 해시태그"
            className="qna-searchbar"
          />
        </div>
        <div className="qna-contents-wrapper">
          {filterTitle.map((qna, index) => (
            <>
              <div key={index} className="qna-content-div">
                <img
                  src={Images.urin_logo}
                  alt={`urin_logo_${index}`}
                  className="qna-contents-img"
                  onClick={() => {
                    setDeleteModalOpen(true);
                    setQuestionIndex(qna.anony_num);
                  }}
                />
                <div className="qna-flex-wrapper">
                  <span className="qna-name">{`익명 ${qna.anony_num}`}</span>
                  <span className="qna-question">
                    {qna.question}
                    {qna.answer && (
                      <img
                        src={Images.speech_icon}
                        alt=""
                        className="speech-img"
                      />
                    )}
                  </span>
                </div>
                <img
                  src={
                    openId === qna.anony_num
                      ? Images.toggle_select
                      : Images.toggle_icon
                  }
                  alt={`toggle`}
                  className={`qna-togle-img`}
                  onClick={() => handleToggle(qna.anony_num)}
                />
              </div>
              {openId === qna.anony_num && (
                <div
                  className="qna-answer"
                  onClick={() => handleFixAnswerModalClose(qna.anony_num)}
                >
                  <img
                    src={Images.urin_answer}
                    alt={`urin_answer`}
                    className="qna-answer-img"
                  />
                  <div className="qna-answer-content">{qna.answer}</div>
                </div>
              )}
            </>
          ))}
        </div>
        <div className="pagination-wrapper">
          {/* @todo 페이지네이션 연결 */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`pagination${
                currentPage === index + 1 ? "-active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="qna-create">
          <button onClick={handleCloseModal}>
            <p>질문 작성하기</p>
            <img
              src={Images.pen_icon}
              alt={`qna-create`}
              className="qna-create-img"
            />
          </button>
        </div>
      </div>
    </QnaContainer>
  );
};

export default Index;
