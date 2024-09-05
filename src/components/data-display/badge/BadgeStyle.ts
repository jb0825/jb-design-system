import { css } from "@emotion/react";

export const BadgeBoxCss = css`
  position: relative;
`;

export const BadgeCss = css`
  position: absolute;
  z-index: 2;
  top: -6px;
  right: -6px;
  min-width: 16px;
  height: 16px;
  padding: 4px;
  box-sizing: border-box;
  background-color: #da3f27;
  border-radius: 50px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;
