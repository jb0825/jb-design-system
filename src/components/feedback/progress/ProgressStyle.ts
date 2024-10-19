import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ProgressBoxCss = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LineProgressBarCss = css`
  height: 10px;
  flex-grow: 1;
  border-radius: 8px;
  background-color: var(--default-color-light);
  overflow: hidden;
`;

export const LineProgressCss = css`
  border-radius: 8px;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const LinePercentBoxCss = css`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
`;

export const LinePercentIconCss = css`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 3px;
`;

export const ProgressLoadingCss = css`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.01),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.01)
  );
  animation: translateX 1.4s ease infinite;
`;

/**
 * CircleProgress 에서 쓰이는 색상 적용된 icon
 */
export const CircleMaskIcon = styled.div<{ icon: string; color: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 34%;
  height: 34%;
  min-width: 24px;
  min-height: 24px;
  background-color: ${({ color }) => color};
  mask: url(${({ icon }) => icon}) no-repeat;
  mask-size: cover;
`;
