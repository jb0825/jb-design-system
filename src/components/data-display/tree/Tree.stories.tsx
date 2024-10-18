import type { Meta, StoryObj } from "@storybook/react";
import { Tree } from "./Tree";
import { TreeItem } from "@types";

const meta = {
  title: "Design System/Data Display/Tree",
  component: Tree,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: TreeItem[] = [
  {
    key: "1",
    title: "parent 1",
    children: [
      {
        key: "1-1",
        title: "leaf 1-1",
        children: [
          { key: "1-1-1", title: "left 1-1-1" },
          { key: "1-1-2", title: "left 1-1-2" },
          { key: "1-1-3", title: "left 1-1-3" },
        ],
      },
      {
        key: "1-2",
        title: "leaf 1-2",
        children: [
          { key: "1-2-1", title: "left 1-2-1" },
          { key: "1-2-2", title: "left 1-2-2" },
          { key: "1-2-3", title: "left 1-2-3" },
        ],
      },
      {
        key: "1-3",
        title: "leaf 1-3",
        children: [
          { key: "1-3-1", title: "left 1-3-1" },
          { key: "1-3-2", title: "left 1-3-2" },
          { key: "1-3-3", title: "left 1-3-3" },
        ],
      },
    ],
  },
  { key: "2", title: "parent 2", disabled: true },
  {
    key: "3",
    title: "parent 3",
    children: [
      { key: "3-1", title: "leaf 3-1" },
      {
        key: "3-2",
        title: "leaf 3-2",
        children: [
          { key: "3-2-1", title: "left 3-2-1" },
          { key: "3-2-2", title: "left 3-2-2" },
          { key: "3-2-3", title: "left 3-2-3" },
        ],
      },
      {
        key: "3-3",
        title: "leaf 1-3",
        disabled: true,
        children: [{ key: "1-3-1", title: "left 1-3-1" }],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    items,
    width: "300px",
  },
};
