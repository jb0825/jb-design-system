export interface AnimationConfig {
  /**
   * 애니메이션이 커지는 최대 사이즈 (px)
   */
  size?: number;
  /**
   * 애니메이션 영역 색상 (default: #ffffff)
   */
  color?: string;
  /**
   * 애니메이션 속도 (단위: ms)
   */
  duration?: number;
  /**
   * 이 옵션이 true 일 시, 애니메이션 시작 위치가 엘리먼트의 가운데로 고정됨.
   */
  isPositionFixed?: boolean;
}
