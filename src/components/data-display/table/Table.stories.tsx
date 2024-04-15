import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { Columns, TableProps } from "@types";
import { css } from "@emotion/react";

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
const data = range(20).map(() => {
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
