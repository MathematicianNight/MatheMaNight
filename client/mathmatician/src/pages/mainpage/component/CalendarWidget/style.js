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
    margin-bottom: 0px;
  }
  .time {
    font-size: 30px;
    color: ${Colors.RawGray};
  }
  @media (min-width: 400px) {
    .month {
      font-size: 17px;
    }
    .day {
      font-size: 94px;
    }
    .time {
      font-size: 32px;
    }
  }
  @media (max-width: 355px) {
    .month {
      font-size: 14px;
    }
    .day {
      font-size: 79px;
    }
    .time {
      font-size: 27px;
    }
  }
  @media (max-width: 315px) {
    .month {
      font-size: 12px;
    }
    .day {
      font-size: 66px;
    }
    .time {
      font-size: 22px;
    }
  }
  @media (max-height: 775px) {
    .month {
      font-size: 14px;
    }
    .day {
      font-size: 74px;
    }
    .time {
      font-size: 25px;
    }
    @media (max-width: 305px) {
      .month {
        font-size: 12px;
      }
      .day {
        font-size: 66px;
      }
      .time {
        font-size: 22px;
      }
    }
  }
  @media (max-height: 650px) {
    .month {
      font-size: 13px;
    }
    .day {
      font-size: 71px;
    }
    .time {
      font-size: 24px;
    }
    @media (max-width: 290px) {
      .month {
        font-size: 12px;
      }
      .day {
        font-size: 66px;
      }
      .time {
        font-size: 22px;
      }
    }
  }
  @media (max-height: 580px) {
    .month {
      font-size: 11px;
    }
    .day {
      font-size: 60px;
    }
    .time {
      font-size: 19px;
    }
  }
`;

export default CalendarContainer;
