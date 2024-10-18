import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const SwitchBoxCss = css`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;
`;

export const SwitchBar = styled.div`
  border-radius: 50px;
  width: 35px;
  height: 15px;
  background-color: #a8a8a8;
`;

export const SwitchPrimaryBarCss = css`
  background-color: var(--primary-color-20);
`;

export const SwitchButtonBoxCss = css`
  position: absolute;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease left 0.2s;
  cursor: pointer;
  :hover {
    background-color: #dddddd33;
  }
`;

export const SwitchPrimaryButtonBoxCss = css`
  :hover {
    background-color: var(--primary-color-10);
  }
`;
export const SwitchIconButtonBoxCss = css`
  width: 40px;
  height: 40px;
`;

export const SwitchButtonCss = css`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #ffffff;
  z-index: 2;
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const SwitchPrimtyButtonCss = css`
  background-color: var(--primary-color);
`;
export const SwitchIconButtonCss = css`
  width: 30px;
  height: 30px;
  & > img {
    padding: 5px;
  }
`;

export const IconImg = styled.img`
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
  user-select: none;
`;
