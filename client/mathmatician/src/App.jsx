import { Route, Routes } from "react-router-dom";
import "./GlobalStyle.css";
import "./assets/fonts/fonts.css";

import MainPage from "./pages/mainpage/page";
import LinkKakaoCalendar from "./pages/kakaologin/page";
import About from "./pages/about/page";
import Violet from "./pages/test/violet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/oauthkakao" element={<LinkKakaoCalendar />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/violet" element={<Violet />} />
    </Routes>
  );
}

export default App;