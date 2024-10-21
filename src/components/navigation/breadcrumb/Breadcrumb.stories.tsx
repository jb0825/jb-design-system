import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";
import { home, search } from "@icons";
import { BreadcrumbItem } from "@types";

const meta = {
  title: "Design System/Navigation/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: BreadcrumbItem[] = [
  { icon: home, onClick: () => console.log("HOME") },
  {
    icon: search,
    title: "Application Center",
    onClick: () => console.log("APPLICATION CENTER"),
    disabled: true,
  },
  {
    icon: search,
    title: "Application List",
    onClick: () => console.log("APPLICATION LIST"),
  },
  { title: "Application", onClick: () => console.log("APPLICATION") },
];

export const Default: Story = {
  args: {
    items: items,
  },
};
