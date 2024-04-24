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
  width: 100%;
  height: 36px;
  border-radius: 6px;
  outline: none;
  border: 1px solid ${DEFAULT_COLOR};
  caret-color: ${PRIMARY_COLOR};
  transition: box-shadow 0.15s;
  & + span {
    color: ${DEFAULT_COLOR};
  }

  :hover {
    border: 1px solid ${PRIMARY_COLOR};
    & + span {
      color: ${PRIMARY_COLOR};
    }
  }
  :focus {
    border: 1px solid ${PRIMARY_COLOR};
    box-shadow: 0 0 3px 0 ${PRIMARY_COLOR};
    & + span {
      color: ${PRIMARY_COLOR};
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
