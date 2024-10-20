import { css } from "@emotion/react";

export const TextareaBoxCss = css`
  position: relative;
`;

export const TextareaCss = css`
  font-size: 14px;
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  border-radius: 6px;
  outline: none;
  padding: 7px 12px;
  border: 1px solid var(--default-color);
  caret-color: var(--primary-color);

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
  & + span {
    color: var(--default-color);
  }
  :focus {
    border: 2px solid var(--primary-color);
    & + span {
      color: var(--primary-color);
      left: 9px;
    }
  }
  ::placeholder {
    color: #bebebe;
  }
`;

export const LabelCss = css`
  position: absolute;
  top: -8px;
  left: 8px;
  background: #fff;
  padding: 0 2px;
  font-size: 12px;
`;

export const LabelRequiredCss = css`
  margin-left: 2px;
`;
