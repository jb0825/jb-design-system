import { ClickAnimation } from "@components/utils";
import { DEFAULT_COLOR, PRIMARY_COLOR } from "@constants/defines";
import { css } from "@emotion/react";
import { SwitchProps } from "@types";
import React, { useState } from "react";
import {
  IconImg,
  SwitchBar,
  SwitchBoxCss,
  SwitchButtonBoxCss,
  SwitchButtonCss,
  SwitchIconButtonBoxCss,
  SwitchIconButtonCss,
  SwitchPrimaryBarCss,
  SwitchPrimaryButtonBoxCss,
  SwitchPrimtyButtonCss,
} from "./SwitchStyle";

export const Switch = ({
  checked = false,
  disabled = false,
  icon,
  offIcon,
  onChange,
  type = "default",
}: SwitchProps) => {
  const [switchOn, setSwitchOn] = useState(checked);

  /**
   * Switch click event handler
   */
  const onClickHandler = () => {
    if (disabled) return;
    onChange && onChange(!switchOn);
    setSwitchOn(!switchOn);
  };

  /**
   * Switch 타입별 CSS 반환
   * ✅ primary - size: 30px
   * ✅ icon - size: 40px
   */
  const getButtonBoxCss = () => {
    switch (type) {
      case "primary":
        return SwitchPrimaryButtonBoxCss;
      case "icon":
        return SwitchIconButtonBoxCss;
    }
  };

  /**
   * Switch 타입별 CSS 반환
   */
  const getButtonCss = () => {
    switch (type) {
      case "primary":
        return SwitchPrimtyButtonCss;
      case "icon":
        return SwitchIconButtonCss;
    }
  };

  return (
    <div
      css={css`
        ${SwitchBoxCss}
        ${disabled && "opacity: 0.5;"}
      `}
      onClick={onClickHandler}
    >
      <SwitchBar css={type === "primary" && SwitchPrimaryBarCss} />
      <span
        css={css`
          ${SwitchButtonBoxCss}
          ${disabled && "cursor: default;"}
          ${getButtonBoxCss()}
          left: ${switchOn
            ? type == "icon"
              ? "-10px"
              : "0"
            : "calc(100% - 30px)"};
        `}
      >
        <ClickAnimation
          size={40}
          duration={300}
          isPositionFixed={true}
          color={type === "primary" ? PRIMARY_COLOR : DEFAULT_COLOR}
          disabled={disabled}
        >
          <span
            css={css`
              ${SwitchButtonCss}
              ${getButtonCss()}
            `}
          >
            {(icon || offIcon) && (
              <IconImg src={(switchOn && offIcon) || icon} />
            )}
          </span>
        </ClickAnimation>
      </span>
    </div>
  );
};
