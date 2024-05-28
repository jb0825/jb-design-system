import { RadioGroupProps } from "@types";
import React, { useEffect, useMemo, useState } from "react";
import { RadioGroupCss } from "./RadioStyle";
import { Radio } from "./Radio";

export const RadioGroup = ({
  disabled = false,
  items,
  onValueChange,
  value = "",
}: RadioGroupProps) => {
  const [inputValue, setInputValue] = useState<string>(value);

  const radioItems = useMemo(() => {
    return (
      <>
        {items.map((item) => (
          <Radio
            key={item.value}
            checked={inputValue === item.value}
            disabled={disabled || item.disabled}
            label={item.label}
            onValueChange={() => setInputValue(item.value)}
          />
        ))}
      </>
    );
  }, [disabled, items, inputValue]);

  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return <div css={RadioGroupCss}>{radioItems}</div>;
};
