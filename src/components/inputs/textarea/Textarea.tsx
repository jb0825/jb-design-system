import { TextareaProps } from "@types";
import React, { useEffect, useState } from "react";
import {
  LabelCss,
  LabelRequiredCss,
  TextareaBoxCss,
  TextareaCss,
} from "./TextareaStyle";
import { css } from "@emotion/react";

export const Textarea = ({
  disabled = false,
  readonly = false,
  required = false,
  label,
  onChange,
  placeholder,
  value,
  style,
}: TextareaProps) => {
  const [textareaValue, setTextareaValue] = useState(value);

  /**
   * Textarea change event handler
   */
  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (disabled || readonly) return;

    setTextareaValue(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    setTextareaValue(value);
  }, [value]);

  return (
    <div css={TextareaBoxCss}>
      <textarea
        css={css`
          ${TextareaCss}
          ${disabled && "opacity: 0.5;"}
          ${readonly && "cursor: default;"}
          ${style && { ...style }}
        `}
        onChange={onTextareaChange}
        placeholder={placeholder}
        value={textareaValue}
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
