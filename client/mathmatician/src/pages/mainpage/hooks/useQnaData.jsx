// useQnaData.js
import { useState, useEffect } from 'react';

const useQnaData = ({ currentPage }) => {
  const [qnaData, setQnaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalpages, setTotalPages] = useState(0);

  useEffect(() => {
    // const apiUrl = `http://13.124.51.51:4000/question?page=${currentPage}`;
    // const apiUrl = `/api?q=query&page=${currentPage}`; // 백엔드 엔드포인트에 맞게 수정
    const apiUrl = `https://api.mathnight.site/question?page=${currentPage}`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.rows[0].cnt / 7));
        console.log(data);
        setQnaData(data.table);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return { qnaData, loading, totalpages };
};

export default useQnaData;
