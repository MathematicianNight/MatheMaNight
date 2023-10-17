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
          '청초한 절친'은 수학인의 밤 초대장 웹사이트를 만들기 위해 결성된
          팀입니다.<br></br> 거꾸로 읽으면 '친절한 초청'입니다. <br></br>팀
          이름에 프로젝트의 목적이 들어가 있으면 좋겠다고 생각해서 '청초한
          절친'으로 짓게 되었습니다.
        </div>
        <div className="aboutus-obj">
          <img src={Images.aboutus_object1} alt="" className="obj1" />
        </div>
        <div className="aboutus-our-wrapper">
          <img src={Images.aboutus_hellokitty} alt="" className="hyelee" />
          <img src={Images.aboutus_minjeong} alt="" className="minjeong" />
          <img src={Images.aboutus_suhyeon} alt="" className="suhyeon" />
        </div>
      </div>
    </AboutusContainer>
  );
};

export default index;
