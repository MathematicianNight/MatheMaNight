import "./GlobalStyle.css";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/mainpage/page/index";
import About from "./pages/about/page/index";
import Hellokitty from "./pages/test/hellokitty";
import Violet from "./pages/test/violet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/hellokitty" element={<Hellokitty />} />
        <Route path="/violet" element={<Violet />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </>
  );
}

export default App;