import { css } from "@emotion/react";

export const CheckboxBoxCss = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxCss = css`
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

export const CheckboxInputCss = css`
  width: 18px;
  height: 18px;
  position: relative;
  z-index: 2;
  cursor: pointer;
`;

export const CheckboxIndeterminateBoxCss = css`
  width: 18px;
  height: 18px;
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #767676;
  box-sizing: border-box;
  border-radius: 2.5px;
  margin-left: 1px;
`;
export const CheckboxIndeterminateCss = css`
  background: var(--primary-color);
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 1.5px;
`;

export const CheckboxLabelCss = css`
  font-size: 14px;
  margin-bottom: 2px;
  margin-left: -1px;
`;

export const LabelRequiredCss = css`
  margin-left: 2px;
`;

export const CheckboxGroupCss = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
