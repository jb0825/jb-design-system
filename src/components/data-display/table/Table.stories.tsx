import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { Columns, Paginations, TableProps } from "@types";
import { css } from "@emotion/react";
import { Pagination } from "../pagination/Pagination";
import { useState } from "react";

const meta = {
  title: "Design System/Data Display/Table",
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/** mockup column & data */
const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};
const columns: Columns[] = [
  {
    accessorKey: "1",
    header: "column 1",
    // footer: "test",
    // useSorting: true,
  },
  {
    accessorKey: "2",
    header: "column 2",
  },
  {
    accessorKey: "3",
    header: "column 3",
  },
  {
    accessorKey: "4",
    header: "column 4",
  },
  {
    accessorKey: "5",
    header: "column 5",
  },
  {
    accessorKey: "6",
    header: "column 6",
  },
  {
    accessorKey: "7",
    header: "column 7",
  },
];

const random = () => Math.floor(Math.random() * 100);
const makeData = (size: number) =>
  range(size).map(() => {
    return {
      "1": random(),
      "2": random(),
      "3": random(),
      "4": random(),
      "5": random(),
      "6": random(),
      "7": random(),
    };
  });
const data = makeData(20);

export const Default = (args: TableProps) => {
  return (
    <div
      css={css`
        width: 600px;
        height: 400px;
      `}
    >
      <Table columns={columns} data={data} />
    </div>
  );
};

/**
 * Enable column sorting
 */
export const ColumnSorting = (args: TableProps) => {
  return (
    <div
      css={css`
        width: 600px;
        height: 400px;
      `}
    >
      <Table
        columns={columns.map((i) => ({ ...i, useSorting: true }))}
        data={data}
      />
    </div>
  );
};

/**
 * Enable row selection
 */
export const RowSelection = ({
  enableRowSelection = true,
  ...rest
}: TableProps) => {
  return (
    <div
      css={css`
        width: 600px;
        height: 400px;
      `}
    >
      <Table
        columns={columns.map((i) => ({ ...i, useSorting: true }))}
        data={data}
        enableRowSelection={enableRowSelection}
        onRowSelectionChange={console.log}
      />
    </div>
  );
};

/**
 * Table Pagination (Client-Side)
 *
 * Server-Side Pagination 구현하려면 onPageChange 함수에 서버에서 조회하는 로직을 넣으면 됨.
 */
export const TablePagination = () => {
  const data = range(10000).map((i) => {
    return {
      "1": i,
      "2": i,
      "3": i,
      "4": i,
      "5": i,
      "6": i,
      "7": i,
    };
  });

  const [pageData, setPageData] = useState(data.slice(1, 10));
  const [pageInfo, setPageInfo] = useState<Paginations>({
    page: 1,
    pageSize: 10,
    totalPages: 10000 / 10,
    totalRows: 10000,
  });

  const onPageChange = ({
    page,
    pageSize,
    totalPages,
    totalRows,
  }: Paginations) => {
    const start = pageSize * (page - 1) + 1;
    const end = start + pageSize - 1;

    setPageData(data.slice(start, end));
    setPageInfo({
      page,
      pageSize,
      totalPages,
      totalRows,
    });
  };

  return (
    <div
      css={css`
        width: 600px;
        height: 400px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      `}
    >
      <Table columns={columns} data={pageData} />
      <Pagination pagination={pageInfo} onPageChange={onPageChange} />
    </div>
  );
};
