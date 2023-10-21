import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const CalendarContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  border-radius: 19px;
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  background-color: ${Colors.White};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .month {
    align-self: flex-start;
    font-size: 15px;
    color: ${Colors.PersianRed};
    margin: 0 0 -1px 13px;
  }
  .day {
    font-size: 85px;
    color: ${Colors.RawBlack};
  }
  .time {
    font-size: 30px;
    color: ${Colors.RawGray};
  }
  @media (max-height: 795px) {
    .month {
      font-size: 13px;
    }
    .day {
      font-size: 80px;
    }
    .time {
      font-size: 27px;
    }
  }
  @media (max-height: 725px) {
    .day {
      font-size: 73px;
    }
    .time {
      font-size: 23px;
    }
  }
  @media (max-height: 650px) {
    .month {
      font-size: 12px;
    }
    .day {
      font-size: 65px;
    }
    .time {
      font-size: 21px;
    }
  }
  @media (max-height: 590px) {
    .month {
      font-size: 10px;
    }
    .day {
      font-size: 58px;
    }
    .time {
      font-size: 16px;
    }
  }
`;

export default CalendarContainer;
