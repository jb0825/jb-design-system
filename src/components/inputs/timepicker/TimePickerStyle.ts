import { PRIMARY_COLOR } from "@constants/defines";
import { css } from "@emotion/react";

export const TimePickerCss = css`
  .react-datepicker {
    font-family: "Noto Sans KR", sans-serif;
  }
  .react-datepicker__header {
    padding: 12px 0;
    background-color: #ffffff;
    border-bottom: 1px solid #f1f1f1;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle {
    fill: #ffffff;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: ${PRIMARY_COLOR};
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    background-color: #f1f1f1;
    color: #000000;
    font-weight: normal;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background: #eaeaea;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #eaeaea;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #bebebe;
      border-radius: 10px;
    }
  }
`;
