export interface Columns {
  accessorKey: string;
  header: string;
  footer?: string;
  cell?: any;
  size?: number;
  useSorting?: boolean;
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
  onRowSelectionChange?: (rowSelection: Record<string, boolean>) => void;
}
