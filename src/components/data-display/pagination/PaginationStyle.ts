import { css } from "@emotion/react";

export const PaginationCss = css`
  display: flex;
  width: 100%;
`;

export const PaginationButtonsCss = css`
  display: flex;
  align-items: center;
  margin: 0 10px;
  & > img {
    width: 36px;
    height: 36px;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const NumberButtonsCss = css`
  display: flex;
  gap: 5px;
  margin: 0 10px;
`;

export const NumberButtonCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 14px;
  user-select: none;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const SelectBoxCss = css`
  width: 100px;
`;

export const imgRotateStyle = { rotate: "180deg" };
