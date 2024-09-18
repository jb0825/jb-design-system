import { css, keyframes } from "@emotion/react";

const open = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalBoxCss = css`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const DimCss = css`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-color: #717171;
`;

export const ModalCss = css`
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 200px);
  width: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px #60606075;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  animation: ${open} 0.25s;
`;

export const ModalHeaderCss = css`
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const ModalHeaderTextCss = css`
  flex-grow: 1;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100% - 60px);
`;

export const ModalCloseBtnCss = css`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ModalContentCss = css`
  flex-grow: 1;
`;

export const ModalFooterCss = css`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
