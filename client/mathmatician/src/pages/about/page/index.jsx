import { useState, useEffect } from "react";
import { Images, Colors } from "../../../utils/style";
import AboutusContainer from "./style";

const index = () => {
  return (
    <AboutusContainer>
      <div className="aboutus-wrapper">
        <div className="aboutus-logo">
          <img src={Images.aboutus_logo} alt="" />
          <img src={Images.aboutus_frendLogo} alt="" className="frendlogo" />
        </div>
        <div className="aboutus-detail">
          청초한 절친 어쩌구저쩌구 ... 입니다.
        </div>
        <div className="aboutus-obj">
          <img src={Images.aboutus_object1} alt="" />
        </div>
        <div className="aboutus-our-wrapper">
          <img src={Images.aboutus_hellokitty} alt="" />
          <img src={Images.aboutus_minjeong} alt="" />
        </div>
      </div>
    </AboutusContainer>
  );
};

export default index;
