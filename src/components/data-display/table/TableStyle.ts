import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TableBoxCss = css`
  width: 100%;
  height: 100%;
  overflow: auto;
  border: 1px solid #dddddd;
  border-radius: 6px 6px 0px 0px;
  box-sizing: border-box;

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
`;

export const TableCss = css`
  width: 100%;
  background-color: #f9f9f9;
  border-spacing: 0px;
  border-collapse: separate;
`;

export const TableHeadCss = css`
  position: sticky;
  top: 0px;
  height: 36px;
  background-color: #f9f9f9;
  z-index: 3;
`;

export const TableBodyCss = css`
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-top: none;
  box-sizing: border-box;
  tr {
    background-color: #ffffff;
  }
  tr:hover {
    background-color: #f9f9f90d;
  }
  tr:last-chlid td {
    border-bottom: none;
  }
`;

export const TableFootCss = css`
  position: sticky;
  bottom: 0px;
  height: 36px;
  background-color: #ffffff;
  z-index: 1;
`;

export const TableRowCss = css`
  width: fit-content;
  height: 36px;
`;

export const TableHeadCellCss = css`
  position: relative;
  font: 500 14px "Noto Sans KR";
  height: 36px;
  padding: 2px 8px;
  box-sizing: border-box;
  border-bottom: 1px solid #dddddd;
  text-align: center;
  color: #0f0f0f;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:last-child {
    border-right: 0px solid #dddddd;
  }
`;

export const HeadCell = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;
export const SortHeadCell = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > div {
    width: 100%;
  }
`;

export const TableBodyCellCss = css`
  position: relative;
  font: 400 14px "Noto Sans KR";
  color: #0f0f0f;
  padding: 2px 10px;
  border-bottom: 1px solid #f3f3f3;
  box-sizing: border-box;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableFootCellCss = css`
  position: relative;
  font: 500 14px "Noto Sans KR";
  border-bottom: none;
  border-top: 1px solid #dddddd;
`;

/** Resizer */
export const ResizerBoxCss = css`
  position: absolute;
  top: 0;
  right: -7px;
  width: 5px;
  height: 100%;
  padding: 0 5px;
  cursor: col-resize;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResizerCss = css`
  background: #dddddd;
  width: 1px;
  height: 60%;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
