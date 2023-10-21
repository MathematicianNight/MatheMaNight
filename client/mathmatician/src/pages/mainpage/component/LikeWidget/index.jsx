import React, { useState, useEffect } from "react";
import { Images, Colors } from "../../../../utils/style";
import LikeContainer from "./style";
import Likemodal from "../LikeAnimation/index";
import useLikes from "../../hooks/useLike";

// public/assets 폴더에 heart.svg, heart_bubble.svg, heart_shadow.svg 이미지 저장해두었습니다.
const LikeWidget = () => {
  const [on, setOn] = useState(false);
  const [likemodalopen, setlikemodalopen] = useState(false);
  const [count, setCount] = useState(0);
  const likeData = useLikes(setCount);

  const startLikeAnimation = () => {
    setlikemodalopen(true);
    setCount(count + 1);
    // fetch("https://api.mathnight.site/like/upcount", {

    fetch("http://13.124.51.51:4000/like/upcount", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("잘 전송됨");
      })
      .catch((error) => {
        console.error("Error updating like count:", error);
      });

    setTimeout(() => {
      setlikemodalopen(false);
    }, 3000);
  };

  useEffect(() => {
    let toggleInterval;

    if (!likemodalopen) {
      toggleInterval = setInterval(() => {
        setOn((prevOn) => !prevOn);
      }, 500);
    }

    return () => {
      clearInterval(toggleInterval);
    };
  }, [likemodalopen]);

  return (
    <LikeContainer likemodalopen={likemodalopen}>
      {likemodalopen && <Likemodal />}
      <div className="like-wrapper" onClick={startLikeAnimation}>
        <div className="like-heart">
          <img src={Images.heart_bubble} alt="heart bubble image" />
          <span>{likeData + count}</span>
        </div>
        {on ? (
          <img src={Images.clickheart} alt="" className="heart-image click" />
        ) : (
          <img
            src={Images.unclickheart}
            alt="heart bubble image"
            className="heart-image unclick"
          />
        )}
        <span className="title">수학인의 밤 좋아요</span>
      </div>
    </LikeContainer>
  );
};

export default LikeWidget;
