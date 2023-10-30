import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useInvitationSchedule from "../hooks/useInvitationSchedule";
import LoadingContainer from "./style";

const LinkKakaoCalendar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const client_id = process.env.REACT_APP_REST_API_KEY;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const calendar_uri = "https://kapi.kakao.com/v2/api/calendar/create/event";
  const calendars_uri = "https://kapi.kakao.com/v2/api/calendar/events";
  const invitation_schedule = {
    title: "수학인의 밤",
    time: {
      start_at: "2023-11-24T09:00:00Z",
      end_at: "2023-11-24T12:00:00Z",
      time_zone: "Asia/Seoul",
    },
    description: "제40회 수학인의 밤에 참석해주셔서 감사합니다 :)",
    location: {
      name: "더블유파티",
      location_id: 35643864,
      address: "서울 성북구 동소문로 284 길음 서희스타힐스",
    },
    color: "ROYAL_BLUE",
  };
  // const invitation_schedule = useInvitationSchedule();

  const getToken = async (token_uri) => {
    const res = await fetch(token_uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    return res.json();
  };

  const getSchedules = async (user_token) => {
    const start_at = "2023-11-24T08:55:00Z";
    const end_at = "2023-11-24T12:05:00Z";
    const res = await fetch(
      `${calendars_uri}?calendar_id=primary&from=${start_at}&to=${end_at}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user_token}`,
        },
      }
    );
    return res.json();
  };

  const openCalendar = async (user_token, user_event) => {
    user_event = encodeURIComponent(JSON.stringify(user_event));
    const res = await fetch(
      `${calendar_uri}?calendar_id=primary&event=${user_event}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${user_token}`,
        },
      }
    );
    return res.json();
  };

  useEffect(() => {
    try {
      if (location.state === null) {
        alert("잘못된 접근입니다. More Functions의 캘린더 위젯을 다시 클릭해주세요.");
        // window.history.go(-(window.history.length - 1));
        navigate("/", {replace: true});
      }
      else {
        const token_uri = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${location.state.code}&client_secret=${client_secret}`;
        getToken(token_uri).then((res) => {
          const token = res.access_token;
          if (sessionStorage.getItem('OPEN') === 'open') {
            navigate("/", {replace: true});
            // window.history.back();
            // sessionStorage.removeItem('OPEN');
          }
          else {
            openCalendar(token, invitation_schedule).then((res) => {
              if (res.code !== undefined) {
                alert("[톡캘린더 및 일정 생성, 조회, 편집/삭제] 접근 권한이 필요합니다. 위젯을 다시 클릭하여 동의해주세요.");
                navigate("/", {replace: true});
                // sessionStorage.setItem('AGREE', 'agree');
              }
              else {
                const check = window.confirm("일정이 등록되었습니다. 카카오톡을 열어 확인하시겠습니까?");
                // sessionStorage.setItem('AGREE', 'agree');
                if (!check) {
                  // window.history.back();
                  navigate("/", {replace: true});
                  // sessionStorage.setItem('BACK', 'back');
                  sessionStorage.setItem('OPEN', 'open');
                }
                else {
                  navigate("/", {replace: true});
                  window.location.href = ("https://calendar.kakao.com/");
                  sessionStorage.setItem('OPEN', 'open');
                }  
              }
            });  
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <LoadingContainer>
      <div className="loading-spinner">
        <p className="loading-text">Loading...</p>
        <div className="loading-bar"></div>
      </div>
    </LoadingContainer>
  );
}

export default LinkKakaoCalendar;
