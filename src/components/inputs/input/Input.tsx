import React, { useEffect, useState } from "react";
import {
  InputBoxCss,
  InputCss,
  LabelCss,
  LabelRequiredCss,
} from "./InputStyle";
import { InputProps } from "@types";
import { css } from "@emotion/react";

export const Input = ({
  autoComplete,
  defaultValue = "",
  disabled = false,
  label,
  onBlur,
  onChange,
  readonly = false,
  required = false,
  placeholder,
  type,
  value,
}: InputProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  /**
   * Input Change Event Handler
   */
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readonly) return;

    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    setInputValue(value || defaultValue);
  }, [value]);

  return (
    <div css={InputBoxCss}>
      <input
        autoComplete={autoComplete}
        css={css`
          ${InputCss}
          ${disabled && "opacity: 0.5;"}
          ${readonly && "cursor: default;"}
        `}
        onBlur={onBlur}
        onChange={onInputChange}
        placeholder={placeholder}
        type={type}
        value={inputValue}
        disabled={disabled}
        readOnly={readonly}
      />
      <span css={LabelCss}>
        {label}
        {required && <span css={LabelRequiredCss}>*</span>}
      </span>
    </div>
  );
};
