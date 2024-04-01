import React from "react";
import { ButtonProps } from "@types";
import {
  ButtonCss,
  ButtonDefaultCss,
  ButtonIconCss,
  ButtonLabelCss,
  ButtonPrimaryCss,
} from "./ButtonStyle";
import { Global, css } from "@emotion/react";
import {
  AnimationConfig,
  ClickAnimation,
  GlobalCss,
} from "@utils/clickAnimation";
import { PRIMARY_COLOR } from "@constants/defines";

export const Button = ({
  disabled,
  icon,
  label,
  onClick,
  type,
  width,
  height,
}: ButtonProps) => {
  /**
   * Button Click Event Handler
   */
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick();
  };

  /**
   * Button 타입별 CSS 를 반환
   */
  const getButtonCss = () => {
    switch (type) {
      case "default":
        return ButtonDefaultCss;
      case "primary":
        return ButtonPrimaryCss;
      case "icon":
        return ButtonIconCss;
    }
  };

  /**
   * Button 타입별 클릭 애니메이션 설정을 반환
   */
  const getClickAnimationConfig = () => {
    const config: AnimationConfig = {
      duration: 300,
    };

    switch (type) {
      case "default":
        config.color = PRIMARY_COLOR;
        config.size = 200;
        break;
      case "primary":
        config.size = 200;
        break;
      case "icon":
        const size = width?.replace(/[^0-9]/g, "");
        config.size = (width && Number(size)) || 40;
        config.isPositionFixed = true;
        config.color = "#919191";
        break;
    }

    return config;
  };

  return (
    <>
      <Global
        styles={css`
          ${GlobalCss}
        `}
      />
      <div
        css={css`
          ${ButtonCss}
          ${getButtonCss()}
          ${disabled && "opacity: 0.5; cursor: default;"}
          ${width && `width: ${width};`}
          ${height && `height: ${height};`}
          max-width : ${width || "200px"};
        `}
        onClick={onClickHandler}
      >
        {icon && <img src={icon} />}
        {type !== "icon" && label && <span css={ButtonLabelCss}>{label}</span>}
        {/** Button Click Animation */}
        {!disabled && <ClickAnimation {...getClickAnimationConfig()} />}
      </div>
    </>
  );
};

Button.defaultProps = {
  disabled: false,
  type: "default",
};
