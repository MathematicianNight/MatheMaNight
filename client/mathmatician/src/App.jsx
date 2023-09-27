import "./GlobalStyle.css";
import { Route, Routes } from "react-router-dom";

//Route
import MainPage from "./pages/mainpage/page/index";
import About from "./pages/about/page/index";
import Hellokitty from "./pages/test/hellokitty";
import Violet from "./pages/test/violet";

//Images
// import { Images } from "../src/util/style";
import background_fix from "./asset/images/background_gra.svg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background_fix})`,
        width: "100%",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Routes style="background: ">
        <Route path="/" element={<MainPage />} />
        <Route path="/hellokitty" element={<Hellokitty />} /> {/*테스트용*/}
        <Route path="/violet" element={<Violet />} /> {/*테스트용*/}
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
