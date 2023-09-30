import { useState, useEffect } from 'react';

const useKakaoMap = (keyword) => {
  const [placeID, setPlaceID] = useState(0);

  useEffect(() => {
    const ps = new window.kakao.maps.services.Places(); 
  }, []);

  ps.keywordSearch(keyword, placesSearchCB);


  return placeID;
}

export default useKakaoMap;