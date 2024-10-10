import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const IndexBar = styled.div<{ selected: boolean }>`
  width: 28px;
  height: 6px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #ffffff66;
  transition: width 0.2s ease;
  ${({ selected }) =>
    selected &&
    `
      width: 40px;
      background-color: #fff;
    `}
`;

export const ArrowBox = styled.div<{
  visible: boolean;
  position?: "left" | "right";
}>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  position: absolute;
  top: 0;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
  align-items: center;
  box-sizing: border-box;
  &:hover {
    & > div {
      border-color: #fff;
    }
  }
  ${({ position }) =>
    position == "right"
      ? "right: 0; & > div { transform: rotate(225deg); }"
      : "left: 0;"}
`;

export const ArrowIcon = styled.div`
  width: 18px;
  height: 18px;
  transform: rotate(45deg);
  border-left: 5px solid;
  border-bottom: 5px solid;
  border-color: #ffffff66;
`;

export const CarouselBoxCss = css`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const CarouselCss = css`
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.4s;
`;

export const indexBarBoxCss = css`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  display: flex;
  gap: 10px;
`;
