//Hooks

//component

import QnaComponent from "../component/Qna/index";
import MainpageContainer from "./styles";

const MainPage = () => {
  return (
    <MainpageContainer>
      <>
        <div className="mainpage-qna">
          <div className="QnA">
            <QnaComponent />
          </div>
        </div>
      </>
    </MainpageContainer>
  );
};

export default MainPage;
