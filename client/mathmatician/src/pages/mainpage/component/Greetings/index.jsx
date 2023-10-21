import React, { useState, useEffect } from "react";

import { GreetingsContainer } from "./style";
import { Images } from "../../../../utils/style";

const Index = ({ message }) => {
  const specialIndices = [2, 4, 7, 9];

  const [bgAnimation, setBgAnimation] = useState(false);
  useEffect(() => {
    // 1초마다 배경 애니메이션 토글
    const interval = setInterval(() => {
      setBgAnimation((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <GreetingsContainer>
      <div
        className={`greetings-wrapper ${bgAnimation ? "qna-on" : "qna-off"}`}
      >
        <img src={Images.flower_above} className="greetings-flower-a" />
        {message.map((line, index) => (
          <li
            key={index}
            className={specialIndices.includes(index) ? "margin" : ""}
          >
            {line.trim()}
          </li>
        ))}
        <img src={Images.flower_bellow} className="greetings-flower-b" />
      </div>
    </GreetingsContainer>
  );
};

export default Index;
