import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableProps } from "@types";
import { TableBoxCss, FlexDiv } from "./TableStyle";
import {
  IndeterminateCheckbox,
  TableBody,
  TableBodyCell,
  TableFoot,
  TableFootCell,
  TableHead,
  TableHeadCell,
  Table as TableMain,
  TableRow,
} from "./TableComponents";
import { Resizer } from "./Resizer";

export const Table = ({
  columns,
  data,
  enableFooter = false,
  enableRowSelection = false,
  onRowSelectionChange,
}: TableProps) => {
  // Table scrollbar 컨트롤하기 위한 Ref
  const tableRef = useRef<HTMLDivElement>(null);

  // Table data
  const [tableData, setTableData] = useState<Object[]>(data);

  // Column sorting
  const [sorting, setSorting] = React.useState<SortingState>([]);

  // Row selection
  const [rowSelection, setRowSelection] = React.useState<
    Record<string, boolean>
  >({});

  const tableColumns = useMemo(() => {
    const temp: any = columns;
    if (enableRowSelection)
      temp.unshift({
        id: "select",
        size: 50,
        header: ({ table }: any) => {
          return (
            <IndeterminateCheckbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
              }}
            />
          );
        },
        cell: ({ row }: any) => (
          <FlexDiv>
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </FlexDiv>
        ),
      });
    return temp;
  }, [columns, enableRowSelection]);

  const table = useReactTable({
    columns: tableColumns,
    data: tableData,
    state: {
      sorting,
      rowSelection,
    },
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  useEffect(() => {
    setTableData(data);

    // 테이블 데이터 변경 시 스크롤바 초기화
    tableRef.current && tableRef.current.scrollTo({ top: 0 });
  }, [data]);

  useEffect(() => {
    onRowSelectionChange && onRowSelectionChange(rowSelection);
  }, [rowSelection]);

  return (
    <div css={TableBoxCss} ref={tableRef}>
      <TableMain style={{ width: table.getCenterTotalSize() }}>
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
                    style={{ width: header.getSize() }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <Resizer header={header} />
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
