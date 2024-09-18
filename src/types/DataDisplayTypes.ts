/**
 * Badge component properties
 */
export interface BadgeProps {
  children?: React.ReactNode | JSX.Element;
  isVisible?: boolean;
  max?: number;
  value?: string | number;
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
