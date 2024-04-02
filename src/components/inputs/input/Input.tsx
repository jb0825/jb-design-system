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
  defaultValue,
  disabled,
  label,
  onBlur,
  onChange,
  required,
  placeholder,
  type,
  value,
}: InputProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

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
        `}
        onBlur={onBlur}
        onChange={onInputChange}
        placeholder={placeholder}
        type={type}
        value={inputValue}
        disabled={disabled}
      />
      <span css={LabelCss}>
        {label}
        {required && <span css={LabelRequiredCss}>*</span>}
      </span>
    </div>
  );
};

Input.defaultProps = {
  defaultValue: "",
  disabled: false,
  required: false,
};
