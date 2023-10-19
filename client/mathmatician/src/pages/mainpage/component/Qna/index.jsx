import React, { useState, useEffect } from "react";

//style
import { QnaContainer } from "../Qna/style";
import { Images } from "../../../../utils/style";

//Hooks
import useQnaData from "../../hooks/useQnaData";
import useSearchData from "../../hooks/useSearchData";

// api
import { Api } from "../../../../utils/api";

// Component
import QnaCreateModal from "../qnaCreateModal/index";
import AnswerModal from "../qnaAnswerModal/index";
import DeleteModal from "../qnaDeleteModal/index";

const Index = () => {
  //@definition 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const [SearchPage, setSearchPage] = useState(1);

  const [searchstate, setSearchState] = useState(false);

  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState(null);

  const handleSearch = (searchText) => {
    setSearchState(true);
    setSearch(searchText);
    setSearchPage(1); // 검색어가 변경될 때 페이지를 1로 리셋
  };
  // const { qnaData, loading, totalpages } = useQnaData(currentPage);

  const [qnaData, setQnaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalpages, setTotalPages] = useState(0);

  /**
   *  @definition qna 데이터 호출
   * */
  const getQnaData = () => {
    const apiUrl = `${Api.QnaGet}${currentPage}`;

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.result[0].cnt / 7));

        setQnaData(data.table);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  // @detinition 검색 후 데이터 조정
  const getSearchData = () => {
    const apiParams = {
      result: search,
      page: SearchPage,
    };
    const apiUrl = `${Api.QnaSearch}result=${apiParams.result}&page=${apiParams.page}`;

    fetch(
      apiUrl,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      apiParams
    )
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.result[0].cnt / 7));
        setQnaData(data.table);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getQnaData();
  }, [currentPage]);

  useEffect(() => {
    getSearchData();
  }, [search, SearchPage]);

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

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 5);
    }
  };

  // 다음 페이지로 이동
  const nextPage = () => {
    if (currentPage + 4 < totalpages) {
      setCurrentPage(currentPage + 5);
    }
  };

  const pageGroupSize = 5; // 한 그룹 당 페이지 수
  const pageNumbers = Array.from(
    { length: totalpages },
    (_, index) => index + 1
  );
  const pageGroups = Array.from(
    { length: Math.ceil(totalpages / pageGroupSize) },
    (_, index) =>
      pageNumbers.slice(
        index * pageGroupSize,
        index * pageGroupSize + pageGroupSize
      )
  );

  const [currentPageGroupIndex, setCurrentPageGroupIndex] = useState(0);

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
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="글 제목, 내용, 해시태그"
            className="qna-searchbar"
          />
        </div>
        <div className="qna-contents-wrapper">
          {qnaData.map((qna, index) => (
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
          {pageGroups.map(
            (group, groupIndex) =>
              groupIndex === currentPageGroupIndex && (
                <div key={groupIndex} className="pagination-group">
                  {groupIndex > 0 && (
                    <button
                      onClick={() => setCurrentPageGroupIndex(groupIndex - 1)}
                      className="pagination"
                    >
                      &lt;
                    </button>
                  )}

                  {group.map((pageNumber) => (
                    <button
                      key={pageNumber}
                      className={`pagination${
                        (searchstate && SearchPage === pageNumber) ||
                        (!searchstate && currentPage === pageNumber)
                          ? "-active"
                          : ""
                      }`}
                      onClick={() => {
                        if (searchstate) {
                          setSearchPage(pageNumber);
                        } else {
                          setCurrentPage(pageNumber);
                        }
                      }}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  {groupIndex < pageGroups.length - 1 && (
                    <button
                      onClick={() => setCurrentPageGroupIndex(groupIndex + 1)}
                      className="pagination"
                    >
                      &gt;
                    </button>
                  )}
                </div>
              )
          )}
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
