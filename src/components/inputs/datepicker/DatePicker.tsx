import React, { forwardRef, useEffect, useMemo, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { DatePickerProps } from "@types";
import { Input } from "../input/Input";
import { ko, enUS } from "date-fns/locale";
import { DatePickerCss } from "./DatePickerStyle";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = ({
  disabled,
  label,
  locale,
  onValueChange,
  placeholder,
  required,
  value,
}: DatePickerProps) => {
  const [date, setDate] = useState<Date | null>(null);

  const datePickerLocale = useMemo(() => {
    switch (locale) {
      case "ko":
        return ko;
      case "en":
        return enUS;
    }
  }, [locale]);

  const CustomInput = forwardRef<HTMLDivElement>(
    ({ value, onClick }: any, ref) => (
      <div
        ref={ref}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          if (disabled) return;
          onClick(e);
        }}
      >
        <Input
          label={label}
          value={value}
          readonly={true}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
        />
      </div>
    )
  );

  /**
   * DatePicker value change handler
   */
  const onDateValueChange = (value: Date) => {
    setDate(value);
    onValueChange && onValueChange(value);
  };

  useEffect(() => {
    setDate(typeof value === "string" ? new Date(value) : value);
  }, [value]);

  return (
    <div css={DatePickerCss}>
      <ReactDatePicker
        selected={date}
        onChange={onDateValueChange}
        customInput={<CustomInput />}
        dateFormat="yyyy-MM-dd"
        locale={datePickerLocale}
        disabledKeyboardNavigation
      />
    </div>
  );
};

DatePicker.defaultProps = {
  disabled: false,
  required: false,
  locale: "ko",
  value: null,
};
