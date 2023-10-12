import { useState, useEffect } from "react";

const useKakaoLoginParams = () => {
  const [loginParams, setLoginParams] = useState({});

  useEffect(() => {
    const req_url = "http://127.0.0.1:4000/kakaologin";

    fetch(req_url)
      .then(res => res.json())
      .then(data => {
        setLoginParams(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return loginParams; 
}

export default useKakaoLoginParams;