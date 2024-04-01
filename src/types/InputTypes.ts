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
