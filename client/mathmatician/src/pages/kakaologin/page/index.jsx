import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useInvitationSchedule from "../hooks/useInvitationSchedule";
import { Images, Colors } from "../../../utils/style";

const LinkKakaoCalendar = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const client_id = "fc15512735978bce526493813fdf1451";
  const client_secret = "3KWoa8WKOtLIL50ke3j6ps9tnaFL6cZx"; 
  const redirect_uri = "https://invite.mathnight.site";
  const calendar_uri = "https://kapi.kakao.com/v2/api/calendar/create/event";
  const calendars_uri = "https://kapi.kakao.com/v2/api/calendar/events";
  const return_uri = "/";
  const invitation_schedule = {
    title: '수학인의 밤',
    time: {
      start_at: '2023-11-24T09:00:00Z',
      end_at: '2023-11-24T12:00:00Z',
      time_zone: 'Asia/Seoul'
    },
    description: '소중한 시간을 빌리는 만큼 좋은 행사로 찾아뵙겠습니다 :-)',
    location: {
      name: '더블유파티',
      location_id: 35643864,
      address: '서울 성북구 동소문로 284 길음 서희스타힐스'
    },
    color: 'ROYAL_BLUE'
  };
  // const invitation_schedule = useInvitationSchedule();
  // console.log(invitation_schedule);

  const getToken = async (token_uri) => {
    const res = await fetch(token_uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    });
    return res.json();
  }

  const getSchedules = async (user_token) => {
    const start_at = '2023-11-24T08:55:00Z';
    const end_at = '2023-11-24T12:05:00Z';
    const res = await fetch(`${calendars_uri}?calendar_id=primary&from=${start_at}&to=${end_at}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user_token}`
      }
    });
    return res.json();
  }

  const openCalendar = async (user_token, user_event) => {
    user_event = encodeURIComponent(JSON.stringify(user_event));
    const res = await fetch(`${calendar_uri}?calendar_id=primary&event=${user_event}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${user_token}`
      }
    });
    return res.json();
  }

  useEffect(() => {
    try {      
      if (location.state === null) {
        alert("잘못된 접근입니다. More Functions의 캘린더 위젯을 다시 클릭해주세요.");
        // window.location.replace(return_uri);
        navigation(return_uri, {replace: true});
        // history.replaceState('/');
      }
      else {
        const token_uri = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${location.state.code}&client_secret=${client_secret}`;
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
        //   // window.location.replace(return_uri);
        //   navigation(return_uri, {replace: true});
        //   // history.replace('/');
        //   return;
        // }        
        getToken(token_uri).then(res => {
          const token = res.access_token;
          getSchedules(token).then(res => {
            const events = res.events;
            if (events === undefined) {
              alert("\"톡캘린더 및 일정 생성, 조회, 편집/삭제\" 접근 권한이 필요합니다. 위젯을 다시 클릭하여 항목에 동의해주세요.");
              // window.location.replace(return_uri);
              navigation(return_uri, {replace: true});
              // history.replace('/');
            }
            else {
              const count = [];
              events.map(event => {
                count.push(event.title);
              });
              if (count.includes('수학인의 밤')) {
                alert("해당 시간대에 \"수학인의 밤\" 일정이 이미 존재합니다. 확인해 주세요.");
                // window.location.replace(return_uri);
                navigation(return_uri, {replace: true});
                // history.replace('/');
              }
              else {
                openCalendar(token, invitation_schedule).then(res => {
                  const check = window.confirm("일정이 등록되었습니다. 카카오톡을 열어 확인하시겠습니까?");
                  // window.location.replace(return_uri);
                  navigation(return_uri, {replace: true});
                  // history.replace('/');
                  if (check) {
                    window.location.replace("https://calendar.kakao.com/");
                  }      
                });
              }
            }
          });
        });
      }
    }
    catch (err) {
      console.log(err);
    }  
  });
}

export default LinkKakaoCalendar;