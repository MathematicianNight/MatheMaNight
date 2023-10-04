import "./GlobalStyle.css";
import "./assets/fonts/fonts.css";
import { Route, Routes } from "react-router-dom";

//Route
import MainPage from "./pages/mainpage/page/index";
import About from "./pages/about/page/index";
import Hellokitty from "./pages/test/hellokitty";
import Violet from "./pages/test/violet";

//Images
import { Images } from "./utils/style";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Images.background_fix})`,
        width: "100%",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Routes style="background: ">
        <Route path="/" element={<MainPage />} />
        <Route path="/hellokitty" element={<Hellokitty />} />
        <Route path="/violet" element={<Violet />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
