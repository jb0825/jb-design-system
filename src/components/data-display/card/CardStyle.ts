import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CardBox = styled.div<{ width?: string; height?: string }>`
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  border-radius: 8px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  overflow: hidden;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0px 0px 14px 0px #60606075;
  }
  & > div:last-of-type {
    border-bottom: none;
  }
`;

export const CardCover = styled.img<{ height?: string }>`
  ${({ height }) => height && `height: ${height};`}
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
`;

export const CardTitleCss = css`
  padding: 20px;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #dddddd;
`;
export const CardContentCss = css`
  padding: 20px;
`;
