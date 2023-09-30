import { useState, useEffect } from 'react';
import { MapAppContainer } from "./style";
import { Images } from '../../../../utils/style';

const LaunchUserMapApp = () => {
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

  // 이 함수들도 다 useEffect 한번만 정의되게 ㅇㅇ
  const openGoogleMap = () => {
    return;
    setTimeout(() => {
      window.location.href = "https://www.google.com/maps/search/?api=1&query=더블유파티";
    }, 900);
  }
  const openNaverMap = () => {
    setTimeout(() => {
      window.location.href = "https://map.naver.com/p/entry/place/35643864?c=15.00,0,0,0,dh";
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

  //=====================================================================================================

  return (
    <MapAppContainer
      isBlurred={isBlurred}
      onClick={showIcons}
    >
      <img 
        className="map-app-background"
        src={Images.locationDrawing}
      />
      <div className="open-map-app">
          <img src={Images.googleMapIcon} onClick={openGoogleMap} />
          <img src={Images.naverMapIcon} onClick={openNaverMap} />
          <img src={Images.kakaoMapIcon} onClick={openKakaoMap} />
      </div>
      <div className="copy-addr">
        <span>서울 성북구 동소문로 284 길음 서희스타힐스</span>
        <span className="copy-addr-button" onClick={() => copyClipBoard('서울 성북구 동소문로 284 길음 서희스타힐스')}>
          <img src={Images.copyAddrIcon} /> 복사
        </span>
      </div>
    </MapAppContainer>
  );
};

export default LaunchUserMapApp;

