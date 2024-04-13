import React from "react";
import {
  HeadCellChildCss,
  TableBodyCellCss,
  TableBodyCss,
  TableCss,
  TableFootCellCss,
  TableFootCss,
  TableHeadCellCss,
  TableHeadCss,
  TableRowCss,
} from "./TableStyle";
import { SortDirection } from "@tanstack/react-table";
import { SortIcon } from "./icons";

interface TableProps {
  children?: React.ReactNode | JSX.Element;
  style?: React.CSSProperties;
}

export const Table = ({ children, style }: TableProps) => {
  return (
    <table css={TableCss} style={style}>
      {children}
    </table>
  );
};

export const TableHead = ({ children }: TableProps) => {
  return <thead css={TableHeadCss}>{children}</thead>;
};

export const TableBody = ({ children }: TableProps) => {
  return <tbody css={TableBodyCss}>{children}</tbody>;
};

export const TableFoot = ({ children }: TableProps) => {
  return <tfoot css={TableFootCss}>{children}</tfoot>;
};

export const TableRow = ({ children }: TableProps) => {
  return <tr css={TableRowCss}>{children}</tr>;
};

interface TableHeadCellProps extends TableProps {
  isCanSort?: boolean;
  onClick?: (event: any) => void;
  sortState: false | SortDirection;
}
export const TableHeadCell = ({
  children,
  isCanSort,
  onClick,
  sortState,
  style,
}: TableHeadCellProps) => {
  const onHeadCellClick = (e: any) => {
    if (!isCanSort) return;
    onClick && onClick(e);
  };

  return (
    <th css={TableHeadCellCss} style={style}>
      <div css={HeadCellChildCss}>
        {children}
        {isCanSort && <SortIcon sort={sortState} onClick={onHeadCellClick} />}
      </div>
    </th>
  );
};

export const TableBodyCell = ({ children }: TableProps) => {
  return <td css={TableBodyCellCss}>{children}</td>;
};

export const TableFootCell = ({ children }: TableProps) => {
  return <th css={TableFootCellCss}>{children}</th>;
};
