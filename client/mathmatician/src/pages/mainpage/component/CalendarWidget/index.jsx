import { useState, useEffect } from "react";
import CalendarContainer from "./style";

const CalendarWidget = () => {
  const client_id = 'fc15512735978bce526493813fdf1451'; // 노출되면 안되므로 실제로는 환경변수 파일에 저장해서 .gitignore로 제외할 예정. 일단 배포 전까지는 상수로 둠
  const redirect_uri = 'http://127.0.0.1:3000/oauthkakao'; // 위와 동일
  const scope = "profile_nickname,account_email,talk_message,talk_calendar"
  const login_uri = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`;

  const linkKakaoLogin = () => {
    window.location.href = login_uri;
  }

  return (
    <CalendarContainer onClick={linkKakaoLogin}>
      <div className="month">November</div>
      <div className="day">24</div>
      <div className="time">6pm</div>
    </CalendarContainer>
  );
}

export default CalendarWidget;