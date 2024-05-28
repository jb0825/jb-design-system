import { TimePickerProps } from "@types";
import React, { forwardRef, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Input } from "../input/Input";
import { TimePickerCss } from "./TimePickerStyle";
import "react-datepicker/dist/react-datepicker.css";

export const TimePicker = ({
  disabled = false,
  required = false,
  value = null,
  label,
  onValueChange,
  placeholder,
}: TimePickerProps) => {
  const timeRegex =
    /^(0[0-9]|1[0-9]|2[0-3]):(0[1-9]|[0-5][0-9]):(0[1-9]|[0-5][0-9])$/;
  const [date, setDate] = useState<Date | null>(null);

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
          value={value}
          label={label}
          readonly={true}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
        />
      </div>
    )
  );

  /**
   * TimePicker value change handler
   */
  const onTimeValueChange = (value: Date) => {
    setDate(value);
    onValueChange && onValueChange(value);
  };

  useEffect(() => {
    let val: Date | null = null;

    switch (typeof value) {
      case "string":
        // value 가 유효한 시간 문자열인 경우 Date 로 변환하여 값 세팅
        if (timeRegex.test(value)) {
          const today = new Date().toISOString().split("T")[0];
          val = new Date(`${today} ${value}`);
        }
        break;
      case "object":
        val = value;
        break;
    }

    setDate(val);
  }, [value]);

  return (
    <div css={TimePickerCss}>
      <ReactDatePicker
        selected={date}
        onChange={onTimeValueChange}
        customInput={<CustomInput />}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
        timeCaption="Time"
        dateFormat="hh:mm:ss"
        disabled={disabled}
      />
    </div>
  );
};
