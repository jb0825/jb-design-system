import { css } from "@emotion/react";
import { RadioProps } from "@types";
import React, { useEffect, useState } from "react";
import {
  LabelRequiredCss,
  RadioBoxCss,
  RadioCss,
  RadioInputCss,
  RadioLabelCss,
} from "./RadioStyle";
import { ClickAnimation } from "@components/utils";
import { PRIMARY_COLOR } from "@constants/defines";

export const Radio = ({
  checked = false,
  disabled = false,
  label,
  onValueChange,
  required = false,
}: RadioProps) => {
  const [inputChecked, setInputChecked] = useState(checked);

  /**
   * Radio 영역 Click Event Handler
   */
  const onClickHandler = () => {
    if (disabled || inputChecked) return;

    setInputChecked(!inputChecked);
    onValueChange && onValueChange(!inputChecked);
  };

  useEffect(() => {
    setInputChecked(checked);
  }, [checked]);

  return (
    <div css={RadioBoxCss} onClick={onClickHandler}>
      <div css={RadioCss}>
        {/** Radio Click Animation */}
        <ClickAnimation
          size={42}
          color={PRIMARY_COLOR}
          isPositionFixed={true}
          duration={400}
          disabled={disabled}
        >
          <>
            <input
              type="radio"
              css={RadioInputCss}
              readOnly={true}
              checked={inputChecked}
              disabled={disabled}
            />
          </>
        </ClickAnimation>
      </div>
      <span
        css={css`
          ${RadioLabelCss}
          ${disabled && "opacity: 0.5"}
        `}
      >
        {label}
        {required && <span css={LabelRequiredCss}>*</span>}
      </span>
    </div>
  );
};
