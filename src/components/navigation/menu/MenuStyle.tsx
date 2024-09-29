import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MaskIcon = styled.div<{ icon?: string; selected: boolean }>`
  ${({ icon }) => !icon && "display: none; "}
  width: 20px;
  height: 20px;
  mask: url(${({ icon }) => icon}) no-repeat;
  mask-size: cover;
  background-color: ${({ selected }) => (selected ? "#1976d2" : "#7e7e7e")};
`;

export const HorizontalBoxCss = css`
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;

  & > div {
    position: relative;
    &:hover {
      & > div:last-of-type {
        opacity: 1;
        max-height: 1000px;
      }
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const HorizontalMenuCss = css`
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition:
    border 0.2s,
    color 0.2s;
  border-bottom: 2px solid transparent;
  position: relative;
  & > img {
    width: 20px;
    margin-left: -5px;
  }
  &:hover {
    border-bottom: 2px solid #1976d2;
  }
`;

export const HorizontalSubmenuBoxCss = css`
  opacity: 0;
  max-height: 0;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 10px 0;
  width: 100%;

  & > div {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px #96969675;
    overflow: hidden;
    box-sizing: border-box;
    color: #000;
  }
`;

export const VerticalBoxCss = css`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  &,
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const VerticalMenuCss = css`
  padding: 4px;
  box-sizing: border-box;
  transition: margin-bottom 0.2s;
  border-bottom: 1px solid #e8e8e8;
`;

export const SubMenuBoxCss = css`
  transition:
    max-height 0.2s,
    opacity 0.5s;
  overflow: hidden;
  background: #f8f8f8;
  border-bottom: 1px solid #e8e8e8;
`;

export const ItemCss = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  box-sizing: border-box;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  & > span {
    flex-grow: 1;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
