import { useState, useEffect } from "react";
import MapContainer from "./style";
import { Images, Colors } from "../../../../utils/style";

const openGoogleMap = () => {
  setTimeout(() => {
    window.location.href = "https://www.google.com/maps/search/?api=1&query=더블유파티";
  }, 800);
}
const openNaverMap = () => {
  setTimeout(() => {
    window.location.href = "https://m.map.naver.com/map.naver?pinId=35643864";
  }, 800);
}
const openKakaoMap = () => {
  setTimeout(() => {
    window.location.href = "https://map.kakao.com/link/map/25779135";
  }, 900);
}

const fallbackCopyClipBoard = (content) => {
  const textArea = document.createElement('textarea');
  try {
    textArea.value = content;
    document.body.appendChild(textArea);
    textArea.select();        
    const successful = document.execCommand('copy');
    if (successful) {
      alert('주소가 복사되었습니다.');
    }
  } catch (err) {
    alert('클립보드 복사를 지원하지 않는 브라우저입니다.');
  }
  document.body.removeChild(textArea);
};

const copyClipBoard = (content) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(content)
      .then(() => {
        alert('주소가 복사되었습니다.');
      })
      .catch((err) => {
        fallbackCopyClipBoard(content);
      });
  } else {
    fallbackCopyClipBoard(content);
  }
};

const MapWidget = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  const showIcons = () => {
    if (isBlurred) {
      setTimeout(() => {
        setIsBlurred(!isBlurred);
      }, 400)
    } else {
      setIsBlurred(!isBlurred);
    }
  }

  return (
    <MapContainer
      isBlurred={isBlurred}
      onClick={showIcons}
    >
      <img 
        className="map-app-background"
        src={Images.location_drawing}
      />
      <div className="open-map-app">
          <img src={Images.google_map_icon} />
          <img src={Images.naver_map_icon} onClick={openNaverMap} />
          <img src={Images.kakao_map_icon} onClick={openKakaoMap} />
      </div>
      <div className="copy-addr">
        <span>서울 성북구 동소문로 284 길음 서희스타힐스</span>
        <span className="copy-addr-button" onClick={() => copyClipBoard('서울 성북구 동소문로 284 길음 서희스타힐스')}>
          <img src={Images.copy_addr_icon} /> 복사
        </span>
      </div>
    </MapContainer>
  );
};

export default MapWidget;