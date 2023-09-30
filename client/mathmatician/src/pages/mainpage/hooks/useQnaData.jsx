// useQnaData.js
import { useState, useEffect } from "react";

const useQnaData = (currentPage) => {
  const [qnaData, setQnaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `http://localhost:4000/question?page=${currentPage}`;

    fetch(apiUrl)
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
