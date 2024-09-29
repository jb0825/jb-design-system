import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const LayoutDiv = styled.div<{ hasSider: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  flex-direction: ${({ hasSider }) => (hasSider ? "row" : "column")};
`;

export const HeaderCss = css`
  width: 100%;
  flex-shrink: 0;
`;

export const ContentCss = css`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;

export const SiderCss = css`
  height: 100%;
  flex-shrink: 0;
`;
