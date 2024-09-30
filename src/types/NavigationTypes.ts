/**
 * Breadcrumb 컴포넌트 items 옵션 타입
 */
export interface BreadcrumbItem {
  /**
   * 아이템 라벨
   */
  title?: string;
  /**
   * 아이콘 이미지
   */
  icon?: string;
  /**
   * 아이템 클릭 이벤트 핸들러
   */
  onClick?: () => void;
  /**
   * 이 옵션이 true 일 시, 해당 아이템은 비활성화되며 클릭할 수 없음.
   * default: false
   */
  disabled?: boolean;
}

/**
 * Breadcrumb component properties
 */
export interface BreadcrumbProps {
  /**
   * Breadcrumb 아이템 (내용)
   */
  items: BreadcrumbItem[];
  /**
   * separator 로 문자열을 전달할 경우 해당 문자를 아이템 간 구분자로 사용
   * default: "/"
   */
  separator?: string;
}

/**
 * Menu 컴포넌트 items 옵션 타입
 */
export interface MenuItem {
  /**
   * 아이템 키값
   */
  key: string;
  /**
   * 아이콘 이미지
   */
  icon?: string;
  /**
   * 아이템 라벨
   */
  label?: string;
  /**
   * 아이템 클릭 이벤트 핸들러
   */
  onClick?: () => void;
  /**
   * 하위 서브메뉴를 가지고 있는 아이템의 경우,
   * MenuItem 타입으로 children 전달
   */
  children?: MenuItem[];
}

/**
 * Menu component properties
 */
export interface MenuProps {
  /**
   * 메뉴가 수평 또는 수직으로 표출될지 선택
   * default: "vertical"
   */
  direction?: "vertical" | "horizontal";
  /**
   * 메뉴 아이템 (내용)
   */
  items: MenuItem[];
}
