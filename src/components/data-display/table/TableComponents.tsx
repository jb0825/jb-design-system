import { css } from "@emotion/react";
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
import { SortIcon } from "./Icon";

interface TableProps {
  children?: React.ReactNode | JSX.Element;
}

export const Table = ({ children }: TableProps) => {
  return <table css={TableCss}>{children}</table>;
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
}: TableHeadCellProps) => {
  const onHeadCellClick = (e: any) => {
    if (!isCanSort) return;
    onClick && onClick(e);
  };

  return (
    <th css={TableHeadCellCss} onClick={onHeadCellClick}>
      <div css={HeadCellChildCss}>
        {children}
        {isCanSort && <SortIcon sort={sortState} />}
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
