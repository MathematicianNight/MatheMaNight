import { useState, useEffect } from "react";
import CalendarContainer from "./style";

const CalendarWidget = () => {
  const client_id = "fc15512735978bce526493813fdf1451";
  // const redirect_uri = "http://192.168.52.127:3000";
  const redirect_uri = "https://invite.mathnight.site";
  const scope = "talk_calendar";
  const login_uri = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`;

  const linkKakaoLogin = () => {
    // const reply = window.confirm("연결 끊을거??");
    // if (reply) {
    //   const res = fetch(`https://kapi.kakao.com/v1/user/unlink?target_id_type=user_id&target_id=3049210805`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    //       'Authorization': `KakaoAK 05517d4c256d7502f20b78c021fe520f`
    //     }
    //   });
    //   alert("로그아웃 되었습니다.");
    // }
    window.location.href = login_uri;
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