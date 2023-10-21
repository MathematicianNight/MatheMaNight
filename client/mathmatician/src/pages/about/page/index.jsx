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
        {/* <div className="aboutus-obj">
          <img src={Images.aboutus_object1} alt="" className="obj1" />
        </div> */}
        <div className="aboutus-title">
          <span>청초한 절친</span>
        </div>
        <div className="aboutus-detail">
          '청초한 절친'은 수학인의 밤 초대장 웹사이트를 만들기 위해
          결성되었습니다. 프로젝트의 목적을 재미나게 담아내고자 '친절한 초청’을
          거꾸로 한 ‘청초한 절친’을 팀명으로 하였습니다.<br></br>
          <br></br>웹사이트를 통해 '제40회 수학인의 밤' 행사에 대한 정보를
          확인하시고, 행사에 참석하여 함께하는 기쁨을 느끼며 한 해를
          마무리하시길 바랍니다. 감사합니다.
        </div>
        <div className="aboutus-line">
          <img src={Images.line} />
        </div>
        <div className="object-wrapper">
          <img src={Images.object2} className="object2" />
          <img src={Images.object3} className="object3" />
        </div>
        <div className="aboutus-our-wrapper">
          <img src={Images.aboutus_hellokitty} alt="" className="hyelee" />
          <img src={Images.aboutus_minjeong} alt="" className="minjeong" />
          <img src={Images.aboutus_suhyeon} alt="" className="suhyeon" />
          <img src={Images.aboutus_sky} alt="" className="haneul" />
        </div>
        <div className="aboutus-more">
          <img src={Images.object4} className="object4" />
        </div>
        <div className="aboutus-title">
          <span>하고 싶은 말</span>
        </div>
        <div className="aboutus-tellmore">
          <div>혜리 : </div>
          <div>민정 : </div>
          <div>수현 : </div>
          <div>하늘 : </div>
        </div>
      </div>
    </AboutusContainer>
  );
};

export default index;
