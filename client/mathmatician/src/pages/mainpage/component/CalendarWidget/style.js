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
  .month { // 775 이상 400 미만 355 이상
    align-self: flex-start;
    font-size: 15px;
    color: ${Colors.PersianRed};
    margin: 0 0 -1px 13px;
  }
  .day {
    font-size: 85px;
    color: ${Colors.RawBlack};
    margin-bottom: 0px;
  }
  .time {
    font-size: 30px;
    color: ${Colors.RawGray};
  }

  @media (min-height: 775px) and (min-width: 400px) { // 775 이상 400 이상
    .month {
      font-size: 17px;
    }
    .day {
      font-size: 90px;
    }
    .time {
      font-size: 32px;
    }
  }
  @media (min-height: 775px) and (max-width: 355px) { // 775 이상 355 미만
    .month {
      font-size: 14px;
    }
    .day {
      font-size: 74px;
    }
    .time {
      font-size: 25px;
    }
  }
  @media (min-height: 775px) and (max-width: 315px) { // 775 이상 315 미만
    .month {
      font-size: 11px;
    }
    .day {
      font-size: 60px;
    }
    .time {
      font-size: 21px;
    }
  }

  @media (max-height: 775px) { // 775 미만 355 이상
    .month {
      font-size: 14px;
    }
    .day {
      font-size: 74px;
    }
    .time {
      font-size: 25px;
    }
    @media (max-width: 355px) { // 775 미만 355 미만
      .month {
        font-size: 13px;
      }
      .day {
        font-size: 69px;
      }
      .time {
        font-size: 24px;
      }
    }
    @media (max-width: 305px) { // 775 미만 305 미만
      .month {
        font-size: 11px;
      }
      .day {
        font-size: 60px;
      }
      .time {
        font-size: 21px;
      }
    }
  }

  @media (max-height: 650px) { // 650 미만 305 이상
    .month {
      font-size: 13px;
    }
    .day {
      font-size: 69px;
    }
    .time {
      font-size: 24px;
    }
    @media (max-width: 305px) { // 650 미만 305 미만
      .month {
        font-size: 11px;
      }
      .day {
        font-size: 60px;
      }
      .time {
        font-size: 21px;
      }
    }
  }

  @media (max-height: 580px) { // 580 미만
    .month {
      font-size: 11px;
    }
    .day {
      font-size: 60px;
    }
    .time {
      font-size: 21px;
    }
  }
`;

export default CalendarContainer;
