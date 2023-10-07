// useQnaData.js
import { useState, useEffect } from "react";

const useQnaData = (currentPage) => {
  const [qnaData, setQnaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const apiUrl = `http://localhost:4000/question?page=${currentPage}`;
    const apiUrl = `/api?q=query&page=${currentPage}`; // 백엔드 엔드포인트에 맞게 수정

    fetch(apiUrl, {
      method: "GET", // GET 요청을 사용하고 있지만 필요에 따라 다른 HTTP 메서드를 선택할 수 있습니다.
      headers: {
        "Content-Type": "application/json", // 데이터 형식을 JSON으로 설정
      },
      // 다른 옵션들도 설정할 수 있습니다.
      // body: JSON.stringify(dataToSend), // 데이터를 JSON 문자열로 변환하여 보내는 예제
    })
      .then((response) => response.json())
      .then((data) => {
        setQnaData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [currentPage]);

  return { qnaData, loading };
};

export default useQnaData;
