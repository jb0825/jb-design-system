/**
 * Badge component properties
 */
export interface BadgeProps {
  /**
   * Children element
   */
  children?: React.ReactNode | JSX.Element;
  /**
   * 배지 표출 여부
   * default: true
   */
  isVisible?: boolean;
  /**
   * 배지에 표출할 값이 숫자인 경우, 숫자의 최대 값
   * e.g. 999
   */
  max?: number;
  /**
   * 배지에 표출할 값. 해당 옵션이 비어있는 경우 값 없이 빨간 아이콘만 표출됨
   */
  value?: string | number;
}

/**
 * Card component properties
 */
export interface CardProps {
  /**
   * Card 커버 이미지
   */
  cover?: string;
  /**
   * Card 커버 이미지 사이즈 - 높이
   */
  coverHeight?: string;
  /**
   * 커버 이미지 click handler
   */
  onCoverClick?: () => void;
  /**
   * Card content (element or Text)
   */
  content?: React.ReactNode | string;
  /**
   * Card title (element or Text)
   */
  title?: React.ReactNode | string;
  /**
   * Card CSS style object
   */
  style?: React.CSSProperties;
  /**
   * Card 사이즈 - 너비
   */
  width?: string;
  /**
   * Card 사이즈 - 높이
   */
  height?: string;
}

/**
 * Carousel component properties
 */
export interface CarouselProps {
  /**
   * 슬라이드 자동 재생 여부
   * default: true
   */
  autoplay?: boolean;
  /**
   * 슬라이드할 children 엘리먼트 배열
   */
  children: React.ReactNode[];
  /**
   * autoplay 가 true 인 경우, 자동 재생 간격 (ms 단위)
   * default: 3000
   */
  duration?: number;
  /**
   * 화살표 버튼 표출 여부
   * default: true
   */
  showArrow?: boolean;
  /**
   * 하단 인덱스 버튼 표출 여부
   * default: true
   */
  showBar?: boolean;
  /**
   * 인덱스 change handler
   */
  onIndexChange?: (index: number) => void;
}

/**
 * Table 컴포넌트 column 옵션 타입
 */
export interface Columns {
  /**
   * 컬럼 키값
   */
  accessorKey: string;
  /**
   * 컬럼에 표출될 텍스트
   */
  header: string;
  /**
   * 테이블에 footer 를 사용하는 경우, footer 텍스트
   */
  footer?: string;
  /**
   * 컬럼 커스텀 셀
   */
  cell?: any;
  /**
   * 컬럼 사이즈 - 너비
   */
  size?: number;
  /**
   * 정렬 사용 여부
   * default: false
   */
  useSorting?: boolean;
}

/**
 * Pagination 컴포넌트 pagenation 옵션 타입
 */
export interface Pagination {
  /**
   * 현재 페이지
   */
  page: number;
  /**
   * 한 페이지당 보여줄 행의 개수
   */
  pageSize: number;
  /**
   * 전체 행 개수
   */
  totalRows: number;
  /**
   * 전체 페이지 개수
   */
  totalPages: number;
}

/**
 * Pagination component properties
 */
export interface PaginationProps {
  /**
   * 페이지 change event handler
   */
  onPageChange?: (pagination: Pagination) => void;
  /**
   * 페이지 정보
   */
  pagination: Pagination;
  /**
   * 이 옵션이 true 일 시, 한 페이지당 보여줄 행의 개수를 선택할 수 있는 콤보박스가 표출되지 않음.
   * default: false
   */
  disableRowsPerPage?: boolean;
  /**
   * 한 페이지당 보여줄 행의 개수를 선택하는 콤보박스의 옵션.
   * default: [10, 50, 100, 150, 200]
   */
  rowsPerPage?: number[];
}

/**
 * Table component properties
 */
export interface TableProps {
  columns: Columns[];
  data: Object[];
  /**
   * 이 옵션이 true 일 시, 테이블 footer 를 활성화함.
   * default: false
   */
  enableFooter?: boolean;
  /**
   * 이 옵션이 true 일 시, 테이블 row selection 을 활성화함.
   * default: false
   */
  enableRowSelection?: boolean;
  /**
   * row selection change handler
   */
  onRowSelectionChange?: (rowSelection: Record<string, boolean>) => void;
}
