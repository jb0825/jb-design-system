import { DEFAULT_COLOR, PRIMARY_COLOR } from "@constants/defines";
import { css } from "@emotion/react";

/** Input Styles */
export const InputBoxCss = css`
  position: relative;
`;

export const InputCss = css`
  font-family: "Noto Sans KR", sans-serif;
  padding: 0 12px;
  font-size: 14px;
  box-sizing: border-box;
  height: 36px;
  border-radius: 6px;
  outline: none;
  border: 1px solid ${DEFAULT_COLOR};
  caret-color: ${PRIMARY_COLOR};
  & + span {
    color: ${DEFAULT_COLOR};
  }
  :focus {
    border: 2px solid ${PRIMARY_COLOR};
    & + span {
      color: ${PRIMARY_COLOR};
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
