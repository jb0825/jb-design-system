import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const LeafDiv = styled.div<{
  depth: number;
  selected: boolean;
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  height: 28px;
  cursor: pointer;
  padding-left: ${({ depth }) => depth}rem;
  ${({ selected, disabled }) =>
    disabled
      ? "opacity: 0.4; cursor: not-allowed;"
      : selected && "color: #1976d2;"}

  // 확장/숨김 이미지 버튼
    & > img {
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    flex-grow: 0;
  }
  // 아이템 텍스트
  & > span {
    padding: 1px 10px;
    flex-grow: 1;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${({ selected }) => selected && "background-color: #f8f8f8;"}
  }
  & > img,
  & > span {
    user-select: none;
    // hover style
    border-radius: 6px;
    transition: background-color 0.2s;
    &:hover {
      background-color: #e8e8e8;
    }
  }
`;

export const Space = styled.div`
  width: 26px;
  height: 26px;
`;

export const SubTreeBoxCss = css`
  overflow: hidden;
  transition:
    max-height 0.2s,
    opacity 0.3s;
`;
