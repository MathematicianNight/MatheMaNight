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
          getSchedules(token).then((res) => {
            if (res.code !== undefined) { // -402
              if (sessionStorage.getItem('access') === 'false') {
                // window.history.go(-(window.history.length - 1));
                navigate("/", {replace: true});
              }
              else {
                alert("[톡캘린더 및 일정 생성, 조회, 편집/삭제] 접근 권한이 필요합니다. 위젯을 다시 클릭하여 동의해주세요.");
                navigate("/", {replace: true});
                sessionStorage.setItem('access', 'false');  
              }
            }
            else {
              const events = res.events;
              const count = [];
              events.map((event) => {
                count.push(event.title);
              });

              if (count.includes('수학인의 밤')) {
                if (sessionStorage.getItem('BACK') === 'back' && sessionStorage.getItem('AA') === 'aa') {
                  if (sessionStorage.getItem('FLAG') === 'flag') {
                    if (sessionStorage.getItem('FLIP') === 'flip') {
                      alert("이미 등록된 일정입니다.");
                      navigate("/", {replace: true});
                      window.history.go(-(window.history.length - 1));
                      sessionStorage.removeItem('FLAG');
                      sessionStorage.removeItem('FLIP');
                    }
                    else {
                      if (sessionStorage.getItem('OTHER') === 'other' && sessionStorage.getItem('GOOD') !== 'good') {
                        alert("이미 등록된 일정입니다.");
                        navigate("/", {replace: true});
                        window.history.go(-(window.history.length - 1));
                        sessionStorage.setItem('GOOD', 'good');
                        sessionStorage.removeItem('OTHER');
                      }
                      else if (sessionStorage.getItem('OTHER') === 'other' && sessionStorage.getItem('GOOD') === 'good') {
                        alert("이미 등록된 일정입니다.");
                        navigate("/", {replace: true});
                        window.history.go(-(window.history.length - 1));
                        sessionStorage.removeItem('GOOD');
                        sessionStorage.removeItem('OTHER');
                      }
                      else {
                        if (window.history.length === 2) {
                          alert("이미 등록된 일정입니다.");
                          navigate("/", {replace: true});
                          window.history.go(-(window.history.length - 1));
                        }
                        else {
                          navigate("/", {replace: true});
                          window.history.back();
                          // window.history.go(-(window.history.length - 1));                           
                        }
                      }
                      sessionStorage.setItem('FLIP', 'flip');
                      sessionStorage.removeItem('FLAG');
                    }
                  } 
                  else {
                    alert("이미 등록된 일정입니다.");
                    navigate("/", {replace: true});
                    window.history.go(-(window.history.length - 1));
                  }
                  sessionStorage.setItem('access', 'false');  
                }

                if (sessionStorage.getItem('BACK') !== 'back' && sessionStorage.getItem('AA') !== 'aa') {
                  alert("이미 등록된 일정입니다.");
                  navigate("/", {replace: true});
                  window.history.go(-(window.history.length - 1));
                  sessionStorage.setItem('access', 'false');  
                }
              }

              else {
                openCalendar(token, invitation_schedule).then(res => {
                  const check = window.confirm("일정이 등록되었습니다. 카카오톡을 열어 확인하시겠습니까?");
                  sessionStorage.setItem('AA', 'aa');
                  sessionStorage.setItem('BACK', 'back');
                  sessionStorage.setItem('FLAG', 'flag');
                  sessionStorage.setItem('access', 'false');  
                  if (!check) {
                    navigate("/", {replace: true});
                    window.history.go(-(window.history.length - 1));
                    // sessionStorage.setItem('FLIP', 'flip');
                    sessionStorage.setItem('FIRST', 'first');
                    sessionStorage.setItem('OTHER', 'other');
                  }
                  else {
                    navigate("/", {replace: true});
                    // window.history.back();
                    window.location.href = ("https://calendar.kakao.com/");
                  }
                });
              }
            }
          });
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
