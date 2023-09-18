import "./GlobalStyle.css";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/mainpage/page/index";
import About from "./pages/about/page/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
