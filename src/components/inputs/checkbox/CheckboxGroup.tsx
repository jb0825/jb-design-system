import { CheckboxGroupProps } from "@types";
import React, { useEffect, useMemo, useState } from "react";
import { Checkbox } from "./Checkbox";
import { cloneDeep } from "lodash-es";
import { CheckboxGroupCss } from "./CheckboxStyle";

export const CheckboxGroup = ({
  disabled = false,
  items,
  onValueChange,
  values,
}: CheckboxGroupProps) => {
  const [inputValues, setInputValues] = useState<string[]>(values || []);

  /**
   * CheckboxGroup value change handler
   */
  const onItemValueChange = (value: string) => {
    const tempValues = cloneDeep(inputValues);
    const index = inputValues?.indexOf(value);

    if (index >= 0) tempValues.splice(index, 1);
    else tempValues.push(value);

    setInputValues(tempValues);
  };

  const checkboxItems = useMemo(() => {
    return (
      <>
        {items.map((item) => (
          <Checkbox
            key={item.value}
            checked={inputValues?.includes(item.value)}
            disabled={disabled || item.disabled}
            label={item.label}
            onValueChange={() => onItemValueChange(item.value)}
          />
        ))}
      </>
    );
  }, [disabled, items, inputValues]);

  useEffect(() => {
    onValueChange(inputValues);
  }, [inputValues]);

  useEffect(() => {
    setInputValues(values || []);
  }, [values]);

  return <div css={CheckboxGroupCss}>{checkboxItems}</div>;
};
