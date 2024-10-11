import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const color = "rgba(0, 0, 0, 0.06)";

const loading = keyframes`
0% {
  transform: translateX(-100%);
}
100% {
  transform: translateX(100%);
}
`;

export const MaskIcon = styled.div<{ icon?: string }>`
  width: 60%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #bfbfbf;
  mask: url(${({ icon }) => icon}) no-repeat;
  mask-size: cover;
`;

export const SkeletonBox = styled.div<{ width?: string; height?: string }>`
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
border-radius: 6px;
  overflow: hidden;
  background: linear-gradient(45deg, ${color}, ${color} 0%, ${color});
  position: relative;
`;

export const SkeletonLoadingCss = css`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.001),
    rgba(0, 0, 0, 0.04),
    rgba(0, 0, 0, 0.001)
  );
  animation: ${loading} 1.4s ease infinite;
`;
