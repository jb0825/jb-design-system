import React, { useEffect, useState } from "react";
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Columns, TableProps } from "@types";
import { TableBoxCss } from "./TableStyle";
import {
  TableBody,
  TableBodyCell,
  TableFoot,
  TableFootCell,
  TableHead,
  TableHeadCell,
  Table as TableMain,
  TableRow,
} from "./TableComponents";

export const Table = ({ columns, data, enableFooter }: TableProps) => {
  const [tableColumns, setTableColumns] = useState<Columns[]>(columns);
  const [tableData, setTableData] = useState<Object[]>(data);

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    columns: tableColumns,
    data: tableData,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  useEffect(() => {
    setTableColumns(columns);
  }, [columns]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <div css={TableBoxCss}>
      <TableMain>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHeadCell
                    key={header.id}
                    // @ts-ignore
                    isCanSort={header.column.columnDef.useSorting}
                    onClick={header.column.getToggleSortingHandler()}
                    sortState={header.column.getIsSorted()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHeadCell>
                );
              })}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableBodyCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableBodyCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {enableFooter && (
          <TableFoot>
            {table.getFooterGroups().map((footerGroup) => (
              <TableRow key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <TableFootCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </TableFootCell>
                ))}
              </TableRow>
            ))}
          </TableFoot>
        )}
      </TableMain>
    </div>
  );
};

Table.defaultProps = {
  enableFooter: false,
};
