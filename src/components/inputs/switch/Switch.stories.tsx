import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { moon, sun } from "@icons";

const meta = {
  title: "Design System/Inputs/Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: console.log,
  },
};

export const Primary: Story = {
  args: {
    type: "primary",
  },
};

export const Icon: Story = {
  args: {
    type: "icon",
    icon: sun,
    offIcon: moon,
  },
};
