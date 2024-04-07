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
 * CheckboxGroup items type
 */
export interface CheckboxGroupItems {
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
  items: CheckboxGroupItems[];
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
   * 이 옵션이 true 일 시, 필수값 아이콘이 표시됨.
   */
  required: boolean;
  /**
   * Input value 입력 전 표시될 텍스트
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
