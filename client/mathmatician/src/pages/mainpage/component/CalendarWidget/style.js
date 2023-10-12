import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const CalendarContainer = styled.section`
  /* border: 1px solid aqua; */
  &,
  & * {
    box-sizing: border-box;
  }
  border-radius: 19px;
  font-family: "DM Serif Display", serif;
  background-color: ${Colors.White};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .month {
    color: ${Colors.PersianRed};
    align-self: flex-start;
    margin: -3px 0 -4px 12px;
  }
  .day {
    color: ${Colors.RawBlack};
  }
  .time {
    color: ${Colors.RawGray};
    margin-top: 1px;
  }

  grid-row: 1 / 2;
  grid-column: 1 / 2;
  margin-left: 6.5px;
  width: 100%;
  height: 100%;
  @media (max-width: 321px) {
    line-height: 37px;
    .month {
      font-size: 15px;
    }
    .day {
      font-size: 64px;
    }
    .time {
      font-size: 20px;
    }
  }
  @media (min-width: 321px) and (max-width: 391px) {
    line-height: 48px;
    .month {
      font-size: 17px;
    }
    .day {
      font-size: 80px;
    }
    .time {
      font-size: 25px;
    }
  }
  @media (min-width: 391px) {
    line-height: 57px;
    .month {
      font-size: 21px;
    }
    .day {
      font-size: 98px;
    }
    .time {
      font-size: 30px;
    }
  }
`;

export default CalendarContainer;
