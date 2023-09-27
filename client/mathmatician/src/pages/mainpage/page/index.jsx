import React from "react";

import { MainpageContainer } from "./styles";
import Mapfunction from "../component/mapComponent/index";

const mainPage = () => {
  return (
    <MainpageContainer>
      여기가 mainpage
      <div className="Container">
        <Mapfunction />
      </div>
    </MainpageContainer>
  );
};

export default mainPage;
