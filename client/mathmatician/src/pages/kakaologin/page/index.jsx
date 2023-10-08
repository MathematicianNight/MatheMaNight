import { useState, useEffect } from "react";
import LoadingContainer from "./style";

const LinkKakaoCalendar = () => {
  const client_id = 'fc15512735978bce526493813fdf1451'; // 노출되면 안되므로 실제로는 환경변수 파일에 저장해서 .gitignore로 제외할 예정. 일단 배포 전까지는 상수로 둠
  const client_secret = '3KWoa8WKOtLIL50ke3j6ps9tnaFL6cZx'; // 위와 동일
  const redirect_uri = 'http://127.0.0.1:3000/oauthkakao'; // 위와 동일
  const code = new URL(window.location.href).searchParams.get('code');
  const calendar_uri = 'https://kapi.kakao.com/v2/api/calendar/create/event';
  const return_uri = 'http://127.0.0.1:3000';
  let invitation_schedule = {
    title: '수학인의 밤',
    time: {
      start_at: '2023-11-24T09:00:00Z',
      end_at: '2023-11-24T15:00:00Z',
      time_zone: 'Asia/Seoul'
    },
    description: '본 행사에 참석하여 자리를 빛내주세요 :-)',
    location: {
      name: '더블유파티',
      location_id: 35643864,
      address: '서울 성북구 동소문로 284 길음 서희스타힐스'
    },
    color: 'ROYAL_BLUE'
  };

  const getToken = async (token_uri) => {
    const res = await fetch(token_uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
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

  if (code !== null) {
    const token_uri = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}&client_secret=${client_secret}`;
    getToken(token_uri).then(res => {
      openCalendar(res.access_token, invitation_schedule)
        .then(res => {
          const check = window.confirm("일정이 등록되었습니다. 카카오톡을 열어 확인하시겠습니까?");
          if (check) {
            window.location.href = return_uri;
            window.location.href = "https://calendar.kakao.com";
          }
          else {
            window.location.href = return_uri;
          }
          code = null;
          token_uri = null;
        })
        .catch(err => console.log(err));
    });
  }
  else {
    alert("잘못된 접근입니다. More Functions의 캘린더 위젯을 먼저 클릭해주세요.");
    window.location.href = return_uri;
    return;
  }

  return (
    <LoadingContainer>
      카카오 로그인 중입니다 ...
      톡캘린더에 일정 추가 중입니다 ...
    </LoadingContainer>
  );
}

export default LinkKakaoCalendar;