import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Images } from "../../../utils/style";
import AboutusContainer from "./style";

const Index = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <AboutusContainer>
      <div className="aboutus-wrapper">
        <div className="backbutton" onClick={goBack}>
          <img src={Images.back} alt="" />
        </div>
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
          '청초한 절친' 팀은 수학인의 밤 초대장 웹사이트를 개발하기 위해
          결성되었습니다. 팀명 '청초한 절친'은“친절한 초청”을 거꾸로 하여,
          친절한 마음으로 여러분들을 초청하고자 하는 프로젝트의 목적을 은은하게
          담아낸 것입니다.<br></br>
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
          <div className="tellme">
            <span style={{ minWidth: "30px" }}>혜리 :</span>
            <span>
              세상 모든 핸드폰이 나한테 있었으면 좋겠다는 생각....만 천 번쯤
              했던 것 같아요 ㅎㅎ 모든 핸드폰에서 알맞게 보여주기란 참 쉽지
              않음을 체감하면서,,, 이렇게 프로젝트의 마침표를 찍었네요 ㅎㅎ
              방문해주셔서 감사하고 다가올 수학인의 밤 행사도 재밌게 즐겨주세요
              :-)
            </span>
          </div>
          <div className="tellme">
            <div style={{ minWidth: "30px" }}>민정 : </div>
            <div>
              <span>˗ˋˏ슈밤ˎˊ˗</span>프로젝트 너무 재밌었어요.. 앗.. 아니 슈밤이
              아니라 수밤이에요. ㅎㅎ 열심히 만들었으니 좋아요도 한 번씩 눌러
              주세요 ت 그리고 청초한 절친 모두 너무 고생했어 ♥
            </div>
          </div>
          <div className="tellme">
            <div style={{ minWidth: "30px" }}>수현 : </div>
            <div>
              사람들이 절 볼 때마다 한 마디씩 하더라고요. "너 휴학생 맞아?" 네..
              저 휴학생 맞아요... 휴학생인데 학교 와서 열심히 만들었어요. 많이
              구경해주세요! 이제 진짜로 휴학을 해볼게요★
            </div>
          </div>
          <div className="tellme">
            <div style={{ minWidth: "30px" }}>하늘 : </div>
            <div>
              수학과인데 왜 디자인을 맡았냐고요? 디자인에 관심이 좀 있었는데
              이번에 기회가 돼서 참여하게 됐어요! UX/UI 디자인은 이번이 처음이니
              너그러이 봐주세요..! 또 저희 팀 개발자들이 정말 열일 했으니
               <span> 많</span>은<span> 관</span>심을 갖고 구경해 주시길
               <span> 부</span>탁드려요! 누르고 싶게 생겼다~ 싶은 것들은 대부분
              기능이 있을 테니 마음껏 눌러 보세요!!
            </div>
          </div>
        </div>
      </div>
    </AboutusContainer>
  );
};

export default Index;
