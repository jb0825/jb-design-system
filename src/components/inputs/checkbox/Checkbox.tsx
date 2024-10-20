import { ClickAnimation } from "@components/utils";
import { CheckboxProps } from "@types";
import React, { useEffect, useState } from "react";
import {
  CheckboxBoxCss,
  CheckboxCss,
  CheckboxIndeterminateBoxCss,
  CheckboxIndeterminateCss,
  CheckboxInputCss,
  CheckboxLabelCss,
  LabelRequiredCss,
} from "./CheckboxStyle";
import { css } from "@emotion/react";

export const Checkbox = ({
  checked = false,
  disabled = false,
  indeterminate = false,
  label,
  onValueChange,
  required = false,
}: CheckboxProps) => {
  const [inputChecked, setInputChecked] = useState(checked);

  /**
   * Checkbox 영역 Click Event Handler
   */
  const onClickHandler = () => {
    if (disabled) return;

    setInputChecked(!inputChecked);
    onValueChange && onValueChange(!inputChecked);
  };

  useEffect(() => {
    setInputChecked(checked);
  }, [checked]);

  return (
    <div css={CheckboxBoxCss} onClick={onClickHandler}>
      <div css={CheckboxCss}>
        {/** Checkbox Click Animation */}
        <ClickAnimation
          size={42}
          color={"var(--primary-color)"}
          isPositionFixed={true}
          duration={400}
          disabled={disabled}
        >
          <>
            <input
              type="checkbox"
              css={CheckboxInputCss}
              readOnly={true}
              checked={inputChecked}
              disabled={disabled}
              style={{ display: indeterminate ? "none" : "initial" }}
            />
            {indeterminate && (
              <span
                css={css`
                  ${CheckboxIndeterminateBoxCss}
                  ${disabled &&
                  `opacity: 0.3; span {background: var(--default-color);}`}
                `}
              >
                <span css={CheckboxIndeterminateCss} />
              </span>
            )}
          </>
        </ClickAnimation>
      </div>
      <span
        css={css`
          ${CheckboxLabelCss}
          ${disabled && "opacity: 0.5"}
        `}
      >
        {label}
        {required && <span css={LabelRequiredCss}>*</span>}
      </span>
    </div>
  );
};
