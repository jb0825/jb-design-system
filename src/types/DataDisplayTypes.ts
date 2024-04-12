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
  enableFooter: boolean;
}
