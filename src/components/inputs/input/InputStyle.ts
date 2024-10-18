import { css } from "@emotion/react";

/** Input Styles */
export const InputBoxCss = css`
  position: relative;
`;

export const InputCss = css`
  padding: 0 12px;
  font-size: 14px;
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  border-radius: 6px;
  outline: none;
  border: 1px solid var(--default-color);
  caret-color: var(--primary-color);
  transition: box-shadow 0.15s;
  & + span {
    color: var(--default-color);
  }

  :hover {
    border: 1px solid var(--primary-color);
    & + span {
      color: var(--primary-color);
    }
  }
  :focus {
    border: 1px solid var(--primary-color);
    box-shadow: 0 0 3px 0 var(--primary-color);
    & + span {
      color: var(--primary-color);
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
