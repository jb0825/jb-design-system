import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AccordionBoxCss = css`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  width: 100%;
  overflow: hidden;
  & > div:last-child {
    border-bottom: none;
  }
`;

export const AccordionCss = css`
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
`;

export const AccordionLabelCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  padding: 0 10px 0 15px;
  background-color: #f9f9f9;
  box-shadow: 0px 1px #c4c4c4;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

export const LabelImg = styled.img`
  width: 25px;
  user-select: none;
  transition: transform 0.25s;
`;

export const AccordionContentCss = css`
  font-size: 12px;
  transition: all 0.25s;
  max-height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;
