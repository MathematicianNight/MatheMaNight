// useQnaData.js
import { useState, useEffect } from 'react';

const useQnaData = (currentPage) => {
  const [qnaData, setQnaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalpages, setTotalPages] = useState(0);

  useEffect(() => {
    const apiUrl = `https://api.mathnight.site/question?page=${currentPage}`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.result[0].cnt / 7));
        // console.log(data);
        setQnaData(data.table);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [currentPage]);

  return { qnaData, loading, totalpages };
};

export default useQnaData;
