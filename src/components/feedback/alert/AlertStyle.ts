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

export const SuccessAlertCss = css`
  ${AlertCss}
  color: var(--success-color-dark);
  background: var(--success-color-light);
`;

export const InfoAlertCss = css`
  ${AlertCss}
  color: var(--info-color-dark);
  background: var(--info-color-light);
`;

export const WarnAlertCss = css`
  ${AlertCss}
  color: var(--warning-color-dark);
  background: var(--warning-color-light);
`;

export const ErrorAlertCss = css`
  ${AlertCss}
  color: var(--error-color-dark);
  background: var(--error-color-light);
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
