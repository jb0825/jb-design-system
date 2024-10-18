import { css } from "@emotion/react";

/** Button Styles  */
export const ButtonCss = css`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid var(--primary-color);
  cursor: pointer;
  user-select: none;
  position: relative;
  width: fit-content;
  height: 36px;
`;

export const ButtonDefaultCss = css`
  color: var(--primary-color);
`;

export const ButtonPrimaryCss = css`
  color: #ffffff;
  background: var(--primary-color);
`;

export const ButtonIconCss = css`
  padding: 10px;
  border-radius: 50%;
  border: none;
  :hover {
    background: #f9f9f9;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonLabelCss = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
