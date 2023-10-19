import { useState, useEffect } from "react";

const useLikes = ({ setCount }) => {
  const [likeData, setLikeData] = useState(0);

  useEffect(() => {
    const apiUrl = "http://13.124.51.51:4000/like";
    // const apiUrl = "https://api.mathnight.site/like";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setLikeData(data.likeCnt);
        setCount(data.likeCnt);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return likeData;
};

export default useLikes;
