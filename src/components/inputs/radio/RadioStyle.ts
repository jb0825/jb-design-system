import { css } from "@emotion/react";

export const RadioBoxCss = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const RadioCss = css`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  :hover {
    background: #f9f9f9;
  }
`;

export const RadioInputCss = css`
  width: 18px;
  height: 18px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  margin: 0;
`;

export const RadioLabelCss = css`
  font-size: 14px;
  margin-bottom: 2px;
  margin-left: -1px;
`;

export const LabelRequiredCss = css`
  margin-left: 2px;
`;

export const RadioGroupCss = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
