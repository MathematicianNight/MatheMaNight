import { Route, Routes } from "react-router-dom";
import "./GlobalStyle.css";
import "./assets/fonts/fonts.css";

import MainPage from "./pages/mainpage/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mainpage" element={<MainPage />} />
    </Routes>
  );
}

export default App;
