import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const CalendarContainer = styled.section`
  /* border: 1px solid red; box-sizing: border-box; */
  font-family: 'DM Serif Display', serif;
  width: 155px;
  height: 155px;
  border-radius: 20px;
  background-color: ${Colors.White};
  & > span {
    border: 1px solid red; box-sizing: border-box;
    display: block;
  }
  & > .month {
    font-size: 15px;
    color: ${Colors.PersianRed};
  }

  & > .day {
    font-size: 85px;
    color: ${Colors.RawBlack};
  }

  & > .time {
    font-size: 30px;
    color: ${Colors.RawGray};
  }
`;

export default CalendarContainer;