import { css, keyframes } from "@emotion/react";

const open = keyframes`
  0% {
    transform: translateX(100%); 
    opacity: 0;
  }
  100% {
    transform: translateX(0); 
    opacity: 1;
  }
`;

const AlertCss = css`
  position: relative;
  padding: 16px;
  border-radius: 6px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  box-shadow: 0px 0px 8px 0px #60606075;
  animation: ${open} 0.1s;
  z-index: 1;

  & > img:first-of-type {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
  & > div {
    width: 100%;
  }
`;

const SUCCESS_COLOR = "#245327";
const SUCCESS_BACKGROUND = "#edf7ed";
const INFO_COLOR = "#286281";
const INFO_BACKGROUND = "#e5f6fd";
const WARNING_COLOR = "#8d4a12";
const WARNING_BACKGROUND = "#fff4e5";
const ERROR_COLOR = "#832929";
const ERROR_BACKGROUND = "#fdeded";

export const SuccessAlertCss = css`
  ${AlertCss}
  color: ${SUCCESS_COLOR};
  background: ${SUCCESS_BACKGROUND};
`;

export const InfoAlertCss = css`
  ${AlertCss}
  color: ${INFO_COLOR};
  background: ${INFO_BACKGROUND};
`;

export const WarnAlertCss = css`
  ${AlertCss}
  color: ${WARNING_COLOR};
  background: ${WARNING_BACKGROUND};
`;

export const ErrorAlertCss = css`
  ${AlertCss}
  color: ${ERROR_COLOR};
  background: ${ERROR_BACKGROUND};
`;

export const ContentCss = css`
  flex-grow: 1;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const TitleCss = css`
  font-weight: 500;
  font-size: 16px;
`;

export const DescriptionCss = css`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CloseBtnCss = css`
  width: 20px;
  height: 20px;
  cursor: pointer;
  flex-shrink: 0;
`;
