import { useState, useEffect } from "react";
import CalendarContainer from "./style";

const CalendarWidget = () => {
  const client_id = process.env.REACT_APP_REST_API_KEY;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const scope = "talk_calendar";
  const login_uri = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`;

  const linkKakaoLogin = () => {
    // const reply = window.confirm("목록 가져오기??");
    // if (reply) {
    //   fetch(`https://kapi.kakao.com/v1/user/ids`, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    //       'Authorization': `KakaoAK ${process.env.REACT_APP_ADMIN_KEY}`
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // }

    // const reply = window.confirm("연결 끊기??");
    // if (reply) {
    //   const res = fetch(`https://kapi.kakao.com/v1/user/unlink?target_id_type=user_id&target_id=-1`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    //       'Authorization': `KakaoAK ${process.env.REACT_APP_ADMIN_KEY}`
    //     }
    //   });
    //   alert("로그아웃 되었습니다.");
    // }

    const reply = window.confirm("일정을 등록하시겠습니까? 이미 등록된 일정의 경우 재등록됩니다.");
    if (reply) {
      window.location.href = login_uri;
      sessionStorage.removeItem('OPEN');  
    }
  }

  return (
    <CalendarContainer onClick={linkKakaoLogin}>
      <span className="month">November</span>
      <span className="day">24</span>
      <span className="time">6pm</span>
    </CalendarContainer>
  );
}

export default CalendarWidget;
