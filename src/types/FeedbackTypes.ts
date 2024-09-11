/**
 * Alert component properties
 */
export interface AlertProps {
  /**
   * Alert 에 표출할 문구 (설명)
   */
  description?: string;
  /**
   * 이 옵션이 true 일 시, 닫기 버튼이 표출되지 않음.
   * default: true
   */
  disableCloseBtn?: boolean;
  /**
   * 닫기 버튼 클릭 이벤트 핸들러.
   */
  onClose?: () => void;
  /**
   * Alert 에 표출할 내용의 제목
   */
  title?: string;
  /**
   * Alert 타입
   * default: success
   */
  type?: "success" | "info" | "warning" | "error";
}
