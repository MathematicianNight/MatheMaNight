import React, { useState, useEffect } from "react";

import { QnaContainer } from "../Qna/style";
import { Images } from "../../../../util/style";
import useQnaData from "../../hooks/useQnaData";
import QnaCreateModal from "../qnaCreateModal/index";

const Index = () => {
  //@definition 페이지네이션
  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage to 1
  const { qnaData, loading } = useQnaData(currentPage);
  const totalPages = 5;
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
  const handleToggle = (id) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <QnaContainer>
      {isModalOpen && <QnaCreateModal handleCloseModal={handleCloseModal} />}
      <div className={`qna-wrapper`}>
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
              <div key={index}>
                <img
                  src={Images.urin_logo}
                  alt={`urin_logo_${index}`}
                  className="qna-contents-img"
                />
                <div className="qna-flex-wrapper">
                  <span className="qna-name">{`익명 ${index + 1}`}</span>
                  <span className="qna-question">{qna.question}</span>
                </div>
                <img
                  src={Images.toggle_icon}
                  alt={`toggle`}
                  className={`qna-togle-img`}
                  onClick={() => handleToggle(qna.id)}
                />
              </div>
              {openId === qna.id && (
                <div className="qna-answer">
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
            질문 작성하기
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
