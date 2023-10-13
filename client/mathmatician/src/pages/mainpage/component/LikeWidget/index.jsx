import { useState, useEffect } from "react";
import { Images, Colors } from "../../../../utils/style";
import LikeContainer from "./style";
import Likemodal from "../LikeAnimation/index";

// public/assets 폴더에 heart.svg, heart_bubble.svg, heart_shadow.svg 이미지 저장해두었습니다.
const LikeWidget = () => {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(true);
  const [likemodalopen, setlikemodalopen] = useState(false);

  const startLikeAnimation = () => {
    setlikemodalopen(true);
    setCount(count + 1);
    setTimeout(() => {
      setlikemodalopen(false);
    }, 3000); // 5초 후에 애니메이션 종료
  };
  return (
    <LikeContainer likemodalopen={likemodalopen}>
      {likemodalopen && <Likemodal />}
      <div className="like-wrapper" onClick={startLikeAnimation}>
        <div className="like-heart">
          <img src={Images.heart_bubble} alt="heart bubble image" />
          <span>{count}</span>
        </div>
        <img src={Images.clickheart} alt="" />
        <span className="title">수학인의 밤 좋아요</span>
      </div>
    </LikeContainer>
  );
};

export default LikeWidget;
