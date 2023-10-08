import { useState, useEffect } from "react";
import { Images, Colors } from "../../../../utils/style";
import LikeContainer from "./style";

const LikeWidget = () => {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(true);

  return (
    <LikeContainer>
      <div className="record-click">
        <img src={Images.heart_bubble} alt="heart bubble image" />
        <span>000</span>
      </div>
      {/* {setInterval(() => {
        setFront(!front)
      }, 1500)} */}
      {/* <img className={(front ? "on" : "off") + " front"} src={Images.heart} />
      <img className={(front ? "off" : "on") + " back"} src={Images.heart_shadow} /> */}
      {/* <span>수학인의 밤</span> */}
    </LikeContainer>
  );
}

export default LikeWidget;