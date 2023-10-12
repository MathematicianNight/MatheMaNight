import { useState, useEffect } from "react";
import { Images, Colors } from "../../../../utils/style";
import LikeContainer from "./style";

// public/assets 폴더에 heart.svg, heart_bubble.svg, heart_shadow.svg 이미지 저장해두었습니다.
const LikeWidget = () => {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(true);

  return (
    <LikeContainer>
      <div className="like-wrapper">
        <div className="like-heart">
          <img src={Images.heart_bubble} alt="heart bubble image" />
          <span>000</span>
        </div>
        <img src={Images.clickheart} alt="" />
        <span className="title">수학인의 밤 좋아요</span>
      </div>
    </LikeContainer>
  );
};

export default LikeWidget;
