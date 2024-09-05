export interface BadgeProps {
  children?: React.ReactNode | JSX.Element;
  max?: number;
  value?: string | number;
}

export interface Columns {
  accessorKey: string;
  header: string;
  footer?: string;
  cell?: any;
  size?: number;
  useSorting?: boolean;
}

/**
 * 페이지 정보
 * page: 현재 페이지
 * pageSize: 한 페이지당 보여줄 행의 개수
 * totalRows: 전체 행 개수
 * totalPages: 전체 페이지 개수
 */
export interface Pagination {
  page: number;
  pageSize: number;
  totalRows: number;
  totalPages: number;
}

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
