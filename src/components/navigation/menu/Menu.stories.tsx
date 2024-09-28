import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Menu } from "./Menu";
import { MenuItem, MenuProps } from "@types";
import { css } from "@emotion/react";
import { search } from "@icons";

const meta = {
  title: "Design System/Navigation/Menu",
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems: MenuItem[] = [
  {
    key: "1",
    icon: search,
    label: "Navigation One",
  },
  {
    key: "2",
    icon: search,
    label: "Navigation Two",
  },
  {
    key: "3",
    icon: search,
    label: "Navigation Three - Submenu",
    children: [
      {
        key: "3-1",
        label: "Item 1",
      },
      { key: "3-2", label: "Item 2" },
      { key: "3-3", label: "Item 3" },
      { key: "3-4", label: "Item 4" },
    ],
  },
  {
    key: "4",
    icon: search,
    label: "Navigation Four - Submenu",
    children: [
      {
        key: "4-1",
        icon: search,
        label: "Item 1",
        children: [
          { key: "4-1-1", label: "Option 1" },
          {
            key: "4-1-2",
            label: "Option 2",
          },
        ],
      },
      { key: "4-2", label: "Item 2" },
      { key: "4-3", label: "Item 3" },
      { key: "4-4", label: "Item 4" },
    ],
  },
];

export const Horizontal = ({
  direction = "horizontal",
  items = menuItems,
}: MenuProps) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 50px;
        background-color: #f6f6f6;
      `}
    >
      <Menu direction={direction} items={items} />
    </div>
  );
};

export const Vertical = ({
  direction = "vertical",
  items = menuItems,
}: MenuProps) => {
  return (
    <div
      css={css`
        width: 350px;
        height: calc(100vh - 40px);
        background-color: #f6f6f6;
      `}
    >
      <Menu direction={direction} items={items} />
    </div>
  );
};
