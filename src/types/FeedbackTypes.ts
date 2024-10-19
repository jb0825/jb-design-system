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

/**
 * Modal component properties
 */
export interface ModalProps {
  /**
   * Modal 하단 footer 부분에 들어갈 커스텀 버튼.
   * 이 옵션이 비어있는 경우, 기본 버튼으로 표출됨.
   */
  buttons?: React.ReactNode[] | JSX.Element[];
  /**
   * Modal 에 표출할 문구 (설명)
   */
  description?: string;
  /**
   * 버튼 라벨 언어 설정
   * default: "ko"
   */
  locale?: "ko" | "en";
  /**
   * Modal 에 표출할 내용의 제목
   */
  title?: string;
  /**
   * 이 옵션이 true 일 시, 화면에 모달이 표출됨.
   * default: false
   */
  isVisible?: boolean;
  /**
   * Modal 상단 header 에 표출될 커스텀 아이콘
   * 이 옵션이 비어있는 경우, type 옵션에 따른 지정된 아이콘이 표출됨.
   */
  icon?: string;
  /**
   * 취소 버튼 click handler
   */
  onCancel?: () => void;
  /**
   * 닫기 (X) 버튼 click handler
   */
  onClose?: () => void;
  /**
   * 확인 버튼 click handler
   */
  onOk?: () => void;
  /**
   * Modal 타입
   * default: default
   */
  type?: "default" | "confirm" | "success" | "info" | "error";
  /**
   * Modal 사이즈 - 너비 (pixel 단위)
   */
  width?: number;
}

/**
 * Progress component properties
 */
export interface ProgressProps {
  /**
   * Progress percentage value (%)
   * min: 0, max: 100
   * 값을 100으로 전달할 시, progress 완료된 상태의 색상과 아이콘이 표출됨.
   */
  value: number;
  /**
   * Progress 타입
   * default: line
   */
  type?: "line" | "circle";
  /**
   * Progress 상태
   * default: default
   *  default - 기본. primary 색상으로 표출됨
   *  active - type 이 line 일 시, 로딩 애니메이션이 적용됨
   *  exception - 프로그래스가 빨간 색상으로 표출됨
   */
  status?: "default" | "active" | "exception";
  /**
   * 상태 표출할지 여부
   * 이 옵션이 false 일 시, 완료/오류 아이콘과 퍼센트(%) 값 텍스트가 표출되지 않음.
   * default: true
   */
  showStatus?: boolean;
  /**
   * Progress 사이즈 - 너비
   */
  width?: string;
}

/**
 * Skeleton component properties
 */
export interface SkeletonProps {
  /**
   * Skeleton 사이즈 - 너비
   */
  width?: string;
  /**
   * Skeleton 사이즈 - 높이
   * default: 20px
   */
  height?: string;
  /**
   * Loading 애니메이션 활성화 여부
   * default: true
   */
  enableAnimation?: boolean;
  /**
   * Skeleton 안에 표출할 아이콘 이미지
   */
  icon?: string;
  /**
   * Skeleton CSS style object
   */
  style?: React.CSSProperties;
}
