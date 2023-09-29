import React, { useState } from "react";

import { QnaContainer } from "../Qna/style";
import { Images } from "../../../../util/style";

const Index = () => {
  // 임시 데이터
  const [qnaData, setQnaData] = useState([
    {
      id: 1,
      question: "뒤풀이 장소는 어디인지 알 수 있을까요?",
      answer: "뒤풀이 장소는 ABC 홀에서 진행됩니다.",
    },
    {
      id: 2,
      question: "경품이 뭔지 궁금해요!!!",
      answer: "경품은 다양한 상품과 상품권으로 구성되어 있습니다.",
    },
    {
      id: 3,
      question: "영상 시청 시간에는 어떤 영상을 보게 되나요?",
      answer: "영상 시청 시간에는 최근 개봉한 인기 영화를 상영할 예정입니다.",
    },
    {
      id: 4,
      question: "늦게 참석하게 될 경우 어떻게 해야 하나요?",
      answer:
        "늦게 참석하게 될 경우 주최자에게 미리 연락하여 도움을 받을 수 있습니다.",
    },
    {
      id: 5,
      question: "참석 인원이 어느정도 되는지 알 수 있나요?",
      answer: "예상 참석 인원은 약 300명 정도입니다.",
    },
    {
      id: 6,
      question: "경품 추첨은 어떤 방식으로 진행되나요?",
      answer: "경품 추첨은 무작위로 진행되며 이벤트 종료 후 발표됩니다.",
    },
    {
      id: 7,
      question: "끝나는 시간이 몇 시쯤 되나요?",
      answer: "끝나는 시간은 22:00 시쯤입니다.",
    },
  ]);

  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState(null);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const filterTitle = qnaData.filter((qna) => {
    return qna.question
      .replace(" ", "")
      .toLowerCase()
      .includes(search.toLowerCase().replace(" ", ""));
  });

  const handleToggle = (id) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <QnaContainer>
      <div className="qna-wrapper">
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
        <div className="pagination">
          <button>1</button>
          <button>2</button>
        </div>
        <div className="qna-create">
          <button>
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
