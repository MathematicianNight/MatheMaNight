import { useState, useEffect } from "react";
import CalendarContainer from "./style";

const CalendarWidget = () => {
  const client_id = "fc15512735978bce526493813fdf1451";
  const redirect_uri = "https://invite.mathnight.site/oauthkakao";
  const scope = "talk_calendar";
  const login_uri = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`;

  const linkKakaoLogin = () => {
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