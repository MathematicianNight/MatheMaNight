import styled from "@emotion/styled";
import { Images, Colors } from "../../../../utils/style";
import "../../../../assets/fonts/fonts.css";

const CalendarContainer = styled.section`
  /* border: 1px solid aqua; box-sizing: border-box; */
  /* & > * {border: 1px solid red; box-sizing: border-box;} */
  border-radius: 19px;
  font-family: 'DM Serif Display', serif;
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
  .day {color: ${Colors.RawBlack};}
  .time {color: ${Colors.RawGray};}
  @media (max-width: 321px) { // 321 미만
    width: 95%;
    height: 95%;
    line-height: 37px;
    .month {font-size: 15px;}
    .day {font-size: 64px;}
    .time {font-size: 20px}
  }
  @media (min-width: 321px) and (max-width: 391px) { // 321 이상 391 미만
    width: 99%;
    height: 99%;
    line-height: 48px;
    .month {font-size: 17px;}
    .day {font-size: 80px;}
    .time {font-size: 25px}
  }
  @media (min-width: 391px) { // 391 이상
    width: 100%;
    height: 100%;
    line-height: 57px;
    .month {font-size: 21px;}
    .day {font-size: 98px;}
    .time {font-size: 30px}
  } 

  & > span {
    border: 1px solid red; box-sizing: border-box;
    display: block;
  }

`;

export default CalendarContainer;