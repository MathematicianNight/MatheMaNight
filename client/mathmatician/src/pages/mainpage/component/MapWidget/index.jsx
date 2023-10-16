import { useState, useEffect } from "react";
import MapContainer from "./style";
import { Images, Colors } from "../../../../utils/style";

const openGoogleMap = () => {
  return;
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
  if (window.navigator.clipboard) {
    window.navigator.clipboard.writeText(content)
      .then(res => {
        alert('주소가 복사되었습니다.');
      })
      .catch(err => {
        fallbackCopyClipBoard(content);
      });
  } else {
    fallbackCopyClipBoard(content);
  }
};

const invitation_address = "서울 성북구 동소문로 284 길음 서희스타힐스";

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
    <MapContainer isBlurred={isBlurred} onClick={showIcons}>
      <img 
        className="widget-background"
        src={Images.location_drawing}
        alt="map of the party place"
      />
      <div className="map-apps">
        <img
          src={Images.googlemap_icon}
          alt="googlemap app icon"
          onClick={openGoogleMap}
        />
        <img
          src={Images.navermap_icon}
          alt="navermap app icon"
          onClick={openNaverMap}
        />
        <img
          src={Images.kakaomap_icon}
          alt="kakaomap app icon"
          onClick={openKakaoMap}
        />
      </div>
      <div className="addr-copy">
        <span>{invitation_address}</span>
        <div className="addr-copy-button" onClick={() => copyClipBoard(invitation_address)}>
          <img src={Images.clipboard_icon} alt="clipboard icon image" />
          <span>복사</span>
        </div>
      </div>
    </MapContainer>
  );
};

export default MapWidget;