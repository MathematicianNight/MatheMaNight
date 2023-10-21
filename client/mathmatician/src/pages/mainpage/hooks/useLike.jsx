import { useState, useEffect } from "react";
import { Api } from "../../../utils/api";

const useLikes = ({ setCount }) => {
  const [likeData, setLikeData] = useState(0);

  useEffect(() => {
    fetch(Api.Like)
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
