import { useState, useEffect } from "react";
import { Images, Colors } from "../../../../utils/style";
import LikeAnimation from "./style";

const LikeModal = () => {
  return (
    <LikeAnimation>
      <div className="center">
        <img src={Images.smileplus} alt="" className="smileplus" />
        <img src={Images.smile} alt="" className="smile" />
      </div>

      <img src={Images.likeheart} alt="" className="heart1" />
      <img src={Images.likeheart} alt="" className="heart2" />
      <img src={Images.likeheart} alt="" className="heart3" />
      <img src={Images.likeheart} alt="" className="heart4" />
      <img src={Images.likeheart} alt="" className="heart5" />
      <img src={Images.likeheart} alt="" className="heart6" />
      <img src={Images.likeheart} alt="" className="heart7" />
      <img src={Images.likeheart} alt="" className="heart8" />
      <img src={Images.likeheart} alt="" className="heart9" />
      <img src={Images.likeheart} alt="" className="heart10" />
      <img src={Images.likeheart} alt="" className="heart11" />
      <img src={Images.likeheart} alt="" className="heart12" />
      <img src={Images.likeheart} alt="" className="heart13" />
    </LikeAnimation>
  );
};

export default LikeModal;
