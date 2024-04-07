import { DEFAULT_COLOR, PRIMARY_COLOR } from "@constants/defines";
import { css } from "@emotion/react";

/**
 * react-datepicker CSS 재정의
 */
export const DatePickerCss = css`
  .react-datepicker {
    font-family: "Noto Sans KR", sans-serif;
  }
  .react-datepicker__header {
    padding: 12px 0;
    background-color: #ffffff;
    border-bottom: 1px solid #f1f1f1;
  }
  .react-datepicker__day-names {
    padding: 5px 0;
  }
  .react-datepicker__current-month {
    font-size: 14px;
    font-weight: 600;
  }
  .react-datepicker__month {
    margin: 15px;
  }
  .react-datepicker__day {
    margin: 0.2rem;
    border-radius: 50%;
  }
  .react-datepicker__day--selected {
    background-color: ${PRIMARY_COLOR};
  }
  .react-datepicker__day--today {
    background-color: #f1f1f1;
    color: #000000;
  }
  .react-datepicker__day--outside-month {
    color: #cdcdcd;
  }
  .react-datepicker__navigation {
    top: 7px;
  }
  .react-datepicker__navigation-icon::before {
    border-color: #8b8b8b;
    border-width: 2px 2px 0 0;
    width: 7px;
    height: 7px;
    top: 8px;
  }
`;
