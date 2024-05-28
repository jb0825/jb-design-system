import React, { useEffect, useState } from "react";
import { Input } from "../input/Input";
import { css } from "@emotion/react";
import {
  InputBoxCss,
  SelectBoxCss,
  SelectCss,
  SelectIconCss,
} from "./SelectStyle";
import { Options, SelectProps } from "@types";
import { arrow } from "@icons";

export const Select = ({
  disabled = false,
  label,
  options = [],
  onValueChange,
  readonly = false,
  required = false,
  value,
}: SelectProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState<Options>();

  /**
   * InputBox blur event handler
   */
  const onInputBlurHandler = () => {
    setTimeout(() => {
      setIsOpened(false);
    }, 200);
  };

  /**
   * InputBox click event handler
   */
  const onInputClickHandler = () => {
    setIsOpened(!isOpened);
  };

  /**
   * Select Option click handler
   */
  const onOptionClickHandler = (option: Options) => {
    setIsOpened(false);
    setSelected(option);
    onValueChange(option.value);
  };

  useEffect(() => {
    if (value) setSelected(options.find((option) => option.value === value));
    else setSelected(undefined);
  }, [value]);

  return (
    <div>
      <div
        css={InputBoxCss}
        onBlur={onInputBlurHandler}
        onClick={onInputClickHandler}
      >
        <img
          css={css`
            ${SelectIconCss}
            ${isOpened && `transform: rotate(180deg)`}
          `}
          src={arrow}
        />
        <Input
          label={label}
          disabled={disabled}
          readonly={true}
          required={required}
          value={selected?.label}
        />
      </div>
      <div css={SelectBoxCss}>
        <ul
          css={css`
            ${SelectCss}
            display: ${!disabled && !readonly && isOpened ? "block" : "none"};
          `}
        >
          {options.map((option) => (
            <li
              aria-disabled={option.disabled}
              aria-selected={option.value === selected?.value}
              key={option.value}
              onClick={
                option.disabled ? undefined : () => onOptionClickHandler(option)
              }
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
