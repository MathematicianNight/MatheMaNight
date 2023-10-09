
const handleClick2 = () => {
  const key = 'fc15512735978bce526493813fdf1451';
  const redirect = 'http://localhost:3000/hellokitty';
  const url1 = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${key}&redirect_uri=${redirect}`;
  let response = await fetch(url1);
  if (response.ok) {
    let json = await response.json();
  } else {
    console.log("HTTP-Error: " + response.status);
  }
};
