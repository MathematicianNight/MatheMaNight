import { Route, Routes } from "react-router-dom";
import "./GlobalStyle.css";
import "./assets/fonts/fonts.css";

import MainPage from "./pages/mainpage/page";
import LinkKakaoCalendar from "./pages/kakaologin/page";
import About from "./pages/about/page";
import Hellokitty from "./pages/test/hellokitty";
import Violet from "./pages/test/violet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/oauthkakao" element={<LinkKakaoCalendar />} />
      <Route path="/hellokitty" element={<Hellokitty />} />
      <Route path="/violet" element={<Violet />} />
      <Route path="/aboutus" element={<About />} />
    </Routes>
  );
}

export default App;