import { HTMLInputAutoCompleteAttribute } from "react";

/**
 * Button component properties
 */
export interface ButtonProps {
  /**
   * 이 옵션이 true 일 시, Button 은 비활성화 되며 클릭할 수 없음.
   */
  disabled: boolean;
  /**
   * 화면에 표출할 아이콘 이미지
   */
  icon?: string;
  /**
   * Button 라벨
   * type 이 'icon' 인 경우, 라벨 props 를 허용하지 않음.
   */
  label?: string;
  /**
   * Button 클릭 이벤트 핸들러
   */
  onClick: () => void;
  /**
   * Button 스타일 타입
   */
  type: "default" | "primary" | "icon";
  /**
   * Button 사이즈 - 너비
   */
  width?: string;
  /**
   * Button 사이즈 - 높이
   */
  height?: string;
}

/**
 * Checkbox component properties
 */
export interface CheckboxProps {
  /**
   * Checkbox 체크 여부
   */
  checked: boolean;
  /**
   * 이 옵션이 true 일 시, Checkbox 는 비활성화 되며 클릭할 수 없음.
   */
  disabled: boolean;
  /**
   * 이 옴션이 true 일 시,
   * Checkbox 는 체크 또는 체크 해제된 상태가 아닌 중간 상태로 표출됨.
   */
  indeterminate: boolean;
  /**
   * Checkbox 라벨
   */
  label?: string;
  /**
   * Checkbox value change 핸들러
   */
  onValueChange?: (checked: boolean) => void;
  /**
   * 이 옵션이 true 일 시, 필수값 아이콘이 표시됨.
   */
  required: boolean;
}

/**
 * CheckboxGroup component properties
 */
export interface CheckboxGroupProps {
  /**
   * 이 옵션이 true 일 시, 모든 item 은 비활성화 되며 클릭할 수 없음.
   */
  disabled: boolean;
  /**
   * CheckboxGroup items
   */
  items: GroupItems[];
  /**
   * CheckboxGroup value change 핸들러
   */
  onValueChange: (values: string[]) => void;
  /**
   * CheckboxGroup 값
   */
  value: string[];
}

/**
 * DatePicker component properties
 */
export interface DatePickerProps {
  /**
   * 이 옵션이 true 일 시, DatePicker 는 비활성화 되며 값을 선택할 수 없음.
   */
  disabled: boolean;
  /**
   * DatePicker 라벨
   */
  label?: string;
  /**
   * DatePicker 달력에 표출될 언어 설정
   */
  locale: "ko" | "en";
  /**
   * DatePicker value change 핸들러
   */
  onValueChange?: (value: Date) => void;
  /**
   * DatePicker placeholder
   */
  placeholder?: string;
  /**
   * 이 옵션이 true 일 시, 필수값 아이콘이 표시됨.
   */
  required: boolean;
  /**
   * DatePicker 값
   */
  value: Date | string | null;
}

/**
 * CheckboxGroup, RadioGroup items type
 */
export interface GroupItems {
  /**
   * CheckboxGroup item checkbox 비활성화 여부
   */
  disabled?: boolean;
  /**
   * CheckboxGroup item checkbox 라벨
   */
  label?: string;
  /**
   * CheckboxGroup item 값
   */
  value: string;
}

/**
 * Radio component properties
 */
export interface RadioProps {
  /**
   * Radio 체크 여부
   */
  checked: boolean;
  /**
   * 이 옵션이 true 일 시, Radio 는 비활성화 되며 클릭할 수 없음.
   */
  disabled: boolean;
  /**
   * Radio 라벨
   */
  label?: string;
  /**
   * Radio value change 핸들러
   */
  onValueChange?: (checked: boolean) => void;
  /**
   * 이 옵션이 true 일 시, 필수값 아이콘이 표시됨.
   */
  required: boolean;
}

/**
 * RadioGroup component properties
 */
export interface RadioGroupProps {
  /**
   * 이 옵션이 true 일 시, 모든 item 은 비활성화 되며 클릭할 수 없음.
   */
  disabled: boolean;
  /**
   * RadioGroup items
   */
  items: GroupItems[];
  /**
   * RadioGroup value change 핸들러
   */
  onValueChange: (values: string) => void;
  /**
   * RadioGroup 값
   */
  value: string;
}

export interface Options {
  /**
   * Option label
   */
  label: string;
  /**
   * Option 값
   */
  value: string;
  /**
   * 이 옵션이 true 일 시, Option 은 선택할 수 없음
   */
  disabled?: boolean;
}
/**
 * Select component properties
 */
export interface SelectProps {
  /**
   * 이 옵션이 true 일 시, Select 는 비활성화 되며 값을 선택할 수 없음.
   */
  disabled: boolean;
  /**
   * Select 라벨
   */
  label?: string;
  /**
   * Select options
   */
  options: Options[];
  /**
   * Select value change 핸들러
   */
  onValueChange: (value: string) => void;
  /**
   * 이 옵션이 true 일 시, Select 은 값을 선택할 수 없음.
   */
  readonly: boolean;
  /**
   * 이 옵션이 true 일 시, 필수값 아이콘이 표시됨.
   */
  required: boolean;
  /**
   * Select 값
   */
  value?: string;
}

/**
 * Input component properties
 */
export interface InputProps {
  /**
   * Input 자동완성
   */
  autoComplete?: HTMLInputAutoCompleteAttribute;
  /**
   * Input 기본값.
   * value property 를 입력하지 않으면 해당 값이 Input 의 값이 됨.
   */
  defaultValue: string | number | undefined;
  /**
   * 이 옵션이 true 일 시, Input 은 비활성화 되며 값을 입력할 수 없음.
   */
  disabled: boolean;
  /**
   * Input 라벨
   */
  label?: string;
  /**
   * Input Focus out (Blur) 이벤트 핸들러
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Input Change 이벤트 핸들러
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * 이 옵션이 true 일 시, Input 은 값을 입력할 수 없음.
   */
  readonly: boolean;
  /**
   * 이 옵션이 true 일 시, 필수값 아이콘이 표시됨.
   */
  required: boolean;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input 타입
   */
  type?: "text" | "number" | "tel" | "password";
  /**
   * Input 값
   */
  value?: string | number;
}

/**
 * TimePicker component property
 */
export interface TimePickerProps {
  /**
   * 이 옵션이 true 일 시, TimePicker 는 비활성화 되며 값을 선택할 수 없음.
   */
  disabled: boolean;
  /**
   * TimePicker 라벨
   */
  label?: string;
  /**
   * TimePicker value change 핸들러
   */
  onValueChange?: (value: Date) => void;
  /**
   * TimePicker placeholder
   */
  placeholder?: string;
  /**
   * 이 옵션이 true 일 시, 필수값 아이콘이 표시됨.
   */
  required: boolean;
  /**
   * TimePicker 값
   */
  value: Date | string | null;
}
