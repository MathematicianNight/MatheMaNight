// useQnaData.js
import { useState, useEffect } from "react";

const useQnaData = (currentPage) => {
  const [qnaData, setQnaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `http://13.124.51.51:4000/question?page=${currentPage}`;
    // const apiUrl = `/api?q=query&page=${currentPage}`; // 백엔드 엔드포인트에 맞게 수정

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
