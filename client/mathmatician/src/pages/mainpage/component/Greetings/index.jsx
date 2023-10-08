import React, { useState, useEffect } from "react";

import { GreetingsContainer } from "./style";
import { Images } from "../../../../utils/style";

const Index = ({ message }) => {
  const specialIndices = [2, 6, 10, 12];

  return (
    <GreetingsContainer>
      <div className="greetings-wrapper">
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
