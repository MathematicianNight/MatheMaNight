import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const CalendarContainer = styled.section`
  /* &, & * {border: 1px solid red;} */
  box-sizing: border-box;
  border-radius: 15%;
  font-family: 'DM Serif Display', serif;
  background-color: ${Colors.White};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .month {
    color: ${Colors.PersianRed};
    align-self: flex-start;
    margin: -7px 0 0px 12px;
  }
  .day {color: ${Colors.RawBlack};}
  .time {color: ${Colors.RawGray}; margin-top: 1px;}

  grid-row: 1 / 2;
  grid-column: 1 / 2;
  width: 100%;
  height: 100%;
`;

export default CalendarContainer;