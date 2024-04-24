import { PRIMARY_COLOR } from "@constants/defines";
import { css } from "@emotion/react";

export const SelectBoxCss = css`
  position: relative;
`;

export const SelectCss = css`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  list-style-type: none;
  position: absolute;
  top: 5px;
  left: 0;
  padding: 0;
  margin: 0;
  border: 1px solid #aeaeae;
  border-radius: 6px;
  box-sizing: border-box;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: #ffffff;

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
  li {
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
  li:hover {
    background-color: ${PRIMARY_COLOR}26;
  }
  li[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #f1f1f1;
  }
  li[aria-selected="true"] {
    background-color: ${PRIMARY_COLOR};
    color: #ffffff;
  }
`;

export const InputBoxCss = css`
  position: relative;
  input {
    padding-right: 20px;
  }
`;

export const SelectIconCss = css`
  position: absolute;
  z-index: 2;
  right: 2px;
  top: calc(50% - 10px);
  cursor: pointer;
`;
